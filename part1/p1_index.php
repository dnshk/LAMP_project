<?php
// Group 12 - Project Index Page
session_start();
$loginError = "";

// database connection and name randomizer/csv creation scripts
include 'part1/DBConnection.php';
include 'part1/randomizer.php';

?>
<!DOCTYPE html>
<html>

<head>
    <title>Project part 1 - Index</title>
    <style>
        table,
        h1 {
            margin: 0vh 4vh 4vh 4vh;
        }

        th,
        td {
            padding: 5px;
            border-bottom: 1px solid #ddd;
            border-right: 1px solid #ddd;
        }

        th {
            font-size: 16pt;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
    </style>
</head>

<body>
    <form method="post" action="part2/logout.php">
        <input type="submit" name="logoutBtn" value="Logout" />
    </form>
</body>

</html>