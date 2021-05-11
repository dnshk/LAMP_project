<?php

include "../part1/DBConnection.php";

$return_arr = array();

$query = "SELECT emp_id, emp_firstName, emp_lastName FROM employees ORDER BY emp_id";

$result = mysqli_query($conn, $query);

while ($row = mysqli_fetch_array($result)) {
    $emp_id = $row['emp_id'];
    $emp_firstName = $row['emp_firstName'];
    $emp_lastName = $row['emp_lastName'];

    $return_arr[] = array(
        "emp_id" => $emp_id,
        "emp_firstName" => $emp_firstName,
        "emp_lastName" => $emp_lastName
    );
}

// Encoding array in JSON format
echo json_encode($return_arr);
