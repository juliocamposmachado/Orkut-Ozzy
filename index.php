<?php 
	require_once("./model/SQL.php");
	require_once("./controler/arquivos/urd-arquivos.php");

	$bd = new Bd();
	$urd = new URD();
	$links = '';
	$id = '';
	$user="";
	$conteudo = 'perfil';
	$conteudoPerfil = 'informacoes';
	$notificacoes = "";

	if (!isset($_SESSION)) {//Verificar se a sessão não já está aberta.
        session_start();
	}

	if(isset($_GET['sair']) && $_GET['sair'] =='true'){
		session_destroy();
		header("Location: ./view/login.php");
	}

	if(!isset($_SESSION['email'])){
		header("Location: ./view/login.php");
	}
	
	if(isset($_GET['conteudo'])) {
		$conteudo = $_GET["conteudo"];
	}
	if(isset($_GET['conteudoPerfil'])){
		$conteudoPerfil = $_GET['conteudoPerfil'];
	}
	$logado = true;
	$user = $_SESSION['email']; 
	$id = $_SESSION['id'];
	$notificacoes = require_once('./view/includes/notificacoes.php');
;

	if(isset($_GET['id'])) {$id = $_GET["id"];}



	//o conteudo é separado em varios componetes que são chamados dinamicamente ex: cadastro, editar, listar.
	//ao invez de criar varias paginas com o mesmo menu os coponentes são inportados no index.
	// a forma que foi usada pra controlar qual conteudo vai ser carregado foi por meio do GET
	//ex: se na url tiver home vai ser importado o componente home...  

?>
<!DOCTYPE html>
<html lang="pt-BR"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">

<meta name="description" content="">
<meta name="author" content="">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<title>Yorgut - Perfil</title>
<link href="./view/css/bootstrap.min.css" rel="stylesheet">
<link href="./view/css/estilo.css" rel="stylesheet">

<nav class="navbar navbar-fixed-top">
	<div class="container">
		<div class="navbar-header">

			<!-- botão do menu responsivo !-->
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>

			<!-- Alterar onde fica a logo !-->
			<a class="navbar-brand no-padding" href="index.php">
				<div class="logo"><img src="view/img/logo-footer.png" alt="Logo Yorgut"></div>
			</a>
		</div>

		<!-- Informações completas escritas do navbar !-->
		<div id="navbar" class="collapse navbar-collapse" style="min-height: 32px;">
			<ul class="nav navbar-nav">
				<!-- Colocar index ou colocar o link da pagina principal !-->
				<li><a href="index.php">Início</a></li>
				<li><a href="?conteudo=perfil&conteudoPerfil=informacoes&id=<?php echo $_SESSION['id']?>">Perfil</a></li>
				<li><a href="./index.php?id=<?php echo $_SESSION['id']?>&conteudo=perfil&conteudoPerfil=form-editar">Editar</a></li>
				<li><a href="?conteudo=perfil&conteudoPerfil=postagem&id=<?php echo $_SESSION['id']?>">Postagens</a></li>
				<li><a href="?conteudo=perfil&conteudoPerfil=galeria&id=<?php echo $_SESSION['id']?>">Galeria</a></li>
			</ul>
			<!-- Informações que fecham a navbar !-->

			<ul class="nav navbar-nav navbar-right">
				<li class="menu-email hidden-xs hidden-sm">
					<!-- Colocar email do usuario que estará logado !-->
					<?php echo $user;?>
				</li>
				 
				<!-- Colocar href para a tela de login !-->
				<li><a href="?sair=true">Sair</a></li>
				
				<li class="no-padding menu-form">
				<!-- Aqui pesquisar sobre o usuário !-->
					<form method="POST" action="index.php?conteudo=todosAmigos" class="navbar-form navbar-right no-margin no-padding">
						<div class="forms">
							<div class="input-group">
								<input type="text" class="form-control" name="q" placeholder="pesquisa usuários">
								<span class="input-group-btn">
									<button class="btn btn-default" type="submit"><i class="fa fa-search"></i></button>
								</span>
							</div>
						</div>
					</form>
				</li>
				<li class="menu-email">
					<?php echo $notificacoes;?>
				</li>
			</ul>
		</div>
	</div> <!-- container e divs / alterar caminhos !-->
</nav>
	<div class="container">
		<div class="row">
			<!--aqui sera carregado o conteudo dinamico da pagina-->
			<?php require_once('./view/includes/'.$conteudo.'.php');?>
			<div class="clear"></div>
		</div>
	</div>
	<footer>
	  <div class="container">
		  <div class="row no-margin m-t-3">
			<a href="#" class="logo-footer"><img src="view/img/logo-footer.png" alt="Logo Yorgut"></a>
			<a href="https://www.facebook.com/alysson.jr.depaula" class="hidden-xs">Alysson</a>
			<a href="https://www.facebook.com/bruno.alberti.355" class="hidden-xs">Bruno</a>
			<a href="https://www.facebook.com/Jean.626" class="hidden-xs">Jean</a>
			<a href="https://www.facebook.com/Cilin.Landim" class="hidden-xs">Octacílio</a>
		  </div>
		</div>
	 </footer>

	 <script src="./view/js/jquery.js"></script> 
	<script src="./view/js/script.js"></script>
	<script src="./view/js/bootstrap.min.js"></script>
   </body>
</html>