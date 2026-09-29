# 01. Hospital Database Setup

Run this script once in MySQL Workbench to initialize the hospital database used throughout the curriculum[cite: 1].

### SQL Schema Script
```sql
CREATE DATABASE hospital_db;
USE hospital_db;

CREATE TABLE departments (
  dept_id INT PRIMARY KEY,
  dept_name VARCHAR(50)
);

CREATE TABLE staff (
  staff_id INT PRIMARY KEY,
  staff_name VARCHAR(50),
  role VARCHAR(30),
  dept_id INT,
  salary DECIMAL(10,2),
  join_date DATE
);

CREATE TABLE shifts (
  shift_id INT PRIMARY KEY,
  staff_id INT,
  shift_date DATE,
  shift_type VARCHAR(10),
  hours_worked INT
);

INSERT INTO departments VALUES
(1,'Emergency'),(2,'Pharmacy'),(3,'Radiology'),(4,'Nursing');

INSERT INTO staff VALUES
(1,'Asha','Nurse',4,32000,'2022-03-15'),
(2,'Ravi','Doctor',1,85000,'2020-06-01'),
(3,'Meena','Pharmacist',2,40000,'2021-09-10'),
(4,'John','Technician',3,38000,'2023-01-20'),
(5,'Priya','Nurse',4,33000,'2022-08-05'),
(6,'Kiran','Doctor',1,90000,'2019-11-12'),
(7,'Sara','Nurse',NULL,31000,'2024-02-01');

INSERT INTO shifts VALUES
(1,1,'2026-09-01','Morning',8),
(2,1,'2026-09-02','Night',10),
(3,2,'2026-09-01','Night',12),
(4,3,'2026-09-01','Morning',8),
(5,5,'2026-09-02','Morning',8),
(6,6,'2026-09-02','Night',12);
