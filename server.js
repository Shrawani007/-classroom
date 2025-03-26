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
select* from students;

USE stud_profile;
DROP TABLE IF EXISTS attendance;
CREATE TABLE attendance (
    attendance_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id VARCHAR(10),
    date DATE NOT NULL,
    status ENUM('Present', 'Absent') DEFAULT 'Absent',
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    UNIQUE KEY unique_attendance (student_id, date)
) ENGINE=InnoDB;

DESCRIBE attendance;
select* from attendance;
