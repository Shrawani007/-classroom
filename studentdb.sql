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
CREATE TABLE attendance (
    student_id VARCHAR(10),
    date DATE,
    status ENUM('Present', 'Absent'),
    PRIMARY KEY (student_id, date),
    FOREIGN KEY (student_id) REFERENCES students(student_id)
);

-- Sample Data for `students`
INSERT INTO students (student_id, name, email, password, profile_image, phone, address, class)
VALUES
('STU101', 'Shrawani Wankhede', 'shrawaniwankhede74@gmail.com', 'shra2005', 'profile1.jpg', '+91 9104066899', 'Gurukrupa Recidency, Silvassa', 'SY BBA(CA)');
('STU102', 'Neha Yadav', 'neha.yadav@gmail.com', 'neha2005', 'profile2.jpg', '+91 9876543210', 'Yashoda Apartments, Silvassa', '4th Semester'),
('STU103', 'Vruti Lad', 'vruti.lad@gmail.com', 'vrut2005', 'profile3.jpg', '+91 7788990011', 'Silver Crest, Silvassa', '4th Semester'),
('STU104', 'Vinita Shrimali', 'vinita.shrimali@gmail.com', 'vini2005', 'profile4.jpg', '+91 9900765432', 'Orchid Residency, Silvassa', '4th Semester'),
('STU105', 'Ayush Yadav', 'ayush.yadav@gmail.com', 'ayus2006', 'profile5.jpg', '+91 8076543210', 'Maple Residency, Silvassa', '4th Semester'),
('STU106', 'Pallavi Omprakash', 'pallavi.om@gmail.com', 'pall2005', 'profile6.jpg', '+91 9098765432', 'Harmony Heights, Silvassa', '4th Semester'),
('STU107', 'Pratik Mishra', 'pratik.mishra@gmail.com', 'prat2005', 'profile7.jpg', '+91 7065987412', 'Royal Apartments, Vapi', '4th Semester'),
('STU108', 'Rohan Guleria', 'rohan.guleria@gmail.com', 'roha2005', 'profile8.jpg', '+91 6074569823', 'Maple Residency, Silvassa', '4th Semester'),
('STU109', 'Priyadarshan Bhaskar Bodade', 'darshan.bodade@gmail.com', 'dars2004', 'profile9.jpg', '+91 9512534211', 'Yashodham,Umbergaon', '4th Semester'),
('STU110', 'Harsh Prakash Mangela', 'harsh.mangela@gmail.com', 'hars2004', 'profile10.jpg', '+91 9632587412', 'Sai Residency, Silvassa', '4th Semester');

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


-- Sample Data for `attendance`

