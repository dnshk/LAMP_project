<?php
if (!empty($_SESSION['userid'])) {
    $userid = $_SESSION['userid'];
} else {
    header("Location: https://localhost/group12_project/index.php");
    die();
}
