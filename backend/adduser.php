<?php
include './server.php';

$sql = "INSERT INTO users (name,email) VALUES ('".$_POST['name']."', '".$_POST['username']."')";

if ($conn->query($sql) === TRUE) {
      $json['success'] = TRUE;
      $json['msg'] = "User created successfully.";
      echo json_encode($json);
      return;
} else {
  
      $json['success'] = FALSE;
      $json['msg'] = "Error: " . $sql . "<br>" . $conn->error;
      echo json_encode($json);
      return;
}

$conn->close();
?>