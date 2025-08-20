<?php
        
    include("./model/usuario.php");
    $user = new Usuario();
    $usuarios = '';
    $res = $user->listAll();
        foreach($res as $data){
            if($_SESSION['id'] != $data['id']){
                $usuarios .= '<a href=index.php?conteudo=perfil&id='.$data['id'].'>'.$data['nome'].'</a><hr/>'; 
            }
        }
    
?>


<h1>Usuarios</h1><hr/><br/><br/><br/><br/>
<?php echo $usuarios?>