<?php //
	
	require_once($_SERVER['DOCUMENT_ROOT'].'/rede_social/model/SQL.php'); 
	$acao="";
	$amigoEmail="";
	$bd = new BD();
	
	if (!isset($_SESSION)) {//Verificar se a sessão não já está aberta.
        session_start();
	}
	
    if(isset($_GET['email'])){
		$amigoEmail = $_GET['email'];
	}
	if(isset($_GET['acao'])){
		$acao = $_GET['acao'];
	}
	switch($acao){
		case 'Adicionar':
			$bd->solicitarAmizade($_SESSION['email'], $amigoEmail);
			break;
		case 'Aceitar':
			$bd->aceitarAmizade($amigoEmail, $_SESSION['email']);
			break;
		case 'Excluir':
			$bd->deletarAmizade($_SESSION['email'], $amigoEmail);
			break;
	}
	
		
	function botaoAmizade($id, $email){//caso for amigo ira aparecer o botao excuir amizade se nao for amigo aparecera excluir
		$bd = new BD();
		$acao = 'Excluir';        
		if(!$bd->saoAmigos($_SESSION['email'], $email)){
			$acao = 'Adicionar';
		}

		if($email != $_SESSION['email']){//o botao so vai aparecer no perfil do usurio logado
			echo '<a href="?conteudo=perfil&id='.$id.'&acao='.$acao.'&email='.$email.'"class="link-perfil">'.$acao.'</a>';
		}
		else {
			echo  '<a href="./index.php?id='. $_SESSION['id'].'&conteudo=perfil&conteudoPerfil=form-editar" class="link-perfil">Editar Perfil</a>';
		}
	}

	function listAmigos($email){
		$bd = new BD();
        $html='';
		$res = $bd->buscaramigos($email);
		if(count($res) >= 1){
			foreach($res as $data){
				$url = "./documentos-usuarios/".$data['email']."/img/perfil/fotodoperfil.jpg";
				$link = "index.php?conteudo=perfil&id=".$data['id'];
				$nome = '<strong>'.$data['nome']." ".$data['sobrenome'].'</strong>';
				$img = '<img src="'.$url.'">';
				$html.= '<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 amigo-area m1"><a href="'.$link.'">'.$img.' '.$nome.'</a></div>';
			}
		}
		
		else{
			$html.= '<p class="no-friend">você ainda não adicionou nenhum amigo</p>';
		}
		return $html;
		  
	}
	
	function listAmigosBy($query){
		$bd = new BD();
        $html='';
		$res = $bd->buscaramigosBy($query);
		if(count($res) >= 1){
			foreach($res as $data){
				$url = "./documentos-usuarios/".$data['email']."/img/perfil/fotodoperfil.jpg";
				$link = "index.php?conteudo=perfil&id=".$data['id'];
				$nome = '<strong>'.$data['nome']." ".$data['sobrenome'].'</strong>';
				$img = '<img src="'.$url.'" width="100px" class="img-avatar">'; 

				$html.= '<tr>
							<td width="100px">
								<a href="'.$link.'">'.$img.'</a>
							</td>
							<td>
								<a href="'.$link.'">'.$nome.'</a>
								<p class="no-margin"></p>
								<p class="no-margin">Estados Unidos</p>

								<div class="menu-middle"> </div>
								<div class="menu-middle"> </div>
							</td> 
						</tr>';
			}
		}
		else{
			$html.= '<p class="no-friend">nenhum amigo encontrado</p>';
		}
		return $html;
		  
	}
					

  function countAmigos($email){
	$bd = new BD();
	$html='';
	$res = $bd->buscaramigos($email);
	return count($res);
  }

?>