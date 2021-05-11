<?php
if (isset($_SERVER['HTTPS']) === FALSE) {   
    header('Location: https://localhost/group12_project/index.php');    
    die();
}
