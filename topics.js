const curriculum = [
  // ================= MODULE 0: BUSINESS FIRST =================
  {
    module: "Module 0: Business Analytics",
    section: "Mindset",
    title: "01. Understand the Business First & 5W1H",
    definition: "Before opening Excel, SQL, or Power BI, an analyst must translate ambiguous complaints into a structured, measurable question.",
    meaning: "Ask: What does the business want to improve? Who is affected? What is the cost? What does success look like? Use the 5W1H framework: What, Why, Who, When, Where, and How.",
    instructorCue: "Tell the class: 'Never open MySQL Workbench first. If someone says sales are down, ask who, when, and where. Our job is answering business questions, not just writing code.'",
    syntax: `5W1H Framework:
- What: What exactly is happening?
- Why: Why might it be happening?
- Who: Which staff / departments / customers are affected?
- When: When did it start?
- Where: Where is it localized?
- How: How large is the financial or operational impact?`,
    example: `-- Convert vague statement into measurable question:
-- Vague: "Staffing costs are too high."
-- Measurable: "Why did Emergency shift payroll increase by 25% in Q3 despite total hospital admissions remaining flat?"`
  },
  {
    module: "Module 0: Business Analytics",
    section: "Mindset",
    title: "02. The 3 Levels of Analysis & Anomaly Detection",
    definition: "Moving from descriptive reporting to prescriptive decision-making.",
    meaning: "Level 1: What happened (Descriptive). Level 2: Why it happened (Diagnostic). Level 3: What should we do (Prescriptive). Look for sudden increases, unusual trends, and outliers.",
    instructorCue: "Explain: 'A junior analyst stops at what happened. A senior analyst finds out why and tells management what action to take.'",
    syntax: `Level 1: Descriptive -> "Profit decreased 12%."
Level 2: Diagnostic  -> "Discounts increased from 15% to 25% in Category X."
Level 3: Prescriptive-> "Introduce a 15% discount cap on low-margin products."`,
    example: `-- Example Analysis Flow:
-- 1. Baseline: Normal average shift length is 8 hours.
-- 2. Anomaly: Emergency doctors are logging 12-hour night shifts back-to-back.
-- 3. Action: Cap shifts at 10 hours and schedule relief nursing staff.`
  },
  {
    module: "Module 0: Business Analytics",
    section: "Mindset",
    title: "03. The 10 Golden Rules for Analysts",
    definition: "Core working principles every data analyst must follow to avoid false conclusions.",
    meaning: "1. Business question first. 2. Correlation != Causation. 3. Validate data. 4. Don't trust averages alone. 5. Segment before concluding. 6. Quantify impact. 7. Root cause over biggest number. 8. Actionable recommendations. 9. Pass 'So What?'. 10. Tell a story.",
    instructorCue: "Emphasize Rule 4: 'If you have five nurses earning 30k and two doctors earning 90k, the average salary is 47k. But nobody actually earns 47k! Outliers distort averages. Always compare mean and median.'",
    syntax: `10 Golden Rules:
1. Business question first, data second.
2. Don't confuse correlation with causation.
3. Always validate data (NULLs, types, duplicates).
4. Don't trust averages alone (use median and spread).
5. Segment before concluding.
6. Quantify impact (give exact numbers).
7. Find root cause, not just the biggest number.
8. Recommendations must be actionable.
9. Every insight must answer "So what?".
10. Tell a clear business story.`,
    example: `-- Demonstrating Golden Rule #4:
-- Asha: 32000, Priya: 33000, Sara: 31000
-- Ravi: 85000, Kiran: 90000
-- Mean = 54,200 | Median = 33,000`
  },

  // ================= MODULE 1: MYSQL (PART 1 & 2) =================
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 1: Introduction",
    title: "1. Data",
    definition: "Data is a collection of raw facts, figures, or details about people, things, or events.",
    meaning: "On its own, data is just values like 'Asha' or 32000. It becomes useful information when organised and analysed. Structured data sits in rows and columns. Semi-structured is JSON/XML. Unstructured is images/text.",
    instructorCue: "Say: 'Data by itself is meaningless numbers. When we give it structure in a table with columns like Name and Salary, it becomes information.'",
    syntax: "Structured: Tables (Rows & Columns)\nSemi-structured: JSON, XML\nUnstructured: Video, Audio, Text files",
    example: "-- Example: Staff records\n-- Name: 'Asha', Role: 'Nurse', Salary: 32000"
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 1: Introduction",
    title: "2. Database",
    definition: "A database is an organised collection of data stored electronically so it can be easily accessed, managed, and updated.",
    meaning: "Think of it as a digital filing cabinet. Instead of keeping data in scattered Excel files, a database keeps it in one place, with rules, security, and fast search, even for millions of records.",
    instructorCue: "Tell them: 'Why not just use Excel? Excel crashes when you hit a million rows. A database easily manages millions of rows with strict security.'",
    syntax: "Database -> Contains Tables -> Contain Rows (Records) and Columns (Fields)",
    example: "-- A hospital database holds tables: departments, staff, and shifts."
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 1: Introduction",
    title: "3. DBMS and RDBMS",
    definition: "A DBMS creates and manages databases. An RDBMS stores data in related tables linked by common keys.",
    meaning: "The DBMS is the software between you and the data. In an RDBMS, tables link to each other (e.g., staff.dept_id links to departments.dept_id). MySQL, PostgreSQL, Oracle, and SQL Server are RDBMS software.",
    instructorCue: "Point to the screen: 'The R in RDBMS stands for Relational. That simply means tables are connected to each other using common IDs.'",
    syntax: "Primary Table (departments.dept_id) <---> Related Table (staff.dept_id)",
    example: "-- staff.dept_id = 1 links directly to departments.dept_id = 1 (Emergency)"
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 1: Introduction",
    title: "4. SQL",
    definition: "SQL (Structured Query Language) is the standard language used to communicate with relational databases.",
    meaning: "With SQL you create tables, insert data, read data, update it, and delete it. It is not a program you install; it is the language understood by all relational databases.",
    instructorCue: "Explain: 'You learn SQL syntax once, and you can work in MySQL, PostgreSQL, Oracle, and SQL Server with only tiny differences.'",
    syntax: "SELECT columns FROM table WHERE condition;",
    example: "SELECT staff_name, salary FROM staff WHERE salary > 35000;"
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 1: Introduction",
    title: "5. MySQL & Workbench Setup",
    definition: "MySQL is a free, open-source RDBMS. MySQL Workbench is the graphical desktop tool to write and run queries.",
    meaning: "SQL is the language and MySQL is the engine that understands it. Workbench lets you connect to localhost, view tables, and execute queries.",
    instructorCue: "Guide them: 'Open MySQL Workbench, click your local connection, open a new SQL tab, and test by running SELECT Hello SQL.'",
    syntax: "SELECT 'Hello SQL';",
    example: "SELECT 'Hello SQL' AS test_message;"
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 1: Introduction",
    title: "6. Types of SQL Commands",
    definition: "SQL commands are grouped into five categories based on what they do.",
    meaning: "DDL: CREATE, ALTER, DROP, TRUNCATE (Structure). DML: INSERT, UPDATE, DELETE (Data). DQL: SELECT (Read). DCL: GRANT, REVOKE (Permissions). TCL: COMMIT, ROLLBACK (Transactions).",
    instructorCue: "Note: 'As an analyst, 90% of your daily job is DQL (SELECT). But you need DDL and DML to set up practice tables.'",
    syntax: "DDL: Structure\nDML: Data Rows\nDQL: Query Data\nDCL: Security\nTCL: Transactions",
    example: "-- DDL: CREATE TABLE ...\n-- DML: INSERT INTO ...\n-- DQL: SELECT * FROM ..."
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 1: Introduction",
    title: "7. Sample Hospital Tables Setup",
    definition: "The standardized database schema used across every query in the curriculum.",
    meaning: "Three tables: departments (units), staff (employees linked to department), shifts (hours worked). Sara has no department (NULL), and John and Sara have no shifts.",
    instructorCue: "Tell students: 'Copy this whole script and press Execute in Workbench. Sara has NULL department and John has 0 shifts so we can test joins later.'",
    syntax: "CREATE DATABASE hospital_db;\nUSE hospital_db;\nCREATE TABLE ...\nINSERT INTO ...",
    example: `CREATE DATABASE hospital_db;
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
(6,6,'2026-09-02','Night',12);`
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 2: Data Types & DDL",
    title: "8. Numeric Data Types",
    definition: "Data types that store numbers in a column.",
    meaning: "INT stores whole numbers. BIGINT stores very large integers. DECIMAL(p,s) stores exact decimals (p = total digits, s = digits after decimal). FLOAT/DOUBLE store approximate decimals.",
    instructorCue: "Tip: 'Always use DECIMAL for salary and currency because it is exact. Never use FLOAT for money because rounding errors can occur.'",
    syntax: "column_name INT\ncolumn_name BIGINT\ncolumn_name DECIMAL(precision, scale)",
    example: "salary DECIMAL(10,2)   -- up to 8 digits before decimal, 2 after\nage INT\nphone_number BIGINT"
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 2: Data Types & DDL",
    title: "9. String (Text) Data Types",
    definition: "Data types used to store text characters.",
    meaning: "CHAR(n) is fixed length (shorter strings are padded with spaces). VARCHAR(n) is variable length up to n characters and saves disk space. TEXT stores long descriptions.",
    instructorCue: "Explain: 'Use CHAR(2) for fixed things like State codes (KA, MH). Use VARCHAR for names and emails because length varies.'",
    syntax: "column_name CHAR(n)\ncolumn_name VARCHAR(n)\ncolumn_name TEXT",
    example: "state_code CHAR(2)\nstaff_name VARCHAR(50)\nremarks TEXT"
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 2: Data Types & DDL",
    title: "10. Date and Time Data Types",
    definition: "Data types specifically structured to store calendar dates and clock times.",
    meaning: "DATE stores YYYY-MM-DD. TIME stores HH:MM:SS. DATETIME stores both together. TIMESTAMP tracks row updates automatically. Store dates as DATE, never text.",
    instructorCue: "Say: 'Never store dates as VARCHAR! If you store them as text, sorting and date functions break. Always use DATE.'",
    syntax: "column_name DATE\ncolumn_name TIME\ncolumn_name DATETIME\ncolumn_name TIMESTAMP",
    example: "join_date DATE                -- '2026-09-29'\nshift_start TIME              -- '08:30:00'\ncreated_at DATETIME           -- '2026-09-29 10:15:00'"
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 2: Data Types & DDL",
    title: "11. Boolean Data Type",
    definition: "Stores True or False logic in MySQL.",
    meaning: "MySQL has no separate boolean type. BOOLEAN is a synonym for TINYINT(1). 0 represents FALSE and 1 represents TRUE.",
    instructorCue: "Tell them: 'When you insert TRUE into MySQL, it saves as 1. When you insert FALSE, it saves as 0.'",
    syntax: "column_name BOOLEAN",
    example: `CREATE TABLE test_flags (
  id INT,
  is_active BOOLEAN
);
INSERT INTO test_flags VALUES (1, TRUE), (2, FALSE);
SELECT * FROM test_flags WHERE is_active = 1;`
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 2: Data Types & DDL",
    title: "12. NULL (Missing Values)",
    definition: "NULL means a missing, unknown, or unrecorded value.",
    meaning: "NULL is not zero and not an empty string. Any calculation with NULL produces NULL. Check for it with IS NULL or IS NOT NULL, never = NULL.",
    instructorCue: "Highlight: 'Writing dept_id = NULL returns nothing in SQL! You must write dept_id IS NULL.'",
    syntax: "WHERE column IS NULL\nWHERE column IS NOT NULL",
    example: "SELECT staff_name FROM staff WHERE dept_id IS NULL; -- Returns Sara"
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 2: Data Types & DDL",
    title: "13. Constraints",
    definition: "Rules enforced on columns to ensure only clean, valid data enters the database.",
    meaning: "PRIMARY KEY (unique + not null). FOREIGN KEY (links to another table). NOT NULL (cannot be blank). UNIQUE (no duplicates). DEFAULT (fallback value). CHECK (condition rule).",
    instructorCue: "Point out: 'PRIMARY KEY makes sure no employee ID is repeated or blank. FOREIGN KEY stops someone from entering an invalid department.'",
    syntax: "column datatype PRIMARY KEY\ncolumn datatype NOT NULL\nFOREIGN KEY (col) REFERENCES other(col)",
    example: `CREATE TABLE staff_demo (
  staff_id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) UNIQUE,
  staff_name VARCHAR(50) NOT NULL,
  salary DECIMAL(10,2) CHECK (salary > 0),
  status VARCHAR(10) DEFAULT 'Active',
  dept_id INT,
  FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);`
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 2: Data Types & DDL",
    title: "14. CREATE DATABASE and USE",
    definition: "Commands used to initialize a new database and set it as the active working context.",
    meaning: "A database is a container. Before creating tables, tell MySQL which container you want to work in with the USE command.",
    instructorCue: "Say: 'If you get error No database selected, it means you forgot to run USE hospital_db;'",
    syntax: "CREATE DATABASE db_name;\nUSE db_name;\nSHOW DATABASES;",
    example: "CREATE DATABASE hospital_db;\nUSE hospital_db;\nSHOW DATABASES;"
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 2: Data Types & DDL",
    title: "15. CREATE TABLE",
    definition: "Defines a new table structure with column names, data types, and rules.",
    meaning: "This sets the blueprint of your table: what fields exist and what kinds of values each can accept.",
    instructorCue: "Walk them through the syntax: column name first, then data type, then constraint.",
    syntax: "CREATE TABLE table_name (\n  col1 datatype constraint,\n  col2 datatype constraint\n);",
    example: `CREATE TABLE patients (
  patient_id INT PRIMARY KEY,
  patient_name VARCHAR(50) NOT NULL,
  age INT,
  admit_date DATE
);`
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 2: Data Types & DDL",
    title: "16. DESCRIBE and SHOW TABLES",
    definition: "Inspection commands to see all existing tables and check a table's schema.",
    meaning: "Use them to verify column names, nullability, keys, and default values before writing complex queries.",
    instructorCue: "Tip: 'You can write DESCRIBE staff; or just DESC staff; both do the exact same thing.'",
    syntax: "SHOW TABLES;\nDESCRIBE table_name;",
    example: "SHOW TABLES;\nDESCRIBE staff;"
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 2: Data Types & DDL",
    title: "17. ALTER TABLE",
    definition: "Modifies the structure of an existing table without deleting the data inside it.",
    meaning: "Allows you to add a new column, drop an existing column, modify a data type, or rename columns.",
    instructorCue: "Explain: 'If your company adds phone numbers later, you do not drop the table! You use ALTER TABLE ADD COLUMN.'",
    syntax: "ALTER TABLE table_name ADD col datatype;\nALTER TABLE table_name DROP COLUMN col;\nALTER TABLE table_name MODIFY col new_type;\nALTER TABLE table_name RENAME COLUMN old TO new;",
    example: `ALTER TABLE staff ADD phone VARCHAR(15);
ALTER TABLE staff MODIFY phone VARCHAR(20);
ALTER TABLE staff RENAME COLUMN phone TO contact_no;
ALTER TABLE staff DROP COLUMN contact_no;`
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 2: Data Types & DDL",
    title: "18. DROP, TRUNCATE, and DELETE",
    definition: "The three ways to remove data or tables in SQL.",
    meaning: "DROP removes both the table structure and its data. TRUNCATE empties all rows quickly but keeps the empty table structure. DELETE removes specific rows using a WHERE condition.",
    instructorCue: "Warning: 'Always run a SELECT with the same WHERE clause first before running DELETE so you do not accidentally wipe data!'",
    syntax: "DROP TABLE table_name;\nTRUNCATE TABLE table_name;\nDELETE FROM table_name WHERE condition;",
    example: `DROP TABLE test_flags;
TRUNCATE TABLE patients;
DELETE FROM shifts WHERE shift_id = 6;`
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 2: Data Types & DDL",
    title: "19. INSERT",
    definition: "Adds new rows of data into a table.",
    meaning: "You specify table name, column list, and values. Text and dates must be wrapped in single quotes; numbers do not use quotes.",
    instructorCue: "Say: 'Always list the column names explicitly in your INSERT statement. It prevents bugs if column order changes.'",
    syntax: "INSERT INTO table (col1, col2) VALUES (val1, val2);",
    example: `INSERT INTO patients (patient_id, patient_name, age, admit_date)
VALUES (1, 'Rahul', 45, '2026-09-10');

INSERT INTO patients VALUES
(2, 'Anita', 32, '2026-09-11'),
(3, 'Suresh', 60, '2026-09-12');`
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 2: Data Types & DDL",
    title: "20. UPDATE",
    definition: "Modifies existing values inside a table.",
    meaning: "You choose the column to change (SET) and which specific rows to change (WHERE). Forgetting WHERE updates every row.",
    instructorCue: "Emphasize: 'If you run UPDATE staff SET salary = 35000 without WHERE, every single employee in the company gets that salary!'",
    syntax: "UPDATE table SET col = val WHERE condition;",
    example: `UPDATE staff
SET salary = 35000
WHERE staff_id = 1;`
  }
];
