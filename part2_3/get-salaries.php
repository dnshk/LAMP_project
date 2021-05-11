<?php
include "../part1/DBConnection.php";
$return_arr = array();
$query = "SELECT salaries.Level, salaries.period_1, salaries.period_2, salaries.period_3, salaries.period_4 FROM salaries";
$result = mysqli_query($conn,$query);

while($row = mysqli_fetch_array($result)){
 $Level = $row['Level'];
 $period_1 = $row['period_1'];
 $period_2 = $row['period_2'];
 $period_3 = $row['period_3'];
 $period_4 = $row['period_4'];
 
 $return_arr[] = array("Level" => $Level,
                       "period_1" => $period_1,
                       "period_2" => $period_2,
                       "period_3" => $period_3,
                       "period_4" => $period_4);
}
// Encoding array in JSON format

echo json_encode($return_arr);