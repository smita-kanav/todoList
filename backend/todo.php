<?php
include './server.php';
$_POST = json_decode(file_get_contents('php://input'), true);

if($_POST['type'] == "Add")
{
      $date_now = date("Y-m-d"); // this format is string comparable

      if ($date_now < $_POST['task_date']) {
      

            $sql = "INSERT INTO tasks (user_email,task,task_date,task_time) VALUES ('".$_POST['user_email']."', '".$_POST['task']."', '".$_POST['task_date']."', '".$_POST['task_time']."')";

            if ($conn->query($sql) === TRUE) {
                  $json['success'] = TRUE;
                  $json['msg'] = "Task created successfully.";
                  echo json_encode($json);
                  return;
            } else {
            
                  $json['success'] = FALSE;
                  $json['msg'] = "Error: " . $sql . "<br>" . $conn->error;
                  echo json_encode($json);
                  return;
            }
      }else{
            $json['success'] = FALSE;
            $json['msg'] = "Cannot select past date.";
            echo json_encode($json);
            return;
      }
} else if($_POST['type'] == "Update"){
      $date_now = date("Y-m-d"); // this format is string comparable

      if ($date_now < $_POST['task_date']) {
      $sql = "UPDATE tasks set task = '".$_POST['task']."',task_date = '".$_POST['task_date']."',task_time = '".$_POST['task_time']."' where id =  ".$_POST['id'];

      if ($conn->query($sql) === TRUE) {
            $json['success'] = TRUE;
            $json['msg'] = "Task updated successfully.";
            echo json_encode($json);
            return;
      } else {
      
            $json['success'] = FALSE;
            $json['msg'] = "Error: " . $sql . "<br>" . $conn->error;
            echo json_encode($json);
            return;
      }
      } else {
            $json['success'] = FALSE;
            $json['msg'] = "Cannot select past date.";
            echo json_encode($json);
            return;
      }
} else if($_POST['type'] == "Delete"){
    $sql = "DELETE  FROM tasks where id='".$_POST['id']."'";
    $result = $conn->query($sql);

    if ($result) {
        $json['success'] = TRUE;
        echo json_encode($json);
        return;
    } else {
        $json['success'] = FALSE;
        $json['msg'] = "No Record Found.";
        echo json_encode($json);
        return;
    }
} else if($_POST['type'] == "getTask"){
      $sql = "SELECT * FROM tasks where id='".$_POST['id']."'";
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
}


$conn->close();
?>