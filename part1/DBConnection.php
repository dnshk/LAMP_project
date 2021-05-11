<?php
// database connection script 
// Group 12

$svrName = "localhost";
$username = "user1";
$password = "Windows1";
$db = "employee_test_dataset";

$conn = new mysqli($svrName, $username, $password, $db);

if ($conn->connect_errno) {
	echo "Failed to connect to MySQL: (" . $conn->connect_errno . ") " . $conn->connect_error;
}
