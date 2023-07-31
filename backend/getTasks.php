<?php
include './server.php';

$sql1 = "SELECT * FROM users where email='".$_POST['email']."'";
$result1 = $conn->query($sql1);


if ($result1->num_rows > 0) {
$date_now = date("Y-m-d");
$where = "where task_date >= '".$date_now."'";
$where1 = " user_email='".$_POST['email']."'";
$sql = "SELECT * FROM tasks $where  AND $where1";
// echo $sql;

// die;
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

} else {
  $json['success'] = FALSE;
      $json['msg'] = "User Does not exist.";
      echo json_encode($json);
      return;
}

$conn->close();
?>