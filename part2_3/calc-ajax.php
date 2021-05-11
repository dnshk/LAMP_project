<?php
include "../part1/DBConnection.php";
$return_arr = array();
$query = "SELECT emp_id, emp_firstName, emp_lastName, emp_type, emp_initialLevel, emp_hireDate FROM employees";
$result = mysqli_query($conn,$query);

while($row = mysqli_fetch_array($result)){
 $emp_id = $row['emp_id'];
 $emp_firstName = $row['emp_firstName'];
 $emp_lastName = $row['emp_lastName'];
 $emp_type = $row['emp_type'];
 $emp_initialLevel = $row['emp_initialLevel'];
 $emp_hireDate = $row['emp_hireDate'];
 
 $return_arr[] = array("emp_id" => $emp_id,
                       "emp_firstName" => $emp_firstName,
                       "emp_lastName" => $emp_lastName,
                       "emp_type" => $emp_type,
                       "emp_initialLevel" => $emp_initialLevel,
                       "emp_hireDate" => $emp_hireDate);
}
// Encoding array in JSON format

echo json_encode($return_arr);

?>