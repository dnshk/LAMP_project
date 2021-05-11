<?php
// Group 12 - part 2 (login system)
// this will be a landing page with option to sign-in/up
session_start();
$_SESSION['userid'] = session_id();
require("part1/DBConnection.php");
$error = "";
// include 'part2_3/https_test.php';

// this generates CSV so that it can be uploaded into the database
// checks if it exists or not, so it doesn't get overwritten on each refres/visit to index.php
if (!file_exists("part2/projectdata.csv")) {
    include 'part2_3/rand.php';
    global $list;
    generateCSV();
}

// if the submit button is clicked
if (isset($_POST['loginSubmit'])) {
    // if the login POST is set 
    // get the username and password used and check against the DB
    // if user found, login. If not display login error 
    $emp_id = $conn->real_escape_string($_POST['emp_id']);
    $passwd = $conn->real_escape_string($_POST['passwd']);

    // $sql = "SELECT * FROM employees WHERE emp_id=? AND passwd=?";

    // $result = $conn->prepare($sql);
    // $result->bind_param("ii", $emp_id, $passwd);
    // $result->execute();

    $result = $conn->query("SELECT * FROM employees WHERE emp_id='" . $emp_id . "' AND emp_passwd='" . $passwd . "'");

    if ($result->num_rows == 0) {
        // display error if user doesn't exist / incorrect login
        $error = "ID or password incorrect. Please try again.";
    } else {
        // set session id as the emp id and move to home page
        $_SESSION['user_id'] = $emp_id;
        // NOTE: need to change to search form (C, D, E) that Alex is working on
        header("Location: https://localhost/group12_project/part2_3/display_employee.php");
        die();
    }


    $result->close();
}
$conn->close();
?>

<html>

<head>
    <title>Employee Login</title>
    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
        }

        #loginUser,
        #loginPw {
            margin: 0.5em 0 1em 0;
            padding: 5px;
        }

        input[type=submit] {
            background: rgb(80, 117, 204);
            border: 2px solid grey;
            border-radius: 5px;
            padding: 10px;
            font-size: 14pt;
            color: white;
        }
    </style>
</head>

<body>
    <h2>Login with employee ID and password.</h2>

    <h4>Login:</h4>
    <?php echo $error; ?>
    <form method="post">
        <label>Employee ID:</label><br>
        <input type="text" name="emp_id" id="loginUser"><br>
        <label>Password:</label><br>
        <input type="password" name="passwd" id="loginPw"><br>
        <input type="submit" name="loginSubmit" value="Login">
    </form>

</body>

</html>