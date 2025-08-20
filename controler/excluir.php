<?php
	require_once("../model/usuario.php");
	$user = new Usuario();
	
	$user->setEmail($_GET["email"]);

	if($user->delete()){
	   header("Location: ../");
	}
?>