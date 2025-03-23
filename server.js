const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const session = require('express-session');
const multer = require('multer'); // For handling file uploads
const cloudinary = require('cloudinary').v2; // For Cloudinary integration
const fs = require('fs'); // For file system operations
const app = express();
const port = 3000;

// Database Connection
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '', // Replace with your MySQL password
    database: 'stud_profile' // Replace with your database name
});

db.connect(err => {
    if (err) {
        console.error('❌ Database connection failed: ' + err.stack);
        return;
    }
    console.log('✅ Connected to MySQL database');
});

// Cloudinary Configuration
cloudinary.config({
    cloud_name: 'dlnqhdxfj ', // Replace with your Cloudinary cloud name
    api_key: '281576885953584',      // Replace with your Cloudinary API key
    api_secret: 'da91U0IofxCymRHl0zmY6jUEK7c' // Replace with your Cloudinary API secret
});

// Middleware
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files (HTML, CSS, JS, images)
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.json()); // Parse JSON bodies
app.use(session({
    secret: 'da91U0IofxCymRHl0zmY6jUEK7c', // Replace with a strong secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

//multer configuration for file uploading
const upload = multer({ dest: 'uploads/' }); // Temporary storage for uploaded files

// Login Route
app.post('/login', (req, res) => {
    const { studentId, password } = req.body;

    const query = 'SELECT * FROM students WHERE student_id = ? AND password = ?';
    db.query(query, [studentId, password], (err, results) => {
        if (err) {
            console.error('❌ Database query error: ' + err);
            return res.status(500).json({ success: false, message: 'Database error' });
        }

        if (results.length > 0) {
            req.session.student = results[0]; // Store student details in session
            res.json({ success: true, redirect: '/home.html' }); // Send success response
        } else {
            res.status(401).json({ success: false, message: 'Incorrect Student ID or Password' }); // Send error response
        }
    });
});

// Route to Fetch Student Data
app.get('/student-data', (req, res) => {
    if (!req.session.student) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    const studentId = req.session.student.student_id; // Get student ID from session
    const query = 'SELECT * FROM students WHERE student_id = ?';
    db.query(query, [studentId], (err, results) => {
        if (err) {
            console.error('❌ Database query error: ' + err);
            return res.status(500).json({ success: false, message: 'Database error' });
        }

        if (results.length > 0) {
            res.json({ success: true, student: results[0] }); // Send student data
        } else {
            res.status(404).json({ success: false, message: 'Student not found' });
        }
    });
});

//upload-photo route
app.post('/upload-photo', upload.single('photo'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    if (!req.session.student) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    try {
        // Upload the file to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'students' // Optional: Organize images in a folder
        });

        // Update the student's profile image in the database
        const studentId = req.session.student.student_id;
        const query = 'UPDATE students SET profile_image = ? WHERE student_id = ?';
        db.query(query, [result.secure_url, studentId], (err, results) => {
            if (err) {
                console.error('❌ Database query error: ' + err);
                return res.status(500).json({ success: false, message: 'Database error' });
            }

            // Delete the temporary file after upload
            fs.unlinkSync(req.file.path);

            res.json({ success: true, imageUrl: result.secure_url });
        });
    } catch (error) {
        console.error('❌ Cloudinary upload error: ' + error);
        res.status(500).json({ success: false, message: 'Error uploading image' });
    }
});

//QR Code and Attendance Route 
const qrAttendance = require('./qrAttendance'); // Import the new file
app.use('/attendance', qrAttendance); // Use the QR code and attendance routes

// Default Route (Redirect to Login Page)
app.get('/', (req, res) => {
    res.redirect('/login.html'); // Redirect to login page
});

// Start the Server
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:3000`);
});
