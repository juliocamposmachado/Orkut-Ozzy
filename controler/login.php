<?php

	require_once("../model/SQL.php");
    require_once("../controler/arquivos/crd-pasta.php");
    
	$bd = new BD();
    $crd = new CRD();
	$senha = $_POST["senha"];
    $email = $_POST["email"];
        $res = $bd->verificarUsuario($email,$senha);
        if($res != null){
            session_start();
            $_SESSION['id'] = $res[0]['id'];
            $_SESSION['email'] = $res[0]['email'];
            header("Location: ../");
        }
        else{
            header("Location: ../index.php?conteudo=form-login");
        }
		//$crd->log('O usuario email '.$email.',fez login em '.date("Y-m-d H:i:s")."\r\n");
?>