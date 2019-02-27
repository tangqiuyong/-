<?php  
	include "conn.php";
	$result=mysqli_query($conn,'select * from taobaopic');
	$list=array();
	for($i=0; $i <mysqli_num_rows($result);$i++){
		$list[$i]=mysqli_fetch_array($result,MYSQLI_ASSOC);
		
	}
	
	echo json_encode($list);

    



	
?>