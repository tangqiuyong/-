<?php
	// require "conn1.php";

	// if(isset($_POST['username']) && isset($_POST['pass'])){
	// 	$username=$_POST['username'];
	// 	$pass=sha1($_POST['pass']);
		
	// 	$result=mysqli_query("select * from database where username='$username' and pass='$pass'");
		
	// 	if(mysql_fetch_array(  $conn1,$result,MYSQL_ASSOC())){
	// 		echo true;
	// 	}else{
	// 		echo false;
	// 	}
		
	// }


	include "conn1.php";
	
    $username=$_POST['username'];
    $pass=$_POST['pass'];
	
	$result=mysqli_query($conn1,"select * from database where username='$username' and pass='$pass'");
	
	$list=mysqli_fetch_array($result,MYSQLI_ASSOC());
	
	echo json_encode($list);
	
?>