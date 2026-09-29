const curriculum = [
  // =========================================================================
  // MODULE 0: BUSINESS ANALYTICS & PROBLEM-SOLVING
  // =========================================================================
  {
    module: "Module 0: Business Analytics",
    section: "Framework",
    title: "01. Understand the Business First & 5W1H",
    definition: "Before opening Excel, SQL, or Power BI, an analyst must translate vague business issues into a measurable question.",
    meaning: "Ask: What does the business want to improve? Who is affected? What is the cost? What does success look like? Use the 5W1H framework: What, Why, Who, When, Where, and How to prevent random analysis.",
    instructorCue: "Tell students: 'Never open SQL Workbench first. If management says shift costs are high, ask who, when, and where. Our job is answering business questions, not just writing code.'",
    syntax: `5W1H Framework:
- What: What exactly is happening?
- Why: Why might it be happening?
- Who: Which staff / departments are affected?
- When: When did it start?
- Where: Where is it localized?
- How: How large is the operational or financial impact?`,
    example: `-- Convert vague statement into a measurable question:
-- Vague: "Staffing costs are too high."
-- Measurable: "Why did Emergency shift payroll increase by 25% in September 2026 despite admission volumes remaining flat?"`
  },
  {
    module: "Module 0: Business Analytics",
    section: "Framework",
    title: "02. Establish Baseline & Find the Anomaly",
    definition: "Establishing what is 'normal' before diagnosing problems and isolating outliers.",
    meaning: "Always establish baseline KPIs first (Volume -> Hours -> Cost -> Overtime). Then compare: Current vs previous period, Actual vs target, Department vs department. Look for sudden spikes, outliers, and inverted trends.",
    instructorCue: "Explain: 'If normal average shift length is 8 hours, finding back-to-back 12-hour night shifts in Emergency is an immediate red flag.'",
    syntax: `Anomaly Detection Checklist:
1. Sudden increases / decreases
2. Diverging metrics (e.g., Sales Up, Profit Down)
3. Large variance between peer groups
4. Extreme values pulling averages`,
    example: `-- Spotting Divergence:
-- Overall Hospital: Average 8.3 hours per shift.
-- Emergency Dept: 100% of shifts are 12-hour night blocks.`
  },
  {
    module: "Module 0: Business Analytics",
    section: "Framework",
    title: "03. Segment the Data & The 'Why?' Chain",
    definition: "Drilling down through hierarchical dimensions and asking 'Why?' five times to isolate root causes.",
    meaning: "Never stop at the overall hospital number. Break it down by: Time (Month/Day), Department, Role, and Shift Type. Separate symptoms (e.g., cost increased) from root causes (e.g., senior doctors assigned to unassisted night coverage).",
    instructorCue: "Say: 'Symptom: Payroll is high. Cause: More night hours. Root cause: High-bracket doctors are scheduled for night coverage without any junior nursing relief.'",
    syntax: `The 5-Why Chain:
Cost is up -> Why? Night hours increased.
Why? Only doctors logged nights.
Why? Unassigned staff (Sara) were never scheduled.
Root Cause: Inefficient scheduling allocation.`,
    example: `-- Slicing the metric:
-- Overall Hospital: 58 total hours across 7 staff.
-- Sliced: Emergency alone consumed 24 hours (41.4% of total hospital hours) across only 2 doctors.`
  },
  {
    module: "Module 0: Business Analytics",
    section: "Framework",
    title: "04. 3 Levels of Analytics & 10 Golden Rules",
    definition: "Progressing from what happened to prescribing business decisions, governed by strict data principles.",
    meaning: "Level 1: Descriptive (What happened). Level 2: Diagnostic (Why it happened). Level 3: Prescriptive (What should we do). Remember Rule 4: Never trust averages alone; compare mean vs median.",
    instructorCue: "Emphasize Rule 4: 'Our hospital average salary is 49,857 INR, but the median is only 38,000 INR! Two doctors pull the average up. Always check the median.'",
    syntax: `10 Golden Rules:
1. Business question first.
2. Correlation != Causation.
3. Validate data (NULLs, types, duplicates).
4. Don't trust averages alone.
5. Segment before concluding.
6. Quantify impact in exact numbers.
7. Root cause over biggest number.
8. Recommendations must be actionable.
9. Every insight must answer "So what?".
10. Tell a clear business story.`,
    example: `-- Level 1: Emergency night hours reached 24 hours.
-- Level 2: Two doctors (85k and 90k salary) worked all night slots.
-- Level 3: Rebalance shifts by scheduling nurses (32k salary) to lower night payroll.`
  },

  // =========================================================================
  // MODULE 1: MYSQL MASTERY (PARTS 1 TO 8: TOPICS 1 TO 54)
  // =========================================================================
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 1: Introduction",
    title: "1. Data",
    definition: "Data is a collection of raw facts, figures, or details about people, things, or events.",
    meaning: "On its own, data is just values like 'Asha' or 32000. It becomes useful information when organised and analysed. Structured data sits in rows and columns. Semi-structured is JSON/XML. Unstructured is video/text.",
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
    instructorCue: "Tell them: 'Excel crashes when you hit a million rows. A database easily manages millions of rows with strict security.'",
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
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 3: Querying Data",
    title: "21. SELECT",
    definition: "SELECT reads data from one or more tables.",
    meaning: "It is the most used SQL command. You choose which columns to see and which table they come from. An asterisk (*) means all columns.",
    instructorCue: "Tell students: 'Always name the columns you want. In a company with 100 columns, running SELECT * can freeze your database.'",
    syntax: "SELECT col1, col2 FROM table_name;\nSELECT * FROM table_name;",
    example: "SELECT staff_name, role FROM staff;\nSELECT * FROM departments;"
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 3: Querying Data",
    title: "22. WHERE",
    definition: "WHERE filters rows based on a condition.",
    meaning: "Only rows where the condition evaluates to true are returned. Comparison operators include =, != (or <>), >, <, >=, <=.",
    instructorCue: "Point to the screen: 'WHERE looks at rows one by one. If salary > 35000 is true, that row gets displayed. If false, it gets dropped.'",
    syntax: "SELECT columns FROM table_name WHERE condition;",
    example: "SELECT staff_name, salary FROM staff WHERE salary > 35000;"
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 3: Querying Data",
    title: "23. AND, OR, NOT",
    definition: "Logical operators used to combine or reverse conditions in a WHERE clause.",
    meaning: "AND: both conditions must be true. OR: at least one condition must be true. NOT: reverses a condition. Use brackets when mixing AND and OR.",
    instructorCue: "Say: 'Notice how the first query returns only Priya. Asha earns 32,000, so she is excluded because salary must be strictly greater than 32,000.'",
    syntax: "WHERE cond1 AND cond2\nWHERE cond1 OR cond2\nWHERE NOT cond",
    example: `SELECT staff_name, role, salary FROM staff WHERE role = 'Nurse' AND salary > 32000;
SELECT staff_name, role FROM staff WHERE role = 'Doctor' OR role = 'Pharmacist';`
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 3: Querying Data",
    title: "24. IN",
    definition: "IN checks whether a value matches any value in a specified list.",
    meaning: "It is a cleaner, shorter way to write multiple OR conditions on the same column.",
    instructorCue: "Tell them: 'Instead of typing role = Doctor OR role = Pharmacist OR role = Nurse, IN lets you check against a neat list in brackets.'",
    syntax: "WHERE column IN (value1, value2, ...)",
    example: "SELECT staff_name, role FROM staff WHERE role IN ('Doctor', 'Pharmacist');"
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 3: Querying Data",
    title: "25. BETWEEN",
    definition: "BETWEEN checks whether a value falls within a range, including both boundary values.",
    meaning: "Works with numbers, dates, and text. Both the low and high values are inclusive.",
    instructorCue: "Remind them: 'BETWEEN is inclusive. That means 32000 and 40000 are both included in the final results.'",
    syntax: "WHERE column BETWEEN low AND high",
    example: `SELECT staff_name, salary FROM staff WHERE salary BETWEEN 32000 AND 40000;
SELECT staff_name, join_date FROM staff WHERE join_date BETWEEN '2022-01-01' AND '2022-12-31';`
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 3: Querying Data",
    title: "26. LIKE",
    definition: "LIKE searches for a specified text pattern.",
    meaning: "The % sign matches any number of characters. The _ sign matches exactly one character. In MySQL, LIKE is case-insensitive by default.",
    instructorCue: "Write on the board: '% means anything, underscore means exactly one letter. _ara matches Sara and Tara.'",
    syntax: "WHERE column LIKE 'pattern'",
    example: `SELECT staff_name FROM staff WHERE staff_name LIKE 'A%';   -- starts with A
SELECT staff_name FROM staff WHERE staff_name LIKE '%a';   -- ends with a
SELECT staff_name FROM staff WHERE staff_name LIKE '_ara'; -- 4 letters ending in ara`
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 3: Querying Data",
    title: "27. ORDER BY",
    definition: "ORDER BY sorts the returned result rows.",
    meaning: "ASC sorts low to high (default). DESC sorts high to low. You can sort by multiple columns by separating them with commas.",
    instructorCue: "Say: 'If you want to see the highest earners first, always put DESC after the column name.'",
    syntax: "SELECT columns FROM table_name ORDER BY col1 ASC, col2 DESC;",
    example: "SELECT staff_name, salary FROM staff ORDER BY salary DESC;"
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 3: Querying Data",
    title: "28. LIMIT and OFFSET",
    definition: "LIMIT restricts the maximum number of rows returned.",
    meaning: "Frequently paired with ORDER BY to fetch top-N or bottom-N records. OFFSET skips a specified number of rows first.",
    instructorCue: "Tell them: 'Top-3 highest salaries is simply ORDER BY salary DESC followed by LIMIT 3.'",
    syntax: "SELECT columns FROM table ORDER BY col LIMIT n OFFSET m;",
    example: "SELECT staff_name, salary FROM staff ORDER BY salary DESC LIMIT 3;"
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 3: Querying Data",
    title: "29. DISTINCT",
    definition: "DISTINCT eliminates duplicate values from the output.",
    meaning: "Displays each unique value only once. COUNT(DISTINCT column) counts how many unique values exist.",
    instructorCue: "Show this: 'We have 7 staff members, but only 4 unique roles. DISTINCT role shows Nurse, Doctor, Pharmacist, and Technician once.'",
    syntax: "SELECT DISTINCT column FROM table_name;",
    example: `SELECT DISTINCT role FROM staff;
SELECT COUNT(DISTINCT role) AS total_roles FROM staff;`
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 3: Querying Data",
    title: "30. Aliases (AS)",
    definition: "An alias provides a temporary name for a column or table in a query.",
    meaning: "Improves column readability and shortens long table names in joins. The alias only lives for the duration of that specific query.",
    instructorCue: "Say: 'Use quotes if your alias has spaces, like AS \"Yearly Salary\". Otherwise, plain text is fine.'",
    syntax: "SELECT column AS alias_name FROM table_name AS t;",
    example: "SELECT staff_name AS employee, salary * 12 AS yearly_salary FROM staff AS s;"
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 4: Summarizing Data",
    title: "31. Aggregate Functions",
    definition: "Aggregate functions compute a single summary result across multiple rows.",
    meaning: "COUNT counts rows. SUM adds numbers. AVG gives the mean. MIN and MAX give smallest and largest. COUNT(*) counts all rows; COUNT(column) ignores NULLs.",
    instructorCue: "Point out: 'Notice how COUNT(*) gives 7, but COUNT(dept_id) gives 6 because Sara has a NULL department.'",
    syntax: "SELECT COUNT(*), SUM(col), AVG(col), MIN(col), MAX(col) FROM table_name;",
    example: `SELECT COUNT(*) AS total_staff,
       SUM(salary) AS total_salary,
       AVG(salary) AS avg_salary,
       MIN(salary) AS lowest,
       MAX(salary) AS highest
FROM staff;`
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 4: Summarizing Data",
    title: "32. GROUP BY",
    definition: "GROUP BY partitions rows into summary buckets so aggregates run per group.",
    meaning: "Every non-aggregated column listed in SELECT must also appear in the GROUP BY clause.",
    instructorCue: "Explain: 'If you SELECT role and AVG(salary), you MUST write GROUP BY role. Otherwise, MySQL will throw an error.'",
    syntax: "SELECT column, AGGREGATE(column) FROM table_name GROUP BY column;",
    example: "SELECT role, COUNT(*) AS total, AVG(salary) AS avg_salary FROM staff GROUP BY role;"
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 4: Summarizing Data",
    title: "33. HAVING",
    definition: "HAVING filters groups after GROUP BY aggregation takes place.",
    meaning: "WHERE filters raw rows before grouping; HAVING filters aggregated groups after grouping. You cannot use aggregate functions inside WHERE.",
    instructorCue: "Say: 'Interview favorite: WHERE filters rows before math happens. HAVING filters totals after math happens.'",
    syntax: "SELECT col, AGG(col) FROM table GROUP BY col HAVING aggregate_condition;",
    example: "SELECT dept_id, AVG(salary) AS avg_salary FROM staff GROUP BY dept_id HAVING AVG(salary) > 35000;"
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 4: Summarizing Data",
    title: "34. CASE WHEN",
    definition: "Applies if-else conditional logic directly inside a SQL query.",
    meaning: "Evaluates conditions sequentially and returns the corresponding result for the first matching branch. ELSE provides a fallback.",
    instructorCue: "Show this: 'CASE WHEN works just like IF-THEN in Excel. It lets us categorize salaries into High, Medium, or Low.'",
    syntax: "CASE WHEN condition1 THEN res1 ELSE default_res END",
    example: `SELECT staff_name, salary,
  CASE
    WHEN salary >= 80000 THEN 'High'
    WHEN salary >= 35000 THEN 'Medium'
    ELSE 'Low'
  END AS salary_band
FROM staff;`
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 5: Joins & UNION",
    title: "35. INNER JOIN",
    definition: "INNER JOIN returns only rows that have matching values in both tables.",
    meaning: "Rows without a key match in either table are completely dropped from the output. Sara is excluded here because her dept_id is NULL.",
    instructorCue: "Point to the screen: 'Count the rows—there are only 6 rows returned. Sara is missing because she has no department ID.'",
    syntax: "SELECT columns FROM t1 INNER JOIN t2 ON t1.col = t2.col;",
    example: "SELECT s.staff_name, d.dept_name FROM staff s INNER JOIN departments d ON s.dept_id = d.dept_id;"
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 5: Joins & UNION",
    title: "36. LEFT JOIN & Anti-Join",
    definition: "LEFT JOIN returns all rows from the left table, plus matching rows from the right table.",
    meaning: "If there is no match on the right side, its columns display as NULL. An Anti-Join checks WHERE right_col IS NULL to find unmatched rows.",
    instructorCue: "Show them: 'Sara is back! But her dept_name is NULL. And look at the second query—it finds staff with 0 shifts.'",
    syntax: "SELECT columns FROM t1 LEFT JOIN t2 ON t1.col = t2.col;",
    example: `-- Left Join
SELECT s.staff_name, d.dept_name FROM staff s LEFT JOIN departments d ON s.dept_id = d.dept_id;

-- Anti-Join: staff who worked 0 shifts
SELECT s.staff_name FROM staff s LEFT JOIN shifts sh ON s.staff_id = sh.staff_id WHERE sh.shift_id IS NULL;`
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 5: Joins & UNION",
    title: "37. RIGHT JOIN",
    definition: "Returns all rows from the right table, plus matches from the left table.",
    meaning: "Mirror image of LEFT JOIN. Most developers swap table order and stick to LEFT JOIN for readability.",
    instructorCue: "Say: 'RIGHT JOIN is rarely used in real jobs. Most analysts swap the table positions and use LEFT JOIN.'",
    syntax: "SELECT columns FROM t1 RIGHT JOIN t2 ON t1.col = t2.col;",
    example: "SELECT d.dept_name, s.staff_name FROM staff s RIGHT JOIN departments d ON s.dept_id = d.dept_id;"
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 5: Joins & UNION",
    title: "38. Joining Multiple Tables",
    definition: "Chaining multiple JOIN clauses to combine three or more related tables.",
    meaning: "Each join requires its own separate ON condition. Build incrementally: join two tables first, verify, then add the third.",
    instructorCue: "Guide them: 'We link staff to departments first, then link staff to shifts using staff_id.'",
    syntax: "SELECT cols FROM t1 JOIN t2 ON t1.c = t2.c JOIN t3 ON t2.c = t3.c;",
    example: `SELECT s.staff_name, d.dept_name, sh.shift_date, sh.shift_type, sh.hours_worked
FROM staff s
JOIN departments d ON s.dept_id = d.dept_id
JOIN shifts sh ON s.staff_id = sh.staff_id;`
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 5: Joins & UNION",
    title: "39. SELF JOIN",
    definition: "A self join joins a table to itself using distinct aliases.",
    meaning: "Used to compare records within the exact same table, like matching colleagues in the same department.",
    instructorCue: "Explain: 'We give the same table two nicknames: a and b. This lets us pair up staff in the same department.'",
    syntax: "SELECT a.col, b.col FROM table a JOIN table b ON a.col = b.col;",
    example: `SELECT a.staff_name AS staff_1, b.staff_name AS staff_2
FROM staff a
JOIN staff b ON a.dept_id = b.dept_id AND a.staff_id < b.staff_id;`
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 5: Joins & UNION",
    title: "40. UNION and UNION ALL",
    definition: "Combines the result sets of two or more SELECT queries into a single output.",
    meaning: "UNION removes duplicates. UNION ALL preserves duplicates and executes faster. Queries must have identical column counts and types.",
    instructorCue: "Tell them: 'UNION removes duplicates by sorting, which takes time. If you want everything or know data is unique, use UNION ALL.'",
    syntax: "SELECT col FROM t1 UNION SELECT col FROM t2;\nSELECT col FROM t1 UNION ALL SELECT col FROM t2;",
    example: `SELECT staff_id FROM shifts WHERE shift_type = 'Morning'
UNION
SELECT staff_id FROM shifts WHERE shift_type = 'Night';`
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 6: Functions & Cleaning",
    title: "41. String Functions",
    definition: "Built-in SQL functions that manipulate text values.",
    meaning: "CONCAT joins text. UPPER/LOWER alter casing. LENGTH counts characters. TRIM removes extra spaces. SUBSTRING extracts characters (starts at index 1).",
    instructorCue: "Point out: 'In SQL, indexing starts at 1, unlike Python which starts at 0! SUBSTRING(staff_name, 1, 3) gives the first 3 letters.'",
    syntax: "CONCAT() | UPPER() | LOWER() | LENGTH() | TRIM() | SUBSTRING()",
    example: `SELECT CONCAT(staff_name, ' - ', role) AS staff_info,
       UPPER(staff_name) AS name_upper,
       LENGTH(staff_name) AS name_length,
       SUBSTRING(staff_name, 1, 3) AS short_name
FROM staff;`
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 6: Functions & Cleaning",
    title: "42. Numeric Functions",
    definition: "Functions used to perform mathematical calculations and rounding on numbers.",
    meaning: "ROUND rounds to decimals. CEIL rounds up to the next integer. FLOOR rounds down. ABS gives absolute value. MOD gives the remainder.",
    instructorCue: "Say: 'CEIL always pushes numbers up (4.2 becomes 5). FLOOR always pushes numbers down (4.8 becomes 4).'",
    syntax: "ROUND(num, dec) | CEIL(num) | FLOOR(num) | ABS(num) | MOD(a, b)",
    example: `SELECT ROUND(AVG(salary), 2) AS avg_salary,
       CEIL(4.2) AS ceil_val,
       FLOOR(4.8) AS floor_val
FROM staff;`
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 6: Functions & Cleaning",
    title: "43. Date Functions",
    definition: "Functions that extract date parts, format dates, and calculate intervals.",
    meaning: "CURDATE() gives today. YEAR, MONTH, DAY extract parts. DATE_FORMAT adjusts display. DATEDIFF calculates difference in days. TIMESTAMPDIFF calculates units like years.",
    instructorCue: "Tip: 'Always use DATE_FORMAT for dashboards: %d is day, %m is month number, %M is full month name, %Y is 4-digit year.'",
    syntax: "CURDATE() | YEAR() | DATE_FORMAT(date, '%d-%m-%Y') | DATEDIFF(d1, d2)",
    example: `SELECT staff_name,
       YEAR(join_date) AS join_year,
       DATE_FORMAT(join_date, '%d-%m-%Y') AS join_date_fmt,
       DATEDIFF(CURDATE(), join_date) AS days_worked,
       TIMESTAMPDIFF(YEAR, join_date, CURDATE()) AS years_worked
FROM staff;`
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 6: Functions & Cleaning",
    title: "44. IFNULL and COALESCE",
    definition: "Functions that replace NULL values with a readable default.",
    meaning: "IFNULL(a, b) returns b if a is NULL. COALESCE(a, b, c, ...) returns the first non-NULL value from the argument list.",
    instructorCue: "Show this: 'Instead of showing NULL to a client, IFNULL replaces it with Unassigned so reports look professional.'",
    syntax: "IFNULL(col, replacement) | COALESCE(v1, v2, ..., replacement)",
    example: `SELECT s.staff_name, IFNULL(d.dept_name, 'Unassigned') AS department
FROM staff s
LEFT JOIN departments d ON s.dept_id = d.dept_id;`
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 6: Functions & Cleaning",
    title: "45. Finding Duplicates",
    definition: "Identifying duplicate values across columns that should be unique.",
    meaning: "Group by the column in question, count rows, and filter with HAVING COUNT(*) > 1. Essential data cleaning technique.",
    instructorCue: "Say: 'This is the standard query to detect bad data. If email has COUNT(*) > 1, you know you have duplicate users.'",
    syntax: "SELECT col, COUNT(*) FROM table GROUP BY col HAVING COUNT(*) > 1;",
    example: "SELECT role, COUNT(*) AS total FROM staff GROUP BY role HAVING COUNT(*) > 1;"
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 7: Intermediate SQL",
    title: "46. Subquery",
    definition: "A query nested inside another SQL statement.",
    meaning: "The inner query runs first and feeds its result to the outer query. Commonly used inside WHERE, FROM, or SELECT.",
    instructorCue: "Explain: 'Step 1: SQL calculates the average salary. Step 2: The outer query filters whoever earns more than that average.'",
    syntax: "SELECT cols FROM table WHERE col > (SELECT AVG(col) FROM table);",
    example: "SELECT staff_name, salary FROM staff WHERE salary > (SELECT AVG(salary) FROM staff);"
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 7: Intermediate SQL",
    title: "47. CTE (Common Table Expression)",
    definition: "A named temporary result set defined with WITH at the beginning of a query.",
    meaning: "Cleaner and more readable than deep subqueries. Can be referenced multiple times within the same query. Requires MySQL 8.0+.",
    instructorCue: "Say: 'Think of a CTE like creating a temporary table in memory, which you immediately use in your main query.'",
    syntax: "WITH cte_name AS (SELECT ...) SELECT ... FROM cte_name;",
    example: `WITH dept_avg AS (
  SELECT dept_id, AVG(salary) AS avg_salary
  FROM staff
  GROUP BY dept_id
)
SELECT s.staff_name, s.salary, d.avg_salary
FROM staff s
JOIN dept_avg d ON s.dept_id = d.dept_id
WHERE s.salary > d.avg_salary;`
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 7: Intermediate SQL",
    title: "48. Window Functions: ROW_NUMBER",
    definition: "Performs calculations across related row subsets without collapsing rows into a single summary line.",
    meaning: "OVER() defines the window. PARTITION BY splits data into buckets. ORDER BY sequences rows inside each bucket. ROW_NUMBER assigns sequential numbers starting at 1.",
    instructorCue: "Tell them: 'Unlike GROUP BY which squashes rows, window functions keep every single employee row intact while numbering them.'",
    syntax: "ROW_NUMBER() OVER (PARTITION BY col ORDER BY col)",
    example: `SELECT staff_name, dept_id, salary,
  ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS row_num
FROM staff;`
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 7: Intermediate SQL",
    title: "49. RANK and DENSE_RANK",
    definition: "Assigns numerical rankings to rows, handling duplicate values differently.",
    meaning: "RANK skips subsequent ranks on ties (1, 2, 2, 4). DENSE_RANK assigns identical ranks on ties without skipping numbers (1, 2, 2, 3).",
    instructorCue: "Explain: 'If two doctors both earn 85k, RANK gives them both 2 and skips to 4. DENSE_RANK gives both 2 and goes to 3. Use DENSE_RANK for Top-N problems.'",
    syntax: "RANK() OVER (PARTITION BY col ORDER BY col)\nDENSE_RANK() OVER (PARTITION BY col ORDER BY col)",
    example: `SELECT staff_name, salary,
  RANK() OVER (ORDER BY salary DESC) AS rnk,
  DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rnk
FROM staff;`
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 7: Intermediate SQL",
    title: "50. LAG and LEAD",
    definition: "LAG accesses values from previous rows; LEAD accesses values from subsequent rows.",
    meaning: "Allows row-by-row comparisons without performing self-joins. Excellent for period-over-period or shift-to-shift tracking.",
    instructorCue: "Show this: 'LAG lets you look backward one row. The very first shift shows NULL because there is no prior shift.'",
    syntax: "LAG(col, offset, def) OVER (PARTITION BY col ORDER BY col)",
    example: `SELECT staff_id, shift_date, hours_worked,
  LAG(hours_worked) OVER (PARTITION BY staff_id ORDER BY shift_date) AS prev_hours
FROM shifts;`
  },
  {
    module: "Module 1: MySQL Mastery",
    section: "Part 7: Intermediate SQL",
    title: "51. Running Total (Cumulative Sum)",
    definition: "Calculates an ongoing cumulative sum row by row.",
    meaning: "Uses SUM() with an OVER(ORDER BY) clau
