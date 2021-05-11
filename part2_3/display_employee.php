<?php
include '../part1/DBConnection.php';
?>
<html>

<head>
  <script src="js/jquery-3.1.1.min.js" type="text/javascript"></script>
  <script src="js/script.js" type="text/javascript"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
    }

    input[type=submit], button {
      background: rgb(80, 117, 204);
      border: 2px solid grey;
      border-radius: 5px;
      padding: 5px;
      font-size: 13pt;
      color: white;
    }

    #logout {
      position: absolute;
      top: 5vh;
      right: 5vh;
    }

    #drop_list {
      margin: 0.5em 0 1em 0;
      padding: 5px;
    }
  </style>
</head>

<body>
  <div id="drop_list">
    <p> Choose an employee </p>
  </div>
  <div id="button_container">
    <button id="emp_edit">Edit Data</button>
    <button id="emp_add">Add Employee</button>
    <p><button id="calculate_btn">Salary History</button>
    <button id="retirement_btn">Retirement Info</button></p>
    <div id="input_fields"></div>
    <form method="post" action="../part2_3/logout.php">
      <input type='submit' value="Logout" id="logout" name="logout_btn">
    </form>
</body>

</html>