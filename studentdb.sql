-- Create Database
CREATE DATABASE stud_profile;

-- Use the Database
USE stud_profile;

-- Create `students` Table
CREATE TABLE students (
    student_id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(255),
    profile_image VARCHAR(255),
    phone VARCHAR(15),
    address VARCHAR(200),
    semester VARCHAR(10)
);

-- Create `attendance` Table
ALTER TABLE attendance
DROP COLUMN subject,
DROP COLUMN status;


-- Sample Data for `students`
INSERT INTO students (student_id, name, email, password, profile_image, phone, address, class)
VALUES
('STU101', 'Shrawani Wankhede', 'shrawaniwankhede74@gmail.com', 'shra2005', '+91 9104066899', 'Gurukrupa Recidency, Silvassa', 'SY BBA(CA)'),
('STU102', 'Neha Yadav', 'neha.yadav@gmail.com', 'neha2005', '+91 9876543210', 'Yashoda Apartments, Silvassa', '4th Semester'),
('STU103', 'Vruti Lad', 'vruti.lad@gmail.com', 'vrut2005','+91 7788990011', 'Silver Crest, Silvassa', '4th Semester'),
('STU104', 'Vinita Shrimali', 'vinita.shrimali@gmail.com', 'vini2005','+91 9900765432', 'Orchid Residency, Silvassa', '4th Semester'),
('STU105', 'Ayush Yadav', 'ayush.yadav@gmail.com', 'ayus2006','+91 8076543210', 'Maple Residency, Silvassa', '4th Semester'),
('STU106', 'Pallavi Omprakash', 'pallavi.om@gmail.com', 'pall2005','+91 9098765432', 'Harmony Heights, Silvassa', '4th Semester'),
('STU107', 'Pratik Mishra', 'pratik.mishra@gmail.com', 'prat2005','+91 7065987412', 'Royal Apartments, Vapi', '4th Semester'),
('STU108', 'Rohan Guleria', 'rohan.guleria@gmail.com', 'roha2005','+91 6074569823', 'Maple Residency, Silvassa', '4th Semester'),
('STU109', 'Priyadarshan Bhaskar Bodade', 'darshan.bodade@gmail.com', 'dars2004','+91 9512534211', 'Yashodham,Umbergaon', '4th Semester'),
('STU110', 'Harsh Prakash Mangela', 'harsh.mangela@gmail.com', 'hars2004','+91 9632587412', 'Sai Residency, Silvassa', '4th Semester');

ALTER TABLE students
CHANGE COLUMN semester class VARCHAR(50);
UPDATE students
SET class = 'SY BBA(CA)';
ALTER TABLE students
ADD COLUMN semester VARCHAR(20) AFTER class;
UPDATE students
SET semester = '4th Semester';

SELECT student_id, name, class, semester FROM students;
SET SQL_SAFE_UPDATES = 0;


UPDATE students
SET profile_image = 'https://res.cloudinary.com/dlnqhdxfj/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1742582025/students/rgynm0ttghqoodoyp05b.png'
WHERE student_id = 'STU101';
UPDATE students
SET profile_image = 'https://res.cloudinary.com/dlnqhdxfj/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1742582036/students/eyhlptbr3xizgugtsti3.png'
WHERE student_id = 'STU102';
UPDATE students
SET profile_image = 'https://res.cloudinary.com/dlnqhdxfj/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1742582042/students/oty5cfkcoly2wanjrh0m.png'
WHERE student_id = 'STU103';
UPDATE students
SET profile_image = 'https://res.cloudinary.com/dlnqhdxfj/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1742582061/students/xzpswpjzlnzuqbkhrnlg.png'
WHERE student_id = 'STU104';
UPDATE students
SET profile_image = 'https://res.cloudinary.com/dlnqhdxfj/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1742582066/students/qaqxtboyv5mvp8q8qr6n.png'
WHERE student_id = 'STU105';
UPDATE students
SET profile_image = 'https://res.cloudinary.com/dlnqhdxfj/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1742582081/students/vir9tgzjepxahj8ktl2n.png'
WHERE student_id = 'STU106';
UPDATE students
SET profile_image = 'https://res.cloudinary.com/dlnqhdxfj/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1742582084/students/ckl0abs6i16iyikecgrf.png'
WHERE student_id = 'STU107';
UPDATE students
SET profile_image = 'https://res.cloudinary.com/dlnqhdxfj/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1742582098/students/gtjhkxzirotwwukviyys.png'
WHERE student_id = 'STU108';
UPDATE students
SET profile_image = 'https://res.cloudinary.com/dlnqhdxfj/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1742582101/students/lxi26he2mp2iixms5jw1.png'
WHERE student_id = 'STU109';
UPDATE students
SET profile_image = 'https://res.cloudinary.com/dlnqhdxfj/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1742582104/students/wqzuhsz7wviwpizewbwp.png'
WHERE student_id = 'STU110';

UPDATE students
SET profile_image = NULL;

SELECT student_id, name, profile_image FROM students;


-- Create a new attendance table with subject-specific columns
CREATE TABLE attendance (
    attendance_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id VARCHAR(10),
    qr_code , -- Stores the QR code as a base64 string
    date DATE,
    status ENUM('Present', 'Absent') DEFAULT 'Absent',
    FOREIGN KEY (student_id) REFERENCES students(student_id)
);
DROP TABLE IF EXISTS attendance;
INSERT INTO attendance (student_id, qr_code, date)
VALUES (
  'STU101', 
  'data:image/png;base64,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', 
  '2025-03-24'
);
SELECT student_id, name, qr_code FROM attendance;

