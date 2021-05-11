/*
LAMP2 Database
DB REQUIREMENTS:
 i.) 	Delete instance of database if one exists. 
 ii.) 	Create a new instance of database. 
 iii.) 	Delete Db User if it exists.
 iv.) 	Create your database user. 
 v.) 	Assign all privileges on your project database to your database user. 
 vi.) 	Create your project's database tables within your projects database. 

** db Name 	= Purpose of the project.. lampProject? ..employees-db?  
   db charset 	= utf-8

INSTRUCTIONS TO RUN SCRIPT: 
 mysql sign in 
 mysql: source script.sql

 NOTE: Modified for part 2
*/

/* 
    -> Drop DB if exists
*/
DROP DATABASE IF EXISTS employee_test_dataset;

/* 
   -> Create db if exists
*/
CREATE DATABASE IF NOT EXISTS employee_test_dataset CHARACTER SET utf8mb4;

/* 
   -> Drop User if exists
*/
DROP USER IF EXISTS 'user1'@'localhost';

/* 
   -> Create User
*/ 
CREATE USER 'user1'@'localhost' IDENTIFIED BY 'Windows1';

/* 
   -> Assign all Privileges to user 
*/ 
GRANT ALL PRIVILEGES ON employee_test_dataset.* TO 'user1'@'localhost';

/*
   -> Create db tables 
*/
CREATE TABLE employees (
   emp_id int NOT NULL AUTO_INCREMENT,
   emp_firstName varchar(55), 
   emp_lastName varchar(55),
   emp_middleName varchar(55),
   emp_type varchar(10),
   emp_initialLevel varchar(55),
   emp_hireDate DATE,
   emp_gender varchar(55),
   emp_birthDate DATE,
   emp_passwd varchar(75),

   PRIMARY KEY(emp_id)
);

/* this only includes PT and FT employees, but the PT employees will be calculated based on their level's salary/261 */
/* for now the salary table will have no data, calculations will be done for part 3. */
CREATE TABLE salaries (
   sal_id int NOT NULL AUTO_INCREMENT,
   emp_id int,
   sal_level int,
   sal_annual DECIMAL(13,4),

   PRIMARY KEY(sal_id),
   FOREIGN KEY (emp_id) REFERENCES employees(emp_id)
);
