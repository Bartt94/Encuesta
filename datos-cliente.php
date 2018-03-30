<?php   

$con = mysqli_connect('localhost','root','','quintas');


    $name = $_POST['name'];
    $phone  = $_POST['phone'];
    $date  = $_POST['date'];
    $email  = $_POST['email'];
    
    

	
	$sql = "INSERT INTO cliente (Nombre, Telefono, Fecha, Email)VALUES('$name','$phone','$date','$email')";
	


	$result = mysqli_query($con,$sql); 
	
	if($result){
		echo "Se guardo correctamente";


	}
	else {
		echo "Ocurrio un error";
	}


?>