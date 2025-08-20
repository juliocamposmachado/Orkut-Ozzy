<?php ///ler todos os arquivos va pasta do usuario
    $diretorio = "./documentos-usuarios/".$usuario['email'];
    $fotos = $urd->read($diretorio."/img/galeria"); 
?>


<?php echo $fotos;?> 