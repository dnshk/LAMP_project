<?php
include '../part1/DBConnection.php';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  if (!($result = $conn->prepare("UPDATE employees SET emp_firstName=?, emp_lastName=?, emp_middleName=?, emp_type=?, emp_initialLevel=?, emp_hireDate=?, emp_gender=?, emp_birthDate=?, emp_passwd=? WHERE emp_id=?"))) {
    echo "Prepare failed: (" . $result->errno . ") " . $result->error;
  }
  if (!$result->bind_param("sssssssssi", $emp_firstName, $emp_lastName, $emp_middleName, $emp_type, $emp_initialLevel, $emp_hireDate, $emp_gender, $emp_birthDate, $emp_passwd, $emp_id)) {
    echo "Binding parameters failed: (" . $result->errno . ") " . $result->error;
  }

  // populate param vars
  if (isset($_POST['emp_firstName'])) {
    $emp_firstName = $_POST['emp_firstName'];
  }
  if (isset($_POST['emp_lastName'])) {
    $emp_lastName = $_POST['emp_lastName'];
  }
  if (isset($_POST['emp_middleName'])) {
    $emp_middleName = $_POST['emp_middleName'];
  }
  if (isset($_POST['emp_type'])) {
    $emp_type = $_POST['emp_type'];
  }
  if (isset($_POST['emp_initialLevel'])) {
    $emp_initialLevel = $_POST['emp_initialLevel'];
  }
  if (isset($_POST['emp_hireDate'])) {
    $emp_hireDate = $_POST['emp_hireDate'];
  }
  if (isset($_POST['emp_gender'])) {
    $emp_gender = $_POST['emp_gender'];
  }
  if (isset($_POST['emp_birthDate'])) {
    $emp_birthDate = $_POST['emp_birthDate'];
  }
  if (isset($_POST['emp_passwd'])) {
    $emp_passwd = $_POST['emp_passwd'];
  }
  if (isset($_POST['emp_id'])) {
    $emp_id = $_POST['emp_id'];
  }


  $result->execute();

  print_r($_POST);

  $result->close();
  $conn->close();
}
