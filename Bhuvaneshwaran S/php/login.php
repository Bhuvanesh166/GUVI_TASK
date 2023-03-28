<?php
$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "exam";
$email = $_POST['email'];
$password = $_POST['password'];
if (!empty($email) || !empty($password) )
{

$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);
if (mysqli_connect_error()){
  die('Connect Error ('. mysqli_connect_errno() .') '
    . mysqli_connect_error());}
  else{
    $stmt=$conn->prepare("select * from tbl_user where email=?");
    $stmt->bind_param('s',$email);
    $stmt->execute();
    $stmt_result=$stmt->get_result();
    if($stmt_result->num_rows > 0){
    $data=$stmt_result->fetch_assoc();
    if($data['password']===$password){
        echo"valid";
      include './html/profile.html';
    } else{
    echo"invalid";
    }
  }else{
     echo"invalidd";
    }
    
}

}
?>