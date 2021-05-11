<?php
include '../part1/DBConnection.php';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!($stmt = $conn->prepare("INSERT INTO employees (emp_firstName,  emp_lastName,  emp_middleName, emp_type, emp_initialLevel, emp_hireDate, emp_gender, emp_birthDate, emp_passwd) VALUES(?,?,?,?,?,?,?,?,?)"))) {
        echo "Prepare failed: (" . $stmt->errno . ") " . $stmt->error;
    }
    if (!$stmt->bind_param("sssssssss", $add_firstName, $add_lastName, $add_middleName, $add_type, $add_initialLevel, $add_hireDate, $add_gender, $add_birthDate, $add_passwd)) {
        echo "Binding parameters failed: (" . $stmt->errno . ") " . $stmt->error;
    }

    // populate param vars
    if (isset($_POST['emp_firstName_add'])) {
        $add_firstName = $_POST['emp_firstName_add'];
    }
    if (isset($_POST['emp_lastName_add'])) {
        $add_lastName = $_POST['emp_lastName_add'];
    }
    if (isset($_POST['emp_middleName_add'])) {
        $add_middleName = $_POST['emp_middleName_add'];
    }
    if (isset($_POST['emp_type_add'])) {
        $add_type = $_POST['emp_type_add'];
    }
    if (isset($_POST['emp_initialLevel_add'])) {
        $add_initialLevel = $_POST['emp_initialLevel_add'];
    }
    if (isset($_POST['emp_hireDate_add'])) {
        $add_hireDate = $_POST['emp_hireDate_add'];
    }
    if (isset($_POST['emp_gender_add'])) {
        $add_gender = $_POST['emp_gender_add'];
    }
    if (isset($_POST['emp_birthDate_add'])) {
        $add_birthDate = $_POST['emp_birthDate_add'];
    }
    if (isset($_POST['emp_passwd_add'])) {
        $add_passwd = $_POST['emp_passwd_add'];
    }

    $stmt->execute();
    print_r($_POST);

    $stmt->close();
    $conn->close();
}
