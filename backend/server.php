<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    // $user = $_POST['username'];
    // echo ("Hello smita: $user");
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "todo";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }
?>