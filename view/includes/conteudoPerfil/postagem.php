<?php 

    require_once($_SERVER['DOCUMENT_ROOT'].'/rede_social/controler/postagem.php');
    if($id == $_SESSION['id']){
        echo form($id);
    }
    echo listar($id);

?>

