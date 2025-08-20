<?php
	
	require_once("../model/usuario.php");
	$user = new Usuario();
	
	
	$antigoNome = $_POST["nomePasta"];
	
	$user->setId($_POST["id"]);
	$user->setNome($_POST["nome"]);
	$user->setSobrenome($_POST["sobrenome"]);
	$user->setSenha($_POST["senha"]);
	$user->setEmail($_POST["email"]);
	$user->setNascimento($_POST["nascimento"]);
	$user->setSexo($_POST["sexo"]);

	if($user->edit($antigoNome)){
		header("Location: ../");
	}
?>