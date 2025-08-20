<?php
    
    $res = $bd->solicitacoesDeAmizade($_SESSION['email']);
    $count = '';
    if(count($res) > 0){$count = '<strong class="notf-count">'.count($res).'+</strong>';} //mostrara na tela um contador caso tiver notificacoes

    $notificacoes = '<div id="flip" class="notf"> <i class="fa fa-bell"></i> '.$count.' </div>';
    $notificacoes .='<div id="panel">';
	foreach($res as $data){
        $notificacoes .= '<p><span>
                    <a href=index.php?conteudo=perfil&id='.$data['id'].'><img src="documentos-usuarios/'.$data['email'].'/img/perfil/fotodoperfil.jpg" width="40px" higth="40px">'.$data['nome'].'</a>
                    <a href=index.php?conteudo=perfil&id='.$data['id'].'&acao=Aceitar&email='.$data['email'].'>Aceitar</a>
                    <a href=index.php?conteudo=perfil&id='.$data['id'].'&acao=Excluir&email='.$data['email'].'>Excluir</a></span></p>'; 
    }
    $notificacoes .='</div>';
    
	return $notificacoes;
?>