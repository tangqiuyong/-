<?php
include "conn1.php";
	// $isPost = $_POST['post'];
	// echo($isPost);
	echo($_POST['submit']);
	// echo($isPost);
	// if(isset($_POST['POST'])){
	// 	$username=$_POST['username'];
	// 	$pass=($_POST['pass']);
	// 	$sqli="INSERT INTO `database`(`username`, `pass`) VALUES ('$username','$pass')";
	// 	$res = mysqli_query($conn1,$sqli);
	// 	header('http://localhost/weipinhui/src/login.html');
	
	// }else{
	// 	exit('非法操作');
	// }


	if(isset($_POST['username']) && isset($_POST['pass'])){
		$username=$_POST['username'];
		$pass=($_POST['pass']);
		$sqli="INSERT INTO `database`(`username`, `pass`) VALUES ('$username','$pass')";
		$res = mysqli_query($conn1,$sqli);


		// header('http://localhost/weipinhui/src/login.html');


		echo true;
	}else{
		exit('非法操作');
	}

	
?>