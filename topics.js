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
    module: "Module 1: MySQL",
    section: "Part 1: Introduction",
    title: "1. Data",
    definition: "Data is a collection of raw facts, figures, or details about people, things, or events.",
    meaning: "On its own, data is just values like 'Asha' or 32000. It becomes useful information when organised and analysed. Structured data sits in rows and columns. Semi-structured is JSON/XML. Unstructured is video/text.",
    instructorCue: "Say: 'Data by itself is meaningless numbers. When we give it structure in a table with columns like Name and Salary, it becomes information.'",
    syntax: "Structured: Tables (Rows & Columns)\nSemi-structured: JSON, XML\nUnstructured: Video, Audio, Text files",
    example: "-- Example: Staff records\n-- Name: 'Asha', Role: 'Nurse', Salary: 32000"
  },
  {
    module: "Module 1: MySQL",
    section: "Part 1: Introduction",
    title: "2. Database",
    definition: "A database is an organised collection of data stored electronically so it can be easily accessed, managed, and updated.",
    meaning: "Think of it as a digital filing cabinet. Instead of keeping data in scattered Excel files, a database keeps it in one place, with rules, security, and fast search, even for millions of records.",
    instructorCue: "Tell them: 'Excel crashes when you hit a million rows. A database easily manages millions of rows with strict security.'",
    syntax: "Database -> Contains Tables -> Contain Rows (Records) and Columns (Fields)",
    example: "-- A hospital database holds tables: departments, staff, and shifts."
  },
  {
    module: "Module 1: MySQL",
    section: "Part 1: Introduction",
    title: "3. DBMS and RDBMS",
    definition: "A DBMS creates and manages databases. An RDBMS stores data in related tables linked by common keys.",
    meaning: "The DBMS is the software between you and the data. In an RDBMS, tables link to each other (e.g., staff.dept_id links to departments.dept_id). MySQL, PostgreSQL, Oracle, and SQL Server are RDBMS software.",
    instructorCue: "Point to the screen: 'The R in RDBMS stands for Relational. That simply means tables are connected to each other using common IDs.'",
    syntax: "Primary Table (departments.dept_id) <---> Related Table (staff.dept_id)",
    example: "-- staff.dept_id = 1 links directly to departments.dept_id = 1 (Emergency)"
  },
  {
    module: "Module 1: MySQL",
    section: "Part 1: Introduction",
    title: "4. SQL",
    definition: "SQL (Structured Query Language) is the standard language used to communicate with relational databases.",
    meaning: "With SQL you create tables, insert data, read data, update it, and delete it. It is not a program you install; it is the language understood by all relational databases.",
    instructorCue: "Explain: 'You learn SQL syntax once, and you can work in MySQL, PostgreSQL, Oracle, and SQL Server with only tiny differences.'",
    syntax: "SELECT columns FROM table WHERE condition;",
    example: "SELECT staff_name, salary FROM staff WHERE salary > 35000;"
  },
  {
    module: "Module 1: MySQL",
    section: "Part 1: Introduction",
    title: "5. MySQL & Workbench Setup",
    definition: "MySQL is a free, open-source RDBMS. MySQL Workbench is the graphical desktop tool to write and run queries.",
    meaning: "SQL is the language and MySQL is the engine that understands it. Workbench lets you connect to localhost, view tables, and execute queries.",
    instructorCue: "Guide them: 'Open MySQL Workbench, click your local connection, open a new SQL tab, and test by running SELECT Hello SQL.'",
    syntax: "SELECT 'Hello SQL';",
    example: "SELECT 'Hello SQL' AS test_message;"
  },
  {
    module: "Module 1: MySQL",
    section: "Part 1: Introduction",
    title: "6. Types of SQL Commands",
    definition: "SQL commands are grouped into five categories based on what they do.",
    meaning: "DDL: CREATE, ALTER, DROP, TRUNCATE (Structure). DML: INSERT, UPDATE, DELETE (Data). DQL: SELECT (Read). DCL: GRANT, REVOKE (Permissions). TCL: COMMIT, ROLLBACK (Transactions).",
    instructorCue: "Note: 'As an analyst, 90% of your daily job is DQL (SELECT). But you need DDL and DML to set up practice tables.'",
    syntax: "DDL: Structure\nDML: Data Rows\nDQL: Query Data\nDCL: Security\nTCL: Transactions",
    example: "-- DDL: CREATE TABLE ...\n-- DML: INSERT INTO ...\n-- DQL: SELECT * FROM ..."
  },
  {
    module: "Module 1: MySQL",
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
(6,'Kiran','Doctor',1,90000,
'2019-11-12'),
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
    module: "Module 1: MySQL",
    section: "Part 2: Data Types & DDL",
    title: "8. Numeric Data Types",
    definition: "Data types that store numbers in a column.",
    meaning: "INT stores whole numbers. BIGINT stores very large integers. DECIMAL(p,s) stores exact decimals (p = total digits, s = digits after decimal). FLOAT/DOUBLE store approximate decimals.",
    instructorCue: "Tip: 'Always use DECIMAL for salary and currency because it is exact. Never use FLOAT for money because rounding errors can occur.'",
    syntax: "column_name INT\ncolumn_name BIGINT\ncolumn_name DECIMAL(precision, scale)",
    example: "salary DECIMAL(10,2)   -- up to 8 digits before decimal, 2 after\nage INT\nphone_number BIGINT"
  },
  {
    module: "Module 1: MySQL",
    section: "Part 2: Data Types & DDL",
    title: "9. String (Text) Data Types",
    definition: "Data types used to store text characters.",
    meaning: "CHAR(n) is fixed length (shorter strings are padded with spaces). VARCHAR(n) is variable length up to n characters and saves disk space. TEXT stores long descriptions.",
    instructorCue: "Explain: 'Use CHAR(2) for fixed things like State codes (KA, MH). Use VARCHAR for names and emails because length varies.'",
    syntax: "column_name CHAR(n)\ncolumn_name VARCHAR(n)\ncolumn_name TEXT",
    example: "state_code CHAR(2)\nstaff_name VARCHAR(50)\nremarks TEXT"
  },
  {
    module: "Module 1: MySQL",
    section: "Part 2: Data Types & DDL",
    title: "10. Date and Time Data Types",
    definition: "Data types specifically structured to store calendar dates and clock times.",
    meaning: "DATE stores YYYY-MM-DD. TIME stores HH:MM:SS. DATETIME stores both together. TIMESTAMP tracks row updates automatically. Store dates as DATE, never text.",
    instructorCue: "Say: 'Never store dates as VARCHAR! If you store them as text, sorting and date functions break. Always use DATE.'",
    syntax: "column_name DATE\ncolumn_name TIME\ncolumn_name DATETIME\ncolumn_name TIMESTAMP",
    example: "join_date DATE                -- '2026-09-29'\nshift_start TIME              -- '08:30:00'\ncreated_at DATETIME           -- '2026-09-29 10:15:00'"
  },
  {
    module: "Module 1: MySQL",
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
    module: "Module 1: MySQL",
    section: "Part 2: Data Types & DDL",
    title: "12. NULL (Missing Values)",
    definition: "NULL means a missing, unknown, or unrecorded value.",
    meaning: "NULL is not zero and not an empty string. Any calculation with NULL produces NULL. Check for it with IS NULL or IS NOT NULL, never = NULL.",
    instructorCue: "Highlight: 'Writing dept_id = NULL returns nothing in SQL! You must write dept_id IS NULL.'",
    syntax: "WHERE column IS NULL\nWHERE column IS NOT NULL",
    example: "SELECT staff_name FROM staff WHERE dept_id IS NULL; -- Returns Sara"
  },
  {
    module: "Module 1: MySQL",
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
    module: "Module 1: MySQL",
    section: "Part 2: Data Types & DDL",
    title: "14. CREATE DATABASE and USE",
    definition: "Commands used to initialize a new database and set it as the active working context.",
    meaning: "A database is a container. Before creating tables, tell MySQL which container you want to work in with the USE command.",
    instructorCue: "Say: 'If you get error No database selected, it means you forgot to run USE hospital_db;'",
    syntax: "CREATE DATABASE db_name;\nUSE db_name;\nSHOW DATABASES;",
    example: "CREATE DATABASE hospital_db;\nUSE hospital_db;\nSHOW DATABASES;"
  },
  {
    module: "Module 1: MySQL",
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
    module: "Module 1: MySQL",
    section: "Part 2: Data Types & DDL",
    title: "16. DESCRIBE and SHOW TABLES",
    definition: "Inspection commands to see all existing tables and check a table's schema.",
    meaning: "Use them to verify column names, nullability, keys, and default values before writing complex queries.",
    instructorCue: "Tip: 'You can write DESCRIBE staff; or just DESC staff; both do the exact same thing.'",
    syntax: "SHOW TABLES;\nDESCRIBE table_name;",
    example: "SHOW TABLES;\nDESCRIBE staff;"
  },
  {
    module: "Module 1: MySQL",
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
    module: "Module 1: MySQL",
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
    module: "Module 1: MySQL",
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
    module: "Module 1: MySQL",
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
    module: "Module 1: MySQL",
    section: "Part 3: Querying Data",
    title: "21. SELECT",
    definition: "SELECT reads data from one or more tables.",
    meaning: "It is the most used SQL command. You choose which columns to see and which table they come from. An asterisk (*) means all columns.",
    instructorCue: "Tell students: 'Always name the columns you want. In a company with 100 columns, running SELECT * can freeze your database.'",
    syntax: "SELECT col1, col2 FROM table_name;\nSELECT * FROM table_name;",
    example: "SELECT staff_name, role FROM staff;\nSELECT * FROM departments;"
  },
  {
    module: "Module 1: MySQL",
    section: "Part 3: Querying Data",
    title: "22. WHERE",
    definition: "WHERE filters rows based on a condition.",
    meaning: "Only rows where the condition evaluates to true are returned. Comparison operators include =, != (or <>), >, <, >=, <=.",
    instructorCue: "Point to the screen: 'WHERE looks at rows one by one. If salary > 35000 is true, that row gets displayed. If false, it gets dropped.'",
    syntax: "SELECT columns FROM table_name WHERE condition;",
    example: "SELECT staff_name, salary FROM staff WHERE salary > 35000;"
  },
  {
    module: "Module 1: MySQL",
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
    module: "Module 1: MySQL",
    section: "Part 3: Querying Data",
    title: "24. IN",
    definition: "IN checks whether a value matches any value in a specified list.",
    meaning: "It is a cleaner, shorter way to write multiple OR conditions on the same column.",
    instructorCue: "Tell them: 'Instead of typing role = Doctor OR role = Pharmacist OR role = Nurse, IN lets you check against a neat list in brackets.'",
    syntax: "WHERE column IN (value1, value2, ...)",
    example: "SELECT staff_name, role FROM staff WHERE role IN ('Doctor', 'Pharmacist');"
  },
  {
    module: "Module 1: MySQL",
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
    module: "Module 1: MySQL",
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
    module: "Module 1: MySQL",
    section: "Part 3: Querying Data",
    title: "27. ORDER BY",
    definition: "ORDER BY sorts the returned result rows.",
    meaning: "ASC sorts low to high (default). DESC sorts high to low. You can sort by multiple columns by separating them with commas.",
    instructorCue: "Say: 'If you want to see the highest earners first, always put DESC after the column name.'",
    syntax: "SELECT columns FROM table_name ORDER BY col1 ASC, col2 DESC;",
    example: "SELECT staff_name, salary FROM staff ORDER BY salary DESC;"
  },
  {
    module: "Module 1: MySQL",
    section: "Part 3: Querying Data",
    title: "28. LIMIT and OFFSET",
    definition: "LIMIT restricts the maximum number of rows returned.",
    meaning: "Frequently paired with ORDER BY to fetch top-N or bottom-N records. OFFSET skips a specified number of rows first.",
    instructorCue: "Tell them: 'Top-3 highest salaries is simply ORDER BY salary DESC followed by LIMIT 3.'",
    syntax: "SELECT columns FROM table ORDER BY col LIMIT n OFFSET m;",
    example: "SELECT staff_name, salary FROM staff ORDER BY salary DESC LIMIT 3;"
  },
  {
    module: "Module 1: MySQL",
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
    module: "Module 1: MySQL",
    section: "Part 3: Querying Data",
    title: "30. Aliases (AS)",
    definition: "An alias provides a temporary name for a column or table in a query.",
    meaning: "Improves column readability and shortens long table names in joins. The alias only lives for the duration of that specific query.",
    instructorCue: "Say: 'Use quotes if your alias has spaces, like AS \"Yearly Salary\". Otherwise, plain text is fine.'",
    syntax: "SELECT column AS alias_name FROM table_name AS t;",
    example: "SELECT staff_name AS employee, salary * 12 AS yearly_salary FROM staff AS s;"
  },
  {
    module: "Module 1: MySQL",
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
    module: "Module 1: MySQL",
    section: "Part 4: Summarizing Data",
    title: "32. GROUP BY",
    definition: "GROUP BY partitions rows into summary buckets so aggregates run per group.",
    meaning: "Every non-aggregated column listed in SELECT must also appear in the GROUP BY clause.",
    instructorCue: "Explain: 'If you SELECT role and AVG(salary), you MUST write GROUP BY role. Otherwise, MySQL will throw an error.'",
    syntax: "SELECT column, AGGREGATE(column) FROM table_name GROUP BY column;",
    example: "SELECT role, COUNT(*) AS total, AVG(salary) AS avg_salary FROM staff GROUP BY role;"
  },
  {
    module: "Module 1: MySQL",
    section: "Part 4: Summarizing Data",
    title: "33. HAVING",
    definition: "HAVING filters groups after GROUP BY aggregation takes place.",
    meaning: "WHERE filters raw rows before grouping; HAVING filters aggregated groups after grouping. You cannot use aggregate functions inside WHERE.",
    instructorCue: "Say: 'Interview favorite: WHERE filters rows before math happens. HAVING filters totals after math happens.'",
    syntax: "SELECT col, AGG(col) FROM table GROUP BY col HAVING aggregate_condition;",
    example: "SELECT dept_id, AVG(salary) AS avg_salary FROM staff GROUP BY dept_id HAVING AVG(salary) > 35000;"
  },
  {
    module: "Module 1: MySQL",
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
    module: "Module 1: MySQL",
    section: "Part 5: Joins & UNION",
    title: "35. INNER JOIN",
    definition: "INNER JOIN returns only rows that have matching values in both tables.",
    meaning: "Rows without a key match in either table are completely dropped from the output. Sara is excluded here because her dept_id is NULL.",
    instructorCue: "Point to the screen: 'Count the rows—there are only 6 rows returned. Sara is missing because she has no department ID.'",
    syntax: "SELECT columns FROM t1 INNER JOIN t2 ON t1.col = t2.col;",
    example: "SELECT s.staff_name, d.dept_name FROM staff s INNER JOIN departments d ON s.dept_id = d.dept_id;"
  },
  {
    module: "Module 1: MySQL",
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
    module: "Module 1: MySQL",
    section: "Part 5: Joins & UNION",
    title: "37. RIGHT JOIN",
    definition: "Returns all rows from the right table, plus matches from the left table.",
    meaning: "Mirror image of LEFT JOIN. Most developers swap table order and stick to LEFT JOIN for readability.",
    instructorCue: "Say: 'RIGHT JOIN is rarely used in real jobs. Most analysts swap the table positions and use LEFT JOIN.'",
    syntax: "SELECT columns FROM t1 RIGHT JOIN t2 ON t1.col = t2.col;",
    example: "SELECT d.dept_name, s.staff_name FROM staff s RIGHT JOIN departments d ON s.dept_id = d.dept_id;"
  },
  {
    module: "Module 1: MySQL",
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
    module: "Module 1: MySQL",
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
    module: "Module 1: MySQL",
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
    module: "Module 1: MySQL",
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
    module: "Module 1: MySQL",
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
    module: "Module 1: MySQL",
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
    module: "Module 1: MySQL",
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
    module: "Module 1: MySQL",
    section: "Part 6: Functions & Cleaning",
    title: "45. Finding Duplicates",
    definition: "Identifying duplicate values across columns that should be unique.",
    meaning: "Group by the column in question, count rows, and filter with HAVING COUNT(*) > 1. Essential data cleaning technique.",
    instructorCue: "Say: 'This is the standard query to detect bad data. If email has COUNT(*) > 1, you know you have duplicate users.'",
    syntax: "SELECT col, COUNT(*) FROM table GROUP BY col HAVING COUNT(*) > 1;",
    example: "SELECT role, COUNT(*) AS total FROM staff GROUP BY role HAVING COUNT(*) > 1;"
  },
  {
    module: "Module 1: MySQL",
    section: "Part 7: Intermediate SQL",
    title: "46. Subquery",
    definition: "A query nested inside another SQL statement.",
    meaning: "The inner query runs first and feeds its result to the outer query. Commonly used inside WHERE, FROM, or SELECT.",
    instructorCue: "Explain: 'Step 1: SQL calculates the average salary. Step 2: The outer query filters whoever earns more than that average.'",
    syntax: "SELECT cols FROM table WHERE col > (SELECT AVG(col) FROM table);",
    example: "SELECT staff_name, salary FROM staff WHERE salary > (SELECT AVG(salary) FROM staff);"
  },
  {
    module: "Module 1: MySQL",
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
    module: "Module 1: MySQL",
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
    module: "Module 1: MySQL",
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
    module: "Module 1: MySQL",
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
    module: "Module 1: MySQL",
    section: "Part 7: Intermediate SQL",
    title: "51. Running Total (Cumulative Sum)",
    definition: "Calculates an ongoing cumulative sum row by row.",
    meaning: "Uses SUM() with an OVER(ORDER BY) clause. Each row displays the sum of itself plus all preceding rows in the partition.",
    instructorCue: "Say: 'Look at staff 1: first shift is 8 hours. Next shift is 10 hours, so the running total becomes 18 (8 + 10).'",
    syntax: "SUM(column) OVER (PARTITION BY col ORDER BY col)",
    example: `SELECT staff_id, shift_date, hours_worked,
  SUM(hours_worked) OVER (PARTITION BY staff_id ORDER BY shift_date) AS total_hours
FROM shifts;`
  },
  {
    module: "Module 1: MySQL",
    section: "Part 8: Views & Indexes",
    title: "52. Views",
    definition: "A saved SQL query that functions as a virtual table.",
    meaning: "Stores query logic, not underlying data. Simplifies complex multi-table joins and restricts access to sensitive columns like base pay.",
    instructorCue: "Tell them: 'Create a view once, and analysts can query it like a simple table without rewriting the JOIN every time.'",
    syntax: "CREATE VIEW view_name AS SELECT ...;\nDROP VIEW view_name;",
    example: `CREATE VIEW staff_with_dept AS
SELECT s.staff_name, s.role, d.dept_name
FROM staff s
LEFT JOIN departments d ON s.dept_id = d.dept_id;

SELECT * FROM staff_with_dept WHERE role = 'Nurse';`
  },
  {
    module: "Module 1: MySQL",
    section: "Part 8: Views & Indexes",
    title: "53. Indexes",
    definition: "Data structures that accelerate search and retrieval speeds in MySQL.",
    meaning: "Works like an index at the back of a textbook. Speeds up WHERE, JOIN, and ORDER BY queries on large datasets, but slightly slows down INSERT and UPDATE.",
    instructorCue: "Explain: 'Primary keys are indexed automatically. You only create custom indexes on columns that you frequently filter or join on.'",
    syntax: "CREATE INDEX idx_name ON table (col);\nDROP INDEX idx_name ON table;",
    example: "CREATE INDEX idx_staff_role ON staff (role);"
  },
  {
    module: "Module 1: MySQL",
    section: "Part 8: Views & Indexes",
    title: "54. Order of Writing vs Execution",
    definition: "SQL clauses are written in a specific syntax order, but the MySQL database engine executes them in a completely different sequence.",
    meaning: "Writing: SELECT -> FROM -> JOIN -> WHERE -> GROUP BY -> HAVING -> ORDER BY -> LIMIT. Execution: FROM -> JOIN -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT. This explains why WHERE cannot filter column aliases defined in SELECT.",
    instructorCue: "Crucial teaching point: 'This is the most asked interview question. You write SELECT first, but the database runs FROM and WHERE before SELECT even exists! That is why WHERE cannot use column aliases.'",
    syntax: "Writing:   SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY -> LIMIT\nExecution: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT",
    example: `SELECT d.dept_name, COUNT(*) AS total_staff, AVG(s.salary) AS avg_salary
FROM staff s
JOIN departments d ON s.dept_id = d.dept_id
WHERE s.salary > 30000
GROUP BY d.dept_name
HAVING COUNT(*) >= 2
ORDER BY avg_salary DESC
LIMIT 3;`
  },

  // =========================================================================
  // MODULE 2: PYTHON FOR DATA ANALYSIS (PARTS 1 TO 9: TOPICS 1 TO 57)
  // =========================================================================
  {
    module: "Module 2: Python for Analytics",
    section: "Part 1 & 2: Python Basics",
    title: "01. Python Intro & Hospital DataFrames",
    definition: "Python is a high-level interpreted programming language tailored for data analysis, automation, and machine learning.",
    meaning: "Load pandas and numpy at the start. Build the two hospital DataFrames matching MySQL schema: staff and shifts. Sara has missing department (None) and John has 0 shifts.",
    instructorCue: "Say: 'Notice how Sara has None in Python, which becomes NaN in Pandas. It matches Sara having NULL in MySQL.'",
    syntax: "import pandas as pd\nimport numpy as np",
    example: `import pandas as pd
import numpy as np

staff = pd.DataFrame({
    'staff_id': [1, 2, 3, 4, 5, 6, 7],
    'staff_name': ['Asha', 'Ravi', 'Meena', 'John', 'Priya', 'Kiran', 'Sara'],
    'role': ['Nurse', 'Doctor', 'Pharmacist', 'Technician', 'Nurse', 'Doctor', 'Nurse'],
    'department': ['Nursing', 'Emergency', 'Pharmacy', 'Radiology', 'Nursing', 'Emergency', None],
    'salary': [32000, 85000, 40000, 38000, 33000, 90000, 31000],
    'join_date': ['2022-03-15', '2020-06-01', '2021-09-10', '2023-01-20', '2022-08-05', '2019-11-12', '2024-02-01']
})

shifts = pd.DataFrame({
    'staff_id': [1, 1, 2, 3, 5, 6],
    'shift_type': ['Morning', 'Night', 'Night', 'Morning', 'Morning', 'Night'],
    'hours_worked': [8, 10, 12, 8, 8, 12]
})`
  },
  {
    module: "Module 2: Python for Analytics",
    section: "Part 2: Python Basics",
    title: "02. Variables, Types, Conversions & f-Strings",
    definition: "Variables store values. Data types define operations. f-Strings format outputs cleanly.",
    meaning: "int, float, str, bool, NoneType. Convert types with int(), float(), str(). Strings support slicing [start:stop] and .strip(). Use f-strings for clean display.",
    instructorCue: "Explain: 'A common mistake is adding text \"32000\" to 1000. You must convert it with int() first.'",
    syntax: "type(v) | int(v) | str(v) | f\"Text {variable}\"",
    example: `salary_text = "32000"
salary = int(salary_text)
name = "  Asha  ".strip()
print(f"{name} earns {salary * 12:,.2f} annually")`
  },
  {
    module: "Module 2: Python for Analytics",
    section: "Part 3: Data Structures",
    title: "03. Lists, Tuples, Sets & Dictionaries",
    definition: "Core Python collections used to store and manipulate groupings of records.",
    meaning: "List [] (mutable, ordered). Tuple () (immutable). Set {} (unique items only, eliminates duplicates). Dictionary {key: value} (fast lookup, building blocks of DataFrames).",
    instructorCue: "Tell them: 'A DataFrame column is essentially a Python list, and an entire DataFrame is just a dictionary of lists!'",
    syntax: "list = [1, 2] | tuple = (1, 2) | set = {1, 2} | dict = {'a': 1}",
    example: `roles = ["Nurse", "Doctor", "Nurse"]
unique_roles = set(roles)  # {'Nurse', 'Doctor'}
staff_dict = {"name": "Asha", "role": "Nurse", "salary": 32000}
print(staff_dict.get("role"))`
  },
  {
    module: "Module 2: Python for Analytics",
    section: "Part 4: Control Flow",
    title: "04. Conditionals, Loops & List Comprehension",
    definition: "Controlling execution logic and iterating across data sequences.",
    meaning: "if/elif/else checks conditions. for loops iterate over lists. range(start, stop) generates number sequences. List comprehensions replace simple loops in one line.",
    instructorCue: "Show this: 'List comprehension is Python magic: [s * 12 for s in salaries] calculates annual pay in half a second.'",
    syntax: "if cond: ... elif: ... else: ...\n[expr for item in sequence if cond]",
    example: `salaries = [32000, 85000, 40000]
high_salaries = [s for s in salaries if s > 35000] # [85000, 40000]`
  },
  {
    module: "Module 2: Python for Analytics",
    section: "Part 5: Functions & Errors",
    title: "05. Functions, Lambda & Error Handling",
    definition: "Writing reusable logic blocks and preventing crashes with try/except.",
    meaning: "def creates functions with return. lambda creates small one-line functions. try/except catches errors (ValueError, ZeroDivisionError) cleanly.",
    instructorCue: "Say: 'Always use try/except when loading messy CSV files so your entire analysis doesn't break on one corrupt row.'",
    syntax: "def func(p): return res\nlambda x: expr\ntry: ... except Error: ...",
    example: `def salary_tier(s):
    return "High" if s >= 80000 else "Standard"

try:
    rate = 100 / 0
except ZeroDivisionError:
    rate = 0`
  },
  {
    module: "Module 2: Python for Analytics",
    section: "Part 6: NumPy",
    title: "06. NumPy Arrays & Vectorized Math",
    definition: "NumPy powers fast numerical computing and array operations across thousands of items at once.",
    meaning: "Vectorization applies math across every element without loops. Calculate mean, median, min, max, std. Use boolean array filtering.",
    instructorCue: "Demonstrate: 'Multiplying a Python list duplicates it. Multiplying a NumPy array multiplies every single number inside it. That is vectorization.'",
    syntax: "import numpy as np\nnp.array() | np.mean() | np.median()",
    example: `import numpy as np
salaries = np.array([32000, 85000, 40000, 38000, 33000, 90000, 31000])
print("Annual:", salaries * 12)
print("Mean vs Median:", np.mean(salaries), np.median(salaries))
print("Over 35k:", salaries[salaries > 35000])`
  },
  {
    module: "Module 2: Python for Analytics",
    section: "Part 7: Pandas Exploration",
    title: "07. Pandas Exploration & Selection (loc/iloc)",
    definition: "Pandas provides DataFrames (tables) with powerful inspection and indexing tools.",
    meaning: "head(), tail(), shape, info(), describe(). Select columns with df['col'] or df[['a', 'b']]. loc uses labels; iloc uses numeric index positions.",
    instructorCue: "Always tell students: 'First 4 commands on any new dataset: head(), shape, info(), and describe(). Always inspect before analyzing.'",
    syntax: "df.head() | df.info() | df.describe() | df.loc[] | df.iloc[]",
    example: `print(staff.shape)
print(staff.info())
print(staff.loc[0, 'staff_name'])  # Asha
print(staff.iloc[0:3, 0:2])         # First 3 rows, first 2 cols`
  },
  {
    module: "Module 2: Python for Analytics",
    section: "Part 7: Pandas Cleaning",
    title: "08. Pandas Filtering, Missing Values & Duplicates",
    definition: "Techniques to filter rows, clean null values, and remove duplicate entries.",
    meaning: "Filter with df[condition]. Combine conditions with & (and) and | (or). isnull().sum() counts missing values. fillna() imputes defaults. drop_duplicates() removes copies.",
    instructorCue: "Point out: 'In Pandas, always use & and | with brackets around each condition: (df[col] > 1) & (df[col] < 5). Do not use the word and.'",
    syntax: "df[cond] | df.isna().sum() | df.fillna() | df.drop_duplicates()",
    example: `# High earning nurses
nurses = staff[(staff['role'] == 'Nurse') & (staff['salary'] > 32000)]
# Fill Sara's missing department
staff['department'] = staff['department'].fillna('Unassigned')
print(staff.duplicated().sum())`
  },
  {
    module: "Module 2: Python for Analytics",
    section: "Part 7: Pandas Wrangling",
    title: "09. Dates, GroupBy & Aggregations",
    definition: "Converting dates, grouping by dimensions, and calculating multi-metric summaries.",
    meaning: "pd.to_datetime() turns text into real dates. .dt accessor gives year, month. groupby('col').agg() mirrors SQL GROUP BY. Always reset_index().",
    instructorCue: "Say: 'groupby and agg is SQL GROUP BY in Python. Look at the syntax: we count staff and average the salary per role.'",
    syntax: "pd.to_datetime(df['date'])\ndf.groupby('col').agg(name=('col', 'func')).reset_index()",
    example: `staff['join_date'] = pd.to_datetime(staff['join_date'])
staff['join_year'] = staff['join_date'].dt.year

role_summary = staff.groupby('role').agg(
    total_staff=('staff_id', 'count'),
    avg_salary=('salary', 'mean')
).reset_index()
print(role_summary)`
  },
  {
    module: "Module 2: Python for Analytics",
    section: "Part 7: Pandas Wrangling",
    title: "10. Merging, Reshaping & Custom Logic",
    definition: "Combining DataFrames with SQL-style joins and applying row-level functions.",
    meaning: "pd.merge(how='inner'/'left') matches tables on keys. concat stacks rows. apply() runs custom functions. np.where() executes vectorized IF-ELSE.",
    instructorCue: "Highlight: 'pd.merge(how=\"left\") keeps John and Sara with NaN shifts, exactly like SQL LEFT JOIN!'",
    syntax: "pd.merge(df1, df2, on='key', how='left')\nnp.where(cond, val_if_true, val_if_false)",
    example: `merged = pd.merge(staff, shifts, on='staff_id', how='left')
staff['salary_band'] = np.where(staff['salary'] >= 80000, 'High', 'Standard')
print(merged[merged['hours_worked'].isnull()][['staff_name']]) # John, Sara`
  },
  {
    module: "Module 2: Python for Analytics",
    section: "Part 8: Visualisation",
    title: "11. Matplotlib, Seaborn & The 7-Step Workflow",
    definition: "Plotting distributions and relationships to deliver business insights.",
    meaning: "Matplotlib (plt.bar, plt.plot) draws base visuals. Seaborn (sns.barplot, sns.boxplot) creates statistical charts. 7-step workflow: Question -> Load -> Explore -> Clean -> Analyze -> Visualize -> Insights.",
    instructorCue: "Conclude Python: 'Always finish with what the numbers mean: Doctors average 87.5k and hold 100% of Emergency night hours. That is your business takeaway.'",
    syntax: "import matplotlib.pyplot as plt\nimport seaborn as sns\nplt.show()",
    example: `import matplotlib.pyplot as plt
import seaborn as sns

plt.figure(figsize=(6, 3))
sns.barplot(data=staff, x='role', y='salary', palette='Blues_d')
plt.title("Average Salary by Role")
plt.show()`
  },

  // =========================================================================
  // MODULE 3: POWER BI & POWER QUERY (PARTS 1 TO 7: TOPICS 1 TO 54)
  // =========================================================================
  {
    module: "Module 3: Power BI & DAX",
    section: "Part 1 & 2: Power Query",
    title: "01. Power BI Architecture & Desktop Interface",
    definition: "Power BI Desktop connects to data, cleans it in Power Query, models it, and publishes interactive dashboards to the Service.",
    meaning: "Three primary views: Report View (canvas), Table/Data View (raw tables), Model View (relationships). Power Query transforms data before loading.",
    instructorCue: "Tell them: 'Power Query cleans the data before it enters the report. If data is dirty, your visuals will be wrong.'",
    syntax: "Workflow: Get Data -> Transform (Power Query) -> Model -> Visualise -> Publish",
    example: "-- Load departments.csv, staff.csv, shifts.csv via Get Data > Text/CSV"
  },
  {
    module: "Module 3: Power BI & DAX",
    section: "Part 2: Power Query ETL",
    title: "02. Power Query Data Cleaning & Transformations",
    definition: "Power Query records repeatable cleaning steps in M language without modifying original source files.",
    meaning: "Fix data types early (IDs as Whole Number, dates as Date, salary as Decimal). Replace values (null with Unassigned). Add Conditional Columns (Salary Bands). Group By rows. Merge Queries (Joins).",
    instructorCue: "Point out: 'In Power Query, select dept_id and Replace Values: blank with null. This makes sure relationships link cleanly.'",
    syntax: "= Table.SelectRows(Source, each [salary] > 35000)\n= Table.AddColumn(Source, \"Yearly\", each [salary] * 12)",
    example: `Applied Steps in Power Query:
1. Changed Type (join_date -> Date, salary -> Decimal)
2. Replaced Values in dept_id
3. Conditional Column: Salary Band (High / Medium / Low)
4. Close & Apply to load into model`
  },
  {
    module: "Module 3: Power BI & DAX",
    section: "Part 3: Data Modeling",
    title: "03. Star Schema & Table Relationships",
    definition: "Connecting Fact tables (transactions) to Dimension tables (lookup categories) with 1-to-many relationships.",
    meaning: "Fact table: shifts (measures hours, changes often). Dimension tables: staff, departments, Date Table. Set cardinality to 1-to-many (1:*), cross-filter direction to Single.",
    instructorCue: "Write on the board: 'Dimension filters the Fact. departments (1) filters staff (*), and staff (1) filters shifts (*). Keep filter direction Single.'",
    syntax: "departments[dept_id] (1) ---> staff[dept_id] (*)\nstaff[staff_id] (1) ---> shifts[staff_id] (*)",
    example: "-- In Model View:\n-- Drag dept_id from departments to staff.\n-- Drag staff_id from staff to shifts."
  },
  {
    module: "Module 3: Power BI & DAX",
    section: "Part 3: Data Modeling",
    title: "04. Building a Dedicated Date Table",
    definition: "A contiguous calendar table required for Power BI time intelligence calculations.",
    meaning: "Time intelligence functions (YTD, SAMEPERIODLASTYEAR) require a dedicated table with no missing dates, marked as a Date Table.",
    instructorCue: "Remind them: 'Never use the shift_date from the shifts table for time analysis. Always build and relate a proper Date Table.'",
    syntax: "Date Table = CALENDAR(DATE(2026, 1, 1), DATE(2026, 12, 31))",
    example: `Date Table = CALENDAR(DATE(2026, 1, 1), DATE(2026, 12, 31))

Year = YEAR('Date Table'[Date])
Month Number = MONTH('Date Table'[Date])
Month Name = FORMAT('Date Table'[Date], "mmmm")
-- Mark as Date Table and relate Date to shifts[shift_date]`
  },
  {
    module: "Module 3: Power BI & DAX",
    section: "Part 4 & 5: Visuals & Reports",
    title: "05. Report Visuals, Cards, Matrix & Slicers",
    definition: "Choosing the correct visual to answer specific operational questions clearly.",
    meaning: "Cards: Headline KPIs (Total Staff, Total Hours). Column chart: Hours by Department. Donut chart: Hours by Shift Type. Matrix: Role vs Shift Type with drill down. Slicers: Interactive page filters.",
    instructorCue: "Show this: 'Place 3 KPI cards at the very top: Total Staff (7), Total Hours (58), Night Share (58.6%). Then place your charts below.'",
    syntax: "KPI Cards: Values well\nBar Chart: X-axis (Department), Y-axis (Total Hours)\nMatrix: Rows (Role), Columns (Shift Type), Values (Total Hours)",
    example: "-- Add slicer on departments[dept_name] and shifts[shift_type]"
  },
  {
    module: "Module 3: Power BI & DAX",
    section: "Part 6: Service & Security",
    title: "06. Power BI Service, Gateways & Row-Level Security",
    definition: "Publishing reports to cloud workspaces, scheduling data refreshes, and restricting user access with RLS.",
    meaning: "Power BI Service (cloud sharing). On-premises Data Gateway connects cloud reports to local databases/files. Row-Level Security (RLS) restricts visible rows per user role using DAX.",
    instructorCue: "Explain: 'With RLS, the Emergency Manager logs in and only sees Emergency data. The Pharmacy Manager only sees Pharmacy data.'",
    syntax: "-- Modeling > Manage Roles > Emergency Manager:\n[dept_name] = \"Emergency\"",
    example: "-- Dynamic RLS Pattern:\n[email] = USERPRINCIPALNAME()"
  },

  // =========================================================================
  // MODULE 4: DAX DEEP DIVE (TOPICS 1 TO 55 COMPLETE)
  // =========================================================================
  {
    module: "Module 4: DAX Deep Dive",
    section: "Part 1: DAX Foundations",
    title: "01. What is DAX & Where to Write It",
    definition: "Data Analysis Expressions (DAX) is the formula language used in Power BI to create custom calculations.",
    meaning: "Written in Measures (dynamic calculations), Calculated Columns (row-by-row static columns), Calculated Tables, and the DAX Query View (EVALUATE).",
    instructorCue: "Explain: 'Good DAX habit: Always write columns with table name like staff[salary], and measures in brackets like [Total Salary].'",
    syntax: "Measure Name = expression\n'Table'[Column] | [Measure Name]",
    example: `Total Salary = SUM(staff[salary])
Salary in Lakhs = [Total Salary] / 100000`
  },
  {
    module: "Module 4: DAX Deep Dive",
    section: "Part 1: DAX Foundations",
    title: "02. Calculated Column vs Measure",
    definition: "Calculated columns store values row-by-row in RAM. Measures compute dynamically on the fly based on report filters.",
    meaning: "Calculated column: Row context, computed on refresh, increases file size. Measure: Filter context, computed on visual demand, uses zero disk space.",
    instructorCue: "Golden Rule: 'If it needs to change when the user clicks a slicer, make it a Measure. If you need it as an axis or category, make it a Column.'",
    syntax: "Column: staff[salary] * 12\nMeasure: SUM(staff[salary])",
    example: `-- Calculated Column:
Salary Band = IF(staff[salary] >= 80000, "High", "Standard")

-- Measure:
Average Salary = AVERAGE(staff[salary])`
  },
  {
    module: "Module 4: DAX Deep Dive",
    section: "Part 1: DAX Foundations",
    title: "03. The Engine: Row Context, Filter Context & Context Transition",
    definition: "The fundamental evaluation engine that governs how DAX calculates numbers.",
    meaning: "Row Context: Current row awareness (inside calculated columns or iterators like SUMX). Filter Context: All active slicers, visual axes, and page filters. Context Transition: Wrapping an expression in CALCULATE turns the current row into a filter.",
    instructorCue: "Critical Concept: 'Inside a calculated column in staff, writing SUM(shifts[hours]) gives 58 for every row. But wrapping it in CALCULATE(SUM(shifts[hours])) forces it to filter by that specific staff member!'",
    syntax: "CALCULATE(expression) -- triggers context transition inside row context",
    example: `-- Inside staff table:
Staff Hours Worked = CALCULATE(SUM(shifts[hours_worked]))
-- Asha: 18, Ravi: 12, Meena: 8, John: BLANK, Sara: BLANK`
  },
  {
    module: "Module 4: DAX Deep Dive",
    section: "Part 2: Aggregations & Math",
    title: "04. Aggregations, DIVIDE & Math Functions",
    definition: "Basic aggregation functions and safe division handling.",
    meaning: "SUM, AVERAGE, MIN, MAX aggregate numeric columns. COUNTROWS counts records. DISTINCTCOUNT counts unique keys. DIVIDE handles zero division gracefully.",
    instructorCue: "Tip: 'Never use the forward slash (/) for division in DAX. Always use DIVIDE to prevent #DIV/0! errors.'",
    syntax: "SUM(table[col]) | COUNTROWS(table) | DISTINCTCOUNT(table[col])\nDIVIDE(num, den, [alt])",
    example: `Total Staff = COUNTROWS(staff)                     -- 7
Total Hours = SUM(shifts[hours_worked])            -- 58
Staff Worked = DISTINCTCOUNT(shifts[staff_id])     -- 5
Hours per Staff = DIVIDE([Total Hours], [Staff Worked], 0) -- 11.6`
  },
  {
    module: "Module 4: DAX Deep Dive",
    section: "Part 2: Iterators",
    title: "05. Iterator Functions (SUMX, AVERAGEX)",
    definition: "Iterators evaluate an expression row-by-row across a table and then aggregate the results.",
    meaning: "Functions ending with X (SUMX, AVERAGEX, MINX, MAXX). Use them when you need row-level arithmetic before summing (e.g. price * quantity or salary * 12).",
    instructorCue: "Tell them: 'SUM(staff[salary] * 12) is invalid syntax in DAX. You must write SUMX(staff, staff[salary] * 12).'",
    syntax: "SUMX(table, expression)\nAVERAGEX(table, expression)",
    example: `Yearly Payroll = SUMX(staff, staff[salary] * 12)   -- 4,188,000
Avg Shift Length = AVERAGEX(shifts, shifts[hours_worked]) -- 9.67`
  },
  {
    module: "Module 4: DAX Deep Dive",
    section: "Part 3: Logical Functions",
    title: "06. Logical Logic: IF, SWITCH(TRUE()) & COALESCE",
    definition: "Conditional branching and blank substitution in DAX.",
    meaning: "IF checks single conditions. SWITCH(TRUE(), ...) checks multiple range conditions (DAX equivalent of SQL CASE WHEN). COALESCE replaces blanks with defaults.",
    instructorCue: "Show them: 'SWITCH(TRUE()) is identical to SQL CASE WHEN. Put the strictest condition at the top.'",
    syntax: "SWITCH(TRUE(), cond1, res1, cond2, res2, default)\nCOALESCE(val, fallback)",
    example: `Salary Tier = 
SWITCH(
    TRUE(),
    staff[salary] >= 80000, "Executive",
    staff[salary] >= 35000, "Senior",
    "Associate"
)

Hours Display = COALESCE([Total Hours], 0)`
  },
  {
    module: "Module 4: DAX Deep Dive",
    section: "Part 4: Filter Functions",
    title: "07. CALCULATE & Simple Filters",
    definition: "CALCULATE evaluates an expression under modified filter contexts. It is the king of DAX.",
    meaning: "The first argument is the calculation. Subsequent arguments add or overwrite filters. Shifts filtered to 'Night' ignore selected shift slicers.",
    instructorCue: "Say: 'CALCULATE is simply SUM with a WHERE clause! Look at Night Hours: it calculates hours where shift_type = Night.'",
    syntax: "CALCULATE(expression, filter1, filter2, ...)",
    example: `Night Hours = 
CALCULATE(
    SUM(shifts[hours_worked]),
    shifts[shift_type] = "Night"
) -- 34 hours

Night Share % = DIVIDE([Night Hours], [Total Hours]) -- 58.6%`
  },
  {
    module: "Module 4: DAX Deep Dive",
    section: "Part 4: Filter Functions",
    title: "08. Context Control: ALL, REMOVEFILTERS & ALLEXCEPT",
    definition: "Functions that strip filters from tables or columns to compute grand totals and percentages.",
    meaning: "ALL(table) ignores all filters, giving grand totals. REMOVEFILTERS does the same inside CALCULATE. ALLEXCEPT removes all filters except specified columns for subtotaling.",
    instructorCue: "Explain: 'To calculate a percentage of total, divide the filtered salary by CALCULATE(SUM(salary), ALL(staff)). The denominator never changes!'",
    syntax: "ALL(table_or_column)\nCALCULATE(expr, REMOVEFILTERS(table))\nALLEXCEPT(table, col1)",
    example: `Salary % of Total = 
DIVIDE(
    SUM(staff[salary]),
    CALCULATE(SUM(staff[salary]), ALL(staff))
)

Role Total Salary = 
CALCULATE(SUM(staff[salary]), ALLEXCEPT(staff, staff[role]))`
  },
  {
    module: "Module 4: DAX Deep Dive",
    section: "Part 4: Filter Functions",
    title: "09. ALLSELECTED, VALUES & KEEPFILTERS",
    definition: "Fine-tuning filter boundaries to respect slicer selections while ignoring visual grouping.",
    meaning: "ALLSELECTED respects slicers outside the chart while clearing row filters inside the chart (percentages add up to 100% of the selection). VALUES returns unique column values.",
    instructorCue: "Tip: 'Use ALL if you want percent of the entire company. Use ALLSELECTED if you want percent of whatever departments the user picked in the slicer.'",
    syntax: "ALLSELECTED(column) | VALUES(column) | KEEPFILTERS(filter)",
    example: `Hours % of Selection = 
DIVIDE(
    [Total Hours],
    CALCULATE([Total Hours], ALLSELECTED(departments[dept_name]))
)`
  },
  {
    module: "Module 4: DAX Deep Dive",
    section: "Part 5: Table Functions",
    title: "10. Table Functions: SUMMARIZE, TOPN & Set Operations",
    definition: "Functions that compute and return full tables rather than single scalar values.",
    meaning: "SUMMARIZE groups data like SQL GROUP BY. TOPN returns top N rows. EXCEPT finds missing records (anti-join).",
    instructorCue: "Show this: 'EXCEPT finds staff who have zero shifts. It compares staff IDs against shift IDs and gives John and Sara.'",
    syntax: "SUMMARIZE(table, group_col, \"Name\", expr)\nTOPN(n, table, order_expr, [order])",
    example: `Top 3 Earner Total = 
SUMX(TOPN(3, staff, staff[salary], DESC), staff[salary]) -- 215,000

Staff Without Shifts = 
EXCEPT(VALUES(staff[staff_id]), VALUES(shifts[staff_id]))`
  },
  {
    module: "Module 4: DAX Deep Dive",
    section: "Part 6: Relationships",
    title: "11. RELATED, RELATEDTABLE & USERELATIONSHIP",
    definition: "Navigating relationships to fetch values from lookup tables or activate secondary paths.",
    meaning: "RELATED: pulls from 1-side into *-side (lookup). RELATEDTABLE: pulls *-side rows into 1-side (wrapped in COUNTROWS/SUMX). USERELATIONSHIP activates inactive links.",
    instructorCue: "Say: 'RELATED is VLOOKUP in DAX. It works only when an active relationship exists between the tables.'",
    syntax: "RELATED(other_table[col])\nRELATEDTABLE(other_table)\nUSERELATIONSHIP(col1, col2)",
    example: `-- In shifts table (many side):
Staff Name = RELATED(staff[staff_name])

-- In staff table (one side):
Shift Count = COUNTROWS(RELATEDTABLE(shifts))`
  },
  {
    module: "Module 4: DAX Deep Dive",
    section: "Part 7: Text & Strings",
    title: "12. Text Functions & CONCATENATEX",
    definition: "Manipulating text and concatenating strings across multiple table rows.",
    meaning: "Concatenate with & or CONCATENATE. FORMAT formats numbers/dates into text strings. CONCATENATEX lists values across rows into a comma-separated sentence.",
    instructorCue: "Tip: 'CONCATENATEX is amazing for cards: you can list all doctors in one cell: Ravi, Kiran.'",
    syntax: "FORMAT(value, \"format\")\nCONCATENATEX(table, expr, delimiter, [order])",
    example: `Doctor List = 
CONCATENATEX(
    FILTER(staff, staff[role] = "Doctor"),
    staff[staff_name],
    ", "
) -- "Ravi, Kiran"`
  },
  {
    module: "Module 4: DAX Deep Dive",
    section: "Part 8: Time Intelligence",
    title: "13. Time Intelligence: TOTALYTD & Previous Periods",
    definition: "Comparing metrics across calendar periods using a marked Date Table.",
    meaning: "TOTALYTD accumulates values from Jan 1st. SAMEPERIODLASTYEAR compares against the prior year. DATEADD shifts by custom intervals.",
    instructorCue: "Crucial rule: 'Time intelligence measures will return BLANK if your Date Table is not marked as a Date Table or has gaps in dates.'",
    syntax: "TOTALYTD(expr, 'Date'[Date])\nCALCULATE(expr, SAMEPERIODLASTYEAR('Date'[Date]))",
    example: `Hours YTD = TOTALYTD([Total Hours], 'Date Table'[Date])

Hours Last Month = 
CALCULATE([Total Hours], DATEADD('Date Table'[Date], -1, MONTH))

Hours MoM Change = [Total Hours] - [Hours Last Month]`
  },
  {
    module: "Module 4: DAX Deep Dive",
    section: "Part 9: Advanced Patterns",
    title: "14. RANKX, Variables (VAR/RETURN) & Dynamic Titles",
    definition: "Best practice patterns for ranking items, writing fast code, and generating dynamic labels.",
    meaning: "RANKX ranks items. Variables (VAR/RETURN) store intermediate values for faster execution and cleaner debugging. Dynamic titles adapt to user slicers.",
    instructorCue: "Final DAX lesson: 'Always use VAR and RETURN. It evaluates once, runs faster, and makes your DAX 10x easier to explain in class.'",
    syntax: "VAR var_name = expr RETURN expr\nRANKX(ALL(col), expr, , DESC, DENSE)",
    example: `Salary Rank = 
RANKX(ALL(staff[staff_name]), CALCULATE(SUM(staff[salary])), , DESC, DENSE)

Dynamic Title = 
VAR Dept = SELECTEDVALUE(departments[dept_name], "All Departments")
VAR Hrs = FORMAT([Total Hours], "#,0")
RETURN
"Staff Hours for " & Dept & ": " & Hrs & " hrs"`
  }

  // =========================================================================
  // MODULE: EXCEL FOR ANALYSTS (TOPICS 1 TO 27)
  // =========================================================================
  {
    module: "Module: Excel Mastery",
    section: "Part 1: Getting Started & Cleaning",
    title: "01. Sample Sales Data Setup (tblSales)",
    definition: "A standardized sales table (orders, regions, products) used across all Excel examples so calculations can be verified immediately.",
    meaning: "Paste it starting at cell A1 (columns A to G, rows 2 to 9). Totals: Total Amount = 4,230; South = 2,020, North = 1,310, East = 900.",
    instructorCue: "Have students type this in Excel immediately. Knowing the totals (4,230) beforehand allows them to self-check every formula.",
    syntax: "OrderID | OrderDate | Region | Product | Qty | UnitPrice | Amount",
    example: `OrderID, OrderDate, Region, Product, Qty, UnitPrice, Amount
1001, 2026-01-05, South, Pen, 10, 12, 120
1002, 2026-01-07, North, Book, 3, 150, 450
1003, 2026-01-09, South, Book, 2, 150, 300
1004, 2026-02-02, East, Pen, 25, 12, 300
1005, 2026-02-11, North, Bag, 1, 800, 800
1006, 2026-02-15, South, Bag, 2, 800, 1600
1007, 2026-03-03, East, Book, 4, 150, 600
1008, 2026-03-08, North, Pen, 5, 12, 60`,
    decisionBox: {
      question: "Why should we use a small 8-row table instead of a 100,000-row file when learning core formulas?",
      decision: "Always learn logic on data where you can verify calculations manually or in your head.",
      tradeoff: "Once logic is proven error-free on 8 rows, it will execute reliably across 1,000,000 rows without silent bugs."
    },
    practice: "Enter this dataset into Excel and verify that the sum of the Amount column is exactly 4,230.",
    hint: "Use =SUM(G2:G9).",
    answer: "=SUM(G2:G9)  --> Returns 4,230"
  },
  {
    module: "Module: Excel Mastery",
    section: "Part 1: Getting Started & Cleaning",
    title: "02. Excel Tables (Ctrl + T)",
    definition: "An Excel Table turns an unorganized cell range into a named, structured database object.",
    meaning: "Headers stay visible when scrolling, calculated columns fill down automatically, and formulas use readable column names instead of cell coordinates like A1.",
    instructorCue: "Never let students build analysis on raw ranges. Press Ctrl+T and name it tblSales immediately.",
    syntax: "1. Click inside data -> Press Ctrl + T\n2. Table Design tab -> Table Name: tblSales",
    example: `=SUM(tblSales[Amount])
=[@Qty]*[@UnitPrice]`,
    decisionBox: {
      question: "Should you write formulas using cell ranges (=G2*F2) or Structured Table References (=[@Qty]*[@UnitPrice])?",
      decision: "Always use Structured References inside Excel Tables.",
      tradeoff: "Table formulas automatically expand to new rows and are self-documenting for team collaboration."
    },
    practice: "Convert your sales range into a table and name it tblSales. Then add a column calculating Line Total.",
    hint: "Click inside the data, press Ctrl + T, and write =[@Qty]*[@UnitPrice] in the new column.",
    answer: "=[@Qty]*[@UnitPrice]"
  },
  {
    module: "Module: Excel Mastery",
    section: "Part 1: Getting Started & Cleaning",
    title: "03. Remove Duplicates",
    definition: "Deletes repeated rows based on the specific columns you select.",
    meaning: "Excel keeps the first occurrence and purges later duplicates. Make a backup copy first, as deletion cannot be undone once saved. Use =UNIQUE() for non-destructive dynamic extraction.",
    instructorCue: "Emphasize: 'Data > Remove Duplicates is destructive. If you want a clean list without destroying the original table, use =UNIQUE(tblSales[Region]).'",
    syntax: "=UNIQUE(range)\nData tab > Remove Duplicates > Select Columns",
    example: `=UNIQUE(tblSales[Region])
-- Returns South, North, East once each`,
    decisionBox: {
      question: "When should you use Data > Remove Duplicates vs. the =UNIQUE() function?",
      decision: "Use =UNIQUE() when building reports or dropdowns to preserve raw transactional audit trails. Use Remove Duplicates only during initial staging table cleaning.",
      tradeoff: "=UNIQUE() updates automatically when source records change; Remove Duplicates requires manual re-runs."
    },
    practice: "Extract an automated list of unique products from tblSales.",
    hint: "Use =UNIQUE(tblSales[Product]) in a blank cell.",
    answer: "=UNIQUE(tblSales[Product])  --> Returns Pen, Book, Bag"
  },
  {
    module: "Module: Excel Mastery",
    section: "Part 1: Getting Started & Cleaning",
    title: "04. Missing Values & Blank Cells",
    definition: "Locating, counting, and treating empty cells before they distort metrics.",
    meaning: "Use ISBLANK to test cells, COUNTBLANK to audit missing data, and Go To Special > Blanks to fill empty spots in batches.",
    instructorCue: "Golden Rule: 'Never fill blank numbers with 0 unless zero is the true measurement. Filling missing salaries with 0 ruins the true average.'",
    syntax: `=ISBLANK(cell)
=COUNTBLANK(range)
=IF(cell="","Unknown",cell)`,
    example: `=COUNTBLANK(C2:C9)
=IF(C2="","Unknown",C2)`,
    decisionBox: {
      question: "If customer phone numbers are missing in a sales file, should you drop the rows or replace with 'Unrecorded'?",
      decision: "Replace with 'Unrecorded' using =IF(A2=\"\",\"Unrecorded\",A2).",
      tradeoff: "Dropping rows loses transaction amounts and distorts financial reporting."
    },
    practice: "Write a formula to display 'Missing Region' if cell C2 is blank, otherwise display the region name.",
    hint: "Combine IF with ISBLANK or check for empty quotes \"\".",
    answer: '=IF(ISBLANK(C2), "Missing Region", C2)'
  },
  {
    module: "Module: Excel Mastery",
    section: "Part 1: Getting Started & Cleaning",
    title: "05. Text Functions (TRIM, PROPER, TEXTJOIN)",
    definition: "Formulas used to clean trailing whitespace, fix letter casing, and merge strings.",
    meaning: "TRIM removes invisible leading/trailing spaces. PROPER capitalizes the first letter of each word. TEXTJOIN concatenates ranges with a delimiter while ignoring empty cells.",
    instructorCue: "Show them: 'Why did VLOOKUP fail? Because \"Pen \" has a hidden space at the end! Always wrap messy text in TRIM().'",
    syntax: `=TRIM(text) | =PROPER(text) | =UPPER(text)
=LEFT(text, n) | =RIGHT(text, n) | =MID(text, start, n)
=TEXTJOIN(delimiter, ignore_empty, range)`,
    example: `=PROPER(TRIM("  soUTH "))  --> "South"
=TEXTJOIN(", ", TRUE, C2:D2)  --> "South, Pen"`,
    decisionBox: {
      question: "Why is TEXTJOIN preferred over CONCAT or the ampersand (&)?",
      decision: "TEXTJOIN accepts a whole range and lets you specify a separator once while skipping empty cells.",
      tradeoff: "Using & on 10 cells requires typing & \", \" & nine times and leaves trailing commas for blanks."
    },
    practice: "Clean up cell with value '   bOOK ' so it is trimmed and in proper title case.",
    hint: "Nest TRIM inside PROPER.",
    answer: '=PROPER(TRIM("   bOOK "))  --> "Book"'
  },
  {
    module: "Module: Excel Mastery",
    section: "Part 1: Getting Started & Cleaning",
    title: "06. Flash Fill (Ctrl + E)",
    definition: "An pattern recognition tool that auto-populates columns based on typing examples.",
    meaning: "Splits names, extracts domains, or formats phone numbers without writing complex string formulas. Warning: Output is static text, not formulas, so it will not update when source values change.",
    instructorCue: "Demonstrate: 'Type Asha from Asha Rao in row 1, press Ctrl+E, and Excel instantly extracts all first names.'",
    syntax: "1. Type desired pattern in adjacent column\n2. Select next cell and press Ctrl + E",
    example: `-- Input: OrderID 1001-South
-- Type in next cell: South
-- Press Ctrl + E: Automatically extracts region for all rows`,
    decisionBox: {
      question: "When should an analyst use Flash Fill instead of text formulas?",
      decision: "Use Flash Fill for quick one-time ad-hoc cleanup. Use text formulas (MID, LEFT, TEXTSPLIT) for recurring weekly models.",
      tradeoff: "Flash Fill produces static values and does not recalculate when raw data changes."
    },
    practice: "Try splitting 'Pen-12' into product and unit price using Ctrl + E.",
    hint: "Type 'Pen' in column H, select the cell below it, and press Ctrl + E.",
    answer: "Press Ctrl + E on the next row."
  },
  {
    module: "Module: Excel Mastery",
    section: "Part 1: Getting Started & Cleaning",
    title: "07. Fixing Data Types (VALUE, DATEVALUE, TEXT)",
    definition: "Converting numbers and dates stored as text into true computational data types.",
    meaning: "Numbers formatted as text align to the left and return 0 in SUM formulas. VALUE converts text numbers to numeric values; DATEVALUE converts text strings into Excel serial dates.",
    instructorCue: "Point out: 'If your SUM shows 0 even though there are numbers in the column, your numbers are text! Use Text to Columns to fix them in 2 clicks.'",
    syntax: `=VALUE(text)
=DATEVALUE(text)
=TEXT(value, "format")`,
    example: `=VALUE("1,200")  --> 1200
=DATEVALUE("05-Jan-2026")  --> Date serial number
=TEXT(B2, "mmm yyyy")  --> "Jan 2026"`,
    decisionBox: {
      question: "Should you store postal codes or customer IDs as Numbers or Text?",
      decision: "Store IDs, phone numbers, and postal codes as Text.",
      tradeoff: "Numeric formatting drops leading zeros (e.g. 07001 becomes 7001)."
    },
    practice: "Convert the text date string '2026-01-05' into month-year format 'Jan 2026'.",
    hint: "Use the TEXT function with \"mmm yyyy\".",
    answer: '=TEXT(DATEVALUE("2026-01-05"), "mmm yyyy")  --> "Jan 2026"'
  },
  {
    module: "Module: Excel Mastery",
    section: "Part 2: Formulas & Functions",
    title: "08. Cell References (A1, $A$1,$A1, A$1)",
    definition: "Defines whether cell coordinates shift when copied down or across.",
    meaning: "Relative (A1) shifts row and column. Absolute ($A$1) locks both. Mixed ($A1 or A$1) locks only the column or only the row. Toggle with F4.",
    instructorCue: "Tell students: 'Put a tax rate in J1. If you multiply by J1 and drag down, row 2 multiplies by empty J2. You must lock it with $J$1!'",
    syntax: "Press F4 while editing formula to cycle: A1 -> $A$1 -> A$1 ->$A1",
    example: `=E2 * $J$1
-- When copied down to row 3:
=E3 * $J$1  (E changes, J1 stays locked)`,
    decisionBox: {
      question: "When should you use a mixed reference ($A2) instead of full absolute ($A$2)?",
      decision: "Use $A2 when you want the column locked while dragging across columns, but want the row to adjust as you drag down.",
      tradeoff: "Full absolute ($A$2) locks both directions and cannot be dragged down a column list."
    },
    practice: "Multiply cell E2 by tax rate cell J1 so that when dragged down the column, J1 stays permanently locked.",
    hint: "Add dollar signs to lock row and column on J1.",
    answer: "=E2 * $J$1"
  },
  {
    module: "Module: Excel Mastery",
    section: "Part 2: Formulas & Functions",
    title: "09. Conditional Logic (IF, AND, OR, IFS)",
    definition: "Executes conditional decision branching directly inside spreadsheet cells.",
    meaning: "IF tests one condition. AND checks that all criteria match. OR checks that at least one matches. IFS replaces nested IF statements (equivalent to SQL CASE WHEN).",
    instructorCue: "Tip: 'Always put TRUE as the final test in IFS to handle the fallback ELSE condition.'",
    syntax: `=IF(condition, value_if_true, value_if_false)
=IFS(cond1, val1, cond2, val2, TRUE, fallback)`,
    example: `=IF(G2>=500, "High", "Low")
=IF(AND(C2="South", G2>=300), "Check", "OK")
=IFS(G2>=800, "High", G2>=300, "Medium", TRUE, "Low")`,
    decisionBox: {
      question: "Why should analysts stop writing 5 nested IF() statements and use IFS() instead?",
      decision: "Use IFS() for clean, sequential condition checks.",
      tradeoff: "Nested IFs (=IF(a, b, IF(c, d, IF(...)))) are hard to read and easy to break with closing parentheses."
    },
    practice: "Categorize an amount in G2: if >= 1000 'Premium', >= 500 'Standard', otherwise 'Basic'.",
    hint: "Use =IFS(G2>=1000, \"Premium\", G2>=500, \"Standard\", TRUE, \"Basic\").",
    answer: '=IFS(G2>=1000, "Premium", G2>=500, "Standard", TRUE, "Basic")'
  },
  {
    module: "Module: Excel Mastery",
    section: "Part 2: Formulas & Functions",
    title: "10. Conditional Aggregations (SUMIFS, COUNTIFS, AVERAGEIFS)",
    definition: "Aggregating values only for records that meet one or more specific criteria.",
    meaning: "The calculation range comes first in SUMIFS and AVERAGEIFS, followed by pairs of criteria range and criterion. Enclose comparison symbols in quotes.",
    instructorCue: "Say: 'In SUMIFS, the column you want to add up is always the FIRST argument. In SUMIF (singular), it was at the end. Always use SUMIFS.'",
    syntax: `=SUMIFS(sum_range, crit_range1, criterion1, ...)
=COUNTIFS(crit_range1, criterion1, ...)
=AVERAGEIFS(avg_range, crit_range1, criterion1, ...)`,
    example: `=SUMIFS(G2:G9, C2:C9, "South")  --> Returns 2,020
=COUNTIFS(C2:C9, "South", G2:G9, ">=300")  --> Returns 2
=AVERAGEIFS(G2:G9, D2:D9, "Book")  --> Returns 450`,
    decisionBox: {
      question: "Should you use SUMIF or SUMIFS when writing a model?",
      decision: "Always standardize on SUMIFS, even if you only have one condition.",
      tradeoff: "SUMIFS supports multiple criteria and maintains a consistent parameter structure."
    },
    practice: "Calculate the total sales amount for the North region from tblSales.",
    hint: "Formula: =SUMIFS(tblSales[Amount], tblSales[Region], \"North\").",
    answer: '=SUMIFS(tblSales[Amount], tblSales[Region], "North")  --> Returns 1,310'
  },
  {
    module: "Module: Excel Mastery",
    section: "Part 2: Formulas & Functions",
    title: "11. VLOOKUP",
    definition: "Searches for a key in the leftmost column of a table and returns a value from a specified column index.",
    meaning: "Requires FALSE for an exact match. If someone inserts a column into your table later, the hardcoded column index breaks.",
    instructorCue: "Warn them: 'Always write FALSE or 0 at the end! If you omit it, Excel defaults to TRUE (approximate match) and returns incorrect data.'",
    syntax: "=VLOOKUP(lookup_value, table_array, col_index_num, FALSE)",
    example: `=VLOOKUP("Bag", F2:G4, 2, FALSE)
-- With price list in F2:G4 (Pen 12, Book 150, Bag 800), returns 800`,
    decisionBox: {
      question: "Why does VLOOKUP break when someone inserts a new column into the source table?",
      decision: "Because the column index number (e.g. 2) is hardcoded.",
      tradeoff: "Use XLOOKUP or INDEX/MATCH, which reference actual column ranges rather than fixed column counts."
    },
    practice: "Look up the unit price for 'Pen' from range F2:G4 using VLOOKUP.",
    hint: "Set lookup value to \"Pen\", column index to 2, and exact match to FALSE.",
    answer: '=VLOOKUP("Pen", F2:G4, 2, FALSE)  --> Returns 12'
  },
  {
    module: "Module: Excel Mastery",
    section: "Part 2: Formulas & Functions",
    title: "12. XLOOKUP",
    definition: "Modern, robust replacement for VLOOKUP that looks in any direction without column index numbers.",
    meaning: "Defaults to exact match, allows looking left or right, and includes an optional built-in [if_not_found] fallback. Requires Excel 2021 or Microsoft 365.",
    instructorCue: "Tell them: 'XLOOKUP is the gold standard. No more counting columns, no more #N/A errors, and it looks to the left seamlessly.'",
    syntax: "=XLOOKUP(lookup_val, lookup_range, return_range, [if_not_found])",
    example: `=XLOOKUP("Book", F2:F4, G2:G4, "Not found")  --> Returns 150
=XLOOKUP("Cap", F2:F4, G2:G4, "Not Available")  --> Returns "Not Available"`,
    decisionBox: {
      question: "Why should modern analysts replace VLOOKUP with XLOOKUP in their models?",
      decision: "XLOOKUP eliminates column index numbers, defaults to exact match, and provides built-in error handling.",
      tradeoff: "XLOOKUP requires Excel 2021 or Microsoft 365; older Excel versions will return a #NAME? error."
    },
    practice: "Write an XLOOKUP to return the unit price for 'Bag' from F2:F4 and G2:G4, returning 'Missing' if not found.",
    hint: "Syntax: =XLOOKUP(\"Bag\", F2:F4, G2:G4, \"Missing\").",
    answer: '=XLOOKUP("Bag", F2:F4, G2:G4, "Missing")  --> Returns 800'
  },
  {
    module: "Module: Excel Mastery",
    section: "Part 2: Formulas & Functions",
    title: "13. INDEX & MATCH",
    definition: "Two-function combination where MATCH finds the row coordinate and INDEX retrieves the value.",
    meaning: "Works in every Excel edition and can look to the left of the lookup column. The 0 in MATCH indicates an exact match.",
    instructorCue: "Explain: 'MATCH returns the row number (e.g. Row 2). INDEX looks at that row in the target column and grabs the value.'",
    syntax: "=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))",
    example: `=INDEX(G2:G4, MATCH("Pen", F2:F4, 0))  --> Returns 12`,
    decisionBox: {
      question: "When should an analyst use INDEX/MATCH instead of XLOOKUP?",
      decision: "Use INDEX/MATCH when building workbooks for clients who may run older Excel versions (2016 or earlier).",
      tradeoff: "INDEX/MATCH works in every version of Excel since 1995 without compatibility issues."
    },
    practice: "Write an INDEX/MATCH formula to fetch the price of 'Book' from columns F and G.",
    hint: "=INDEX(G2:G4, MATCH(\"Book\", F2:F4, 0)).",
    answer: '=INDEX(G2:G4, MATCH("Book", F2:F4, 0))  --> Returns 150'
  },
  {
    module: "Module: Excel Mastery",
    section: "Part 2: Formulas & Functions",
    title: "14. IFERROR Handling",
    definition: "Intercepts formula errors (#N/A, #DIV/0!, #VALUE!) and substitutes a user-defined fallback.",
    meaning: "Keeps executive dashboards clean, but can mask underlying typos, so use it intentionally.",
    instructorCue: "Say: 'Never put IFERROR around your formula until you have tested that the formula works. Otherwise, you will hide genuine syntax mistakes.'",
    syntax: "=IFERROR(formula, value_if_error)",
    example: `=IFERROR(VLOOKUP("Cap", F2:G4, 2, FALSE), "Not in Catalog")
-- Returns "Not in Catalog" instead of #N/A`,
    decisionBox: {
      question: "Is it good practice to wrap every formula in =IFERROR(formula, \"\")?",
      decision: "No. Only wrap lookup formulas or divisions where missing records or zeros are expected.",
      tradeoff: "Blanket IFERROR usage conceals real structural problems like broken range names or wrong types."
    },
    practice: "Protect a division =G2/E2 from #DIV/0! errors by returning 0 if an error occurs.",
    hint: "Wrap the formula in =IFERROR(..., 0).",
    answer: "=IFERROR(G2/E2, 0)"
  },
  {
    module: "Module: Excel Mastery",
    section: "Part 2: Formulas & Functions",
    title: "15. Date Functions (EOMONTH, DATEDIF, NETWORKDAYS)",
    definition: "Calculates calendar deadlines, intervals, and working business days.",
    meaning: "Excel stores dates as numeric serial integers. EOMONTH returns month-end dates. DATEDIF computes intervals in days, months, or years. NETWORKDAYS counts working days excluding weekends.",
    instructorCue: "Tip: '=EOMONTH(TODAY(), 0) always gives the exact final date of the current month.'",
    syntax: `=TODAY() | =YEAR(date) | =MONTH(date)
=EOMONTH(date, months_offset)
=DATEDIF(start_date, end_date, "d"/"m"/"y")
=NETWORKDAYS(start_date, end_date, [holidays])`,
    example: `=EOMONTH(B2, 0)  --> 31 Jan 2026
=DATEDIF(B2, B9, "d")  --> 62 days between 5 Jan and 8 Mar 2026`,
    decisionBox: {
      question: "Why should analysts use EOMONTH(date, 0) instead of typing '2026-01-31' manually?",
      decision: "EOMONTH calculates the correct month-end automatically, including leap years.",
      tradeoff: "Hardcoded date strings break when rolled forward into February or 30-day months."
    },
    practice: "Calculate the exact number of days between OrderDate 2026-01-05 and 2026-03-08 using DATEDIF.",
    hint: "Use =DATEDIF(B2, B9, \"d\").",
    answer: '=DATEDIF(B2, B9, "d")  --> Returns 62'
  },
  {
    module: "Module: Excel Mastery",
    section: "Part 2: Formulas & Functions",
    title: "16. Dynamic Arrays (FILTER, SORT, UNIQUE)",
    definition: "Formulas that output multiple rows and columns that spill into adjacent cells automatically.",
    meaning: "One formula filters or sorts an entire dataset dynamically. A #SPILL! error indicates an existing cell is blocking the spill range.",
    instructorCue: "Demonstrate: 'Type =FILTER(tblSales, tblSales[Region]=\"South\"). All 3 South rows spill down instantly with zero drag-and-drop.'",
    syntax: `=FILTER(array, include_condition, [if_empty])
=SORT(array, [sort_index], [sort_order])
=UNIQUE(array)`,
    example: `=FILTER(tblSales, tblSales[Region]="South", "None")
=SORT(tblSales[Amount], , -1)  --> Sorts highest to lowest
=SUM(FILTER(tblSales[Amount], tblSales[Product]="Book"))  --> Returns 1,350`,
    decisionBox: {
      question: "What causes a #SPILL! error in dynamic array formulas?",
      decision: "An obstacle (text, formatting, or another formula) is blocking the output range.",
      tradeoff: "Clear the cells beneath and to the right of the formula to let the spill range expand."
    },
    practice: "Write a formula to dynamically filter tblSales for all rows where Product is 'Pen'.",
    hint: "Use =FILTER(tblSales, tblSales[Product]=\"Pen\", \"None\").",
    answer: '=FILTER(tblSales, tblSales[Product]="Pen", "None")'
  },
  {
    module: "Module: Excel Mastery",
    section: "Part 3: Analysis & Reporting",
    title: "17. Sorting and Filtering (Ctrl + Shift + L)",
    definition: "Reordering table records and isolating row subsets matching conditions without deleting data.",
    meaning: "Filter hides non-matching rows temporarily. Sort re-sequences rows across single or multiple levels. Always sort inside an Excel Table to keep row integrity.",
    instructorCue: "Tip: 'Press Ctrl + Shift + L to toggle filter arrows on and off instantly.'",
    syntax: "Toggle Filters: Ctrl + Shift + L\nSort Dialog: Data tab > Sort > Add Level",
    example: `-- Level 1: Sort Region Alphabetically (A to Z)
-- Level 2: Sort Amount Descending (Largest to Smallest)`,
    decisionBox: {
      question: "Why should you never sort an un-formatted range with blank column gaps?",
      decision: "Blank gaps cause Excel to sort only one half of the table, detaching names from amounts.",
      tradeoff: "Using Excel Tables (Ctrl + T) ensures the entire row moves as an atomic record."
    },
    practice: "Shortcut test: What keyboard shortcut toggles AutoFilter on and off in Excel?",
    hint: "Hold down Ctrl and Shift together, then press L.",
    answer: "Ctrl + Shift + L"
  },
  {
    module: "Module: Excel Mastery",
    section: "Part 3: Analysis & Reporting",
    title: "18. Pivot Tables",
    definition: "Interactive aggregation engine that summarizes thousands of transaction rows into cross-tabulated reports.",
    meaning: "Four drop zones: Rows, Columns, Values, Filters. After source data changes, click Refresh (Alt + F5) to update.",
    instructorCue: "Point to the screen: 'Drag Region to Rows, Amount to Values. In 3 seconds, you get South 2,020, North 1,310, East 900.'",
    syntax: "1. Click inside tblSales -> Insert > PivotTable\n2. Rows: Region | Values: Sum of Amount\n3. Refresh: Alt + F5",
    example: `PivotTable Output:
South:  2,020
North:  1,310
East:     900
Grand Total: 4,230`,
    decisionBox: {
      question: "Why does a PivotTable not update automatically when you edit numbers in raw data?",
      decision: "PivotTables run from an in-memory snapshot called the Pivot Cache to preserve performance.",
      tradeoff: "You must press Alt + F5 or click Data > Refresh All to sync latest table edits."
    },
    practice: "What are the 4 drop zones of an Excel Pivot Table field list?",
    hint: "Two describe layout dimensions, one holds numbers, one filters the view.",
    answer: "Rows, Columns, Values, and Filters"
  },
  {
    module: "Module: Excel Mastery",
    section: "Part 3: Analysis & Reporting",
    title: "19. Percentages in a Pivot Table (Show Values As)",
    definition: "Displays summary metrics as percentages of totals or period differences without writing formulas.",
    meaning: "Options include % of Grand Total, % of Column Total, % of Row Total, and Difference From.",
    instructorCue: "Show this: 'Right-click any value in your pivot -> Show Values As -> % of Grand Total. It calculates share of total instantly.'",
    syntax: "Right-click Pivot Value -> Show Values As -> % of Grand Total",
    example: `Region Share of Total Sales:
South: 47.8%
North: 31.0%
East:  21.3%`,
    decisionBox: {
      question: "When should an analyst show % of Column Total vs % of Row Total in a cross-tab pivot?",
      decision: "Use % of Column Total when comparing category proportions inside a single department. Use % of Row Total to see how a product splits across regions.",
      tradeoff: "Mislabeled percentage bases lead stakeholders to draw incorrect share conclusions."
    },
    practice: "Convert the regional sales numbers into percentages of the overall total. What is the South region's share?",
    hint: "Divide 2,020 by 4,230.",
    answer: "47.8% (2,020 / 4,230)"
  },
  {
    module: "Module: Excel Mastery",
    section: "Part 3: Analysis & Reporting",
    title: "20. Slicers and Timelines",
    definition: "Visual, clickable interactive filter buttons that control PivotTables and PivotCharts.",
    meaning: "Slicers filter categorical dimensions like Region or Product. Timelines filter dates. Connect one slicer to multiple PivotTables via Report Connections.",
    instructorCue: "Demonstrate: 'Click Report Connections, check both PivotTables, and one click on South updates your entire executive view!'",
    syntax: "PivotTable Analyze tab -> Insert Slicer\nRight-click Slicer -> Report Connections -> Check all target pivots",
    example: `-- Slicer: Region [South | North | East]
-- Connected to: Regional Sales Pivot + Product Mix Pivot`,
    decisionBox: {
      question: "Why is a Slicer better than a standard Pivot Filter dropdown for executive reports?",
      decision: "Slicers show all available options and active selections at a glance.",
      tradeoff: "Dropdown filters hide the unselected choices behind a menu, obscuring context."
    },
    practice: "How do you connect a single Slicer to three different PivotTables in the same workbook?",
    hint: "Right-click the slicer border and select the connections menu.",
    answer: "Right-click Slicer -> Report Connections -> Check all target PivotTables"
  },
  {
    module: "Module: Excel Mastery",
    section: "Part 3: Analysis & Reporting",
    title: "21. Conditional Formatting",
    definition: "Applies cell colors, data bars, or icon alerts automatically based on dynamic values.",
    meaning: "Highlights outliers, top percentiles, and thresholds. Use custom formulas with locked columns (e.g. =$G2>=500) to highlight entire table rows.",
    instructorCue: "Key trick: 'If you want the ENTIRE row highlighted, lock the column letter with a dollar sign: =$G2>=500.'",
    syntax: "Home tab -> Conditional Formatting -> New Rule -> Use a formula\nFormula: =$G2>=500",
    example: `=$G2>=500
-- Highlights entire row for orders 1005 (800), 1006 (1600), and 1007 (600)`,
    decisionBox: {
      question: "Why should analysts limit conditional formatting to 1 or 2 rules per dashboard?",
      decision: "Color should highlight anomalies, not overwhelm the sheet.",
      tradeoff: "Too many colors turn a spreadsheet into 'visual noise' where nothing stands out."
    },
    practice: "Write the conditional formatting formula to highlight all rows where Amount in column G is at least 800.",
    hint: "Lock the G column using $G2.",
    answer: "=$G2>=800"
  },
  {
    module: "Module: Excel Mastery",
    section: "Part 3: Analysis & Reporting",
    title: "22. Charts (Visual Selection)",
    definition: "Translates numerical data into visual representations to reveal patterns and relationships.",
    meaning: "Column/Bar: Category comparison. Line: Trends over time. Pie: Parts of a whole (keep to under 5 slices). Scatter: Correlation between 2 numeric metrics. Remove clutter like 3D effects and heavy gridlines.",
    instructorCue: "Golden Rule: 'Never use 3D pie charts. They distort angles and make front slices look larger than they are. Keep it 2D and clean.'",
    syntax: "Select Data / Pivot -> Insert tab -> Column / Line / Bar",
    example: `-- Comparing Regional Sales: Use Clustered Column Chart
-- Tracking Monthly Shift Costs: Use Line Chart`,
    decisionBox: {
      question: "When should an analyst use a Bar Chart instead of a Column Chart?",
      decision: "Use horizontal Bar Charts when category names are long or when displaying more than 10 categories.",
      tradeoff: "Vertical column charts force text labels to slant or truncate on crowded axes."
    },
    practice: "What chart type is best for showing sales trends across months?",
    hint: "Continuous time sequences are best shown with connected points.",
    answer: "Line Chart"
  },
  {
    module: "Module: Excel Mastery",
    section: "Part 3: Analysis & Reporting",
    title: "23. Building an Executive Dashboard",
    definition: "A single-page summary view presenting high-level KPIs, trends, and interactive slicers.",
    meaning: "Maintain clean workbook architecture: separate Raw Data, Calculations/Pivots, and Dashboard presentation sheets. A dashboard is not complete until it includes an executive recommendation.",
    instructorCue: "Teach structure: 'Sheet 1 = Data, Sheet 2 = Pivots, Sheet 3 = Dashboard. Turn off gridlines in View to give it an executive look.'",
    syntax: "Architecture: Raw Data Sheet -> Pivot Engine Sheet -> Dashboard Sheet",
    example: `Dashboard Architecture:
- Top: 3 Headline KPI Cards (Total Sales ₹4,230 | Orders 8 | Top Region South)
- Middle: Sales by Region Chart & Product Mix Breakdown
- Right: Region Slicer`,
    decisionBox: {
      question: "Why should raw data and dashboard charts never live on the same worksheet?",
      decision: "Keeping presentation separate prevents stakeholders from accidentally editing source records.",
      tradeoff: "Mixed sheets look cluttered and break when rows are filtered or inserted."
    },
    practice: "What key visual setting in the View tab should be turned off to give an Excel dashboard a software feel?",
    hint: "It removes the gray spreadsheet lines.",
    answer: "Uncheck 'Gridlines' under the View tab"
  },
  {
    module: "Module: Excel Mastery",
    section: "Part 3: Analysis & Reporting",
    title: "24. Data Validation",
    definition: "Restricts allowable cell inputs to predefined lists, numeric boundaries, or date ranges.",
    meaning: "Prevents data entry errors, invalid spellings, and inconsistent regional names. Use Circle Invalid Data to flag existing bad entries.",
    instructorCue: "Say: 'Data validation stops messy data at the source. If someone tries to type Soth instead of South, Excel rejects it.'",
    syntax: "Data tab -> Data Validation -> Allow: List -> Source: South,North,East",
    example: `=COUNTA(A2:A9)=ROWS(A2:A9)
-- Quick check: returns TRUE when no OrderID cell is empty`,
    decisionBox: {
      question: "Should validation use an inline list ('South,North,East') or a reference range ('=$M$1:$M$3')?",
      decision: "Reference a dedicated lookup range.",
      tradeoff: "Referenced ranges can be updated in one place without re-editing validation rules across thousands of cells."
    },
    practice: "Configure an Excel Data Validation rule so users can only pick 'Pen', 'Book', or 'Bag'.",
    hint: "Choose Allow: List, and enter the items separated by commas.",
    answer: "Data Validation -> Allow: List -> Source: Pen,Book,Bag"
  },
  {
    module: "Module: Excel Mastery",
    section: "Part 4: Power Query & Power Pivot",
    title: "25. Power Query (Get & Transform)",
    definition: "Automated ETL engine in Excel that imports, reshapes, and cleans raw files using repeatable Applied Steps.",
    meaning: "Never clean the same monthly file by hand. Power Query records each transformation in M language so clicking Refresh All re-runs the entire pipeline on new files.",
    instructorCue: "Tell students: 'If your boss gives you a messy report every Monday, clean it once in Power Query. Next Monday, click Refresh and you are done.'",
    syntax: "Data tab -> Get Data -> From Text/CSV or From Workbook\nTransform Data -> Applied Steps -> Close & Load",
    example: `Power Query Workflow:
Source File -> Promote Headers -> Changed Type -> Filtered Rows -> Loaded to Worksheet`,
    decisionBox: {
      question: "When should an analyst use Power Query instead of worksheet formulas?",
      decision: "Use Power Query for recurring imports, multi-file appends, unpivoting, or large datasets.",
      tradeoff: "Power Query does not bloat worksheet calculation time and runs reliably on source refresh."
    },
    practice: "Where do you locate the recorded transformation history inside the Power Query Editor window?",
    hint: "It is listed on the right sidebar pane.",
    answer: "In the 'Applied Steps' pane on the right side of the editor"
  },
  {
    module: "Module: Excel Mastery",
    section: "Part 4: Power Query & Power Pivot",
    title: "26. Common Power Query Transformations (M Code)",
    definition: "Standard data cleaning operations: type casting, splitting, custom columns, and merging.",
    meaning: "Every UI action generates a line of M code in the formula bar. Common operations include Remove Columns, Split Column by Delimiter, and Unpivot Columns.",
    instructorCue: "Highlight Unpivot: 'If months run across columns (Jan, Feb, Mar), select them and click Unpivot Columns. It reshapes wide spreadsheets into clean tabular records.'",
    syntax: `= Table.SelectRows(Source, each [Amount] > 500)
= Table.AddColumn(Source, "Total", each [Qty] * [UnitPrice], type number)`,
    example: `= Table.SelectRows(Source, each [Amount] > 500)
= Table.AddColumn(Source, "Line Total", each [Qty] * [UnitPrice], type number)`,
    decisionBox: {
      question: "Why is 'Unpivot Columns' in Power Query critical for downstream analytics?",
      decision: "Databases, PivotTables, and Power BI require narrow, tall tables with one metric column, not wide matrix grids.",
      tradeoff: "Wide summary tables cannot be grouped, filtered, or sliced effectively in BI tools."
    },
    practice: "Write an M code expression to add a custom column named 'Total' that multiplies [Qty] by [UnitPrice].",
    hint: "Use each [Qty] * [UnitPrice].",
    answer: '= Table.AddColumn(Source, "Total", each [Qty] * [UnitPrice], type number)'
  },
  {
    module: "Module: Excel Mastery",
    section: "Part 4: Power Query & Power Pivot",
    title: "27. Power Pivot & Data Modeling",
    definition: "In-memory database engine inside Excel for building multi-table relational models and DAX measures.",
    meaning: "Handles millions of rows beyond Excel's 1,048,576 row sheet limit. Links tables using relationships without VLOOKUP, and powers PivotTables from a unified Data Model.",
    instructorCue: "Bridge to Power BI: 'Power Pivot in Excel is the exact same engine inside Power BI! Learn DAX measures here and you are already halfway through Power BI.'",
    syntax: "Measure Name := expression\nData tab -> Relationships -> New",
    example: `Total Sales := SUM(tblSales[Amount])
Average Sale := AVERAGEX(tblSales, tblSales[Amount])`,
    decisionBox: {
      question: "Why should an analyst use Power Pivot relationships instead of adding 50 VLOOKUP columns to a worksheet?",
      decision: "Relationships connect tables in memory without creating duplicate lookup columns.",
      tradeoff: "50 VLOOKUP columns across large tables bloat file size and freeze recalculation times."
    },
    practice: "What is the standard syntax for defining an explicit DAX measure inside Power Pivot?",
    hint: "Use a colon before the equals sign.",
    answer: "Measure Name := expression (e.g. Total Sales := SUM(tblSales[Amount]))"
  }
];
