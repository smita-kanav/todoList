<?php
include './server.php';

$sql = "SELECT * FROM tasks where user_email='".$_POST['email']."' AND task_date='".$_POST['date']."'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  $rows = $result->fetch_all();
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