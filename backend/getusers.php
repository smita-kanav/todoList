<?php
include './server.php';

$sql = "SELECT * FROM users";
$result = $conn->query($sql);
$rows = $result->fetch_all();
// print_r($rows);
// die;

if ($result->num_rows > 0) {
    $json['success'] = TRUE;
    $json['data'] = $rows;
      echo json_encode($json);
      return;
  } else {
      $json['success'] = FALSE;
      $json['msg'] = "No Record Found.";
      echo json_encode($json);
      return;
  }



$conn->close();
?>