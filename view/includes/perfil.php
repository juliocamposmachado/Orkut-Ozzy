
<?php 
    //busca os os dados no banco para preecher os dados
	$res = $bd->buscarUsuario($id);
    $usuario = $res[0];
    require_once($_SERVER['DOCUMENT_ROOT'].'/rede_social/controler/amizade.php');    
?>

<div class="col-sm-12 col-md-3 col-lg-3">
    <div class="panel panel-default panel-home">
        <div class="panel-body">
            <a href="#"><img src="documentos-usuarios/<?php echo $usuario['email'];?>/img/perfil/fotodoperfil.jpg" class="img-responsive center-block img-perfil"></a>
        <div class="m-separator"></div>
        <p class="nome pd-5 no-margin no-padding-top">
            <a href="#"><?php echo $usuario['nome']." ".$usuario['sobrenome']?> </a>
        </p>

        <!-- Quando a tela estiver responsiva, algumas informações ficam abaio do nome, menores e em cinza !-->
        <div class="hidden-xs">
            <p class="status pd-lr-5 no-margin"><?php echo $usuario['sexo']?></p>
            <p class="status pd-lr-5 no-margin">solteiro(a)</p> <p class="status pd-lr-5 no-margin">Brasil</p> 
        </div>
        <div class="visible-xs">
            <p class="status pd-lr-5 no-margin">
            <?php echo $usuario['sexo']?>,
            solteiro(a) Brasil </p>
        </div>
        <!-- opções de editar, perfil, galeria etc... !-->
        <div class="m-separator"></div> <!-- linha que separa com as opções abaixo !-->
            <p class=" pd-lr-5 no-margin"><?php botaoAmizade($usuario['id'], $usuario['email']);?></p>
        <div class="m-separator"></div>
            <div class="hidden-xs">
                <ul class="menu-left no-margin "> <!-- SE tiver tempo, reajustar pro centro !-->
                    <li><a href="?conteudo=perfil&conteudoPerfil=informacoes&id=<?php echo $_GET['id']?>"><i class="perfil"></i> perfil</a></li>
                    <li><a href="?conteudo=perfil&conteudoPerfil=postagem&id=<?php echo $_GET['id']?>"><i class="postagens"></i> postagens</a></li>
                    <li><a href="?conteudo=perfil&conteudoPerfil=galeria&id=<?php echo $_GET['id']?>"><i class="galeria"></i> galeria</a></li>
                </ul>
            </div>
            <div class="visible-xs">
                <table class="table no-border no-margin menu-mb-perfil">
                    <tbody>
                        <tr>
                            <td class="text-center"><a href="?conteudo=perfil&conteudoPerfil=informacoes&id=<?php echo $_GET['id']?>"><div class="perfil"></div> perfil</a></td>
                            <td class="text-center"><a href="?conteudo=perfil&conteudoPerfil=postagem&id=<?php echo $_GET['id']?>"><div class="postagens"></div> postagens</a></td>
                            <td class="text-center"><a href="?conteudo=perfil&conteudoPerfil=galeria&id=<?php echo $_GET['id']?>"><div class="galeria"></div> galeria</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>        
        <div class="m-separator"></div>
    </div>
    </div>
</div>
<div class="col-sm-12 col-md-5 col-lg-5">
    <div class="panel panel-default panel-home">
        <div class="panel-body pd-lr-15 pd-tb-10">
            <h3><?php echo $usuario['nome']." ".$usuario['sobrenome']?></h3>
            <ul class="breadcrumb">
                <li><a href="index.php">Início</a></li>
                <li><?php echo $conteudoPerfil?></li>
            </ul>
            <div class="row">
                <div class="perfil">
                    <?php require_once($_SERVER['DOCUMENT_ROOT'].'/rede_social/view/includes/conteudoPerfil/'.$conteudoPerfil.'.php');?>
                </div>        
            </div>
        </div>
    </div>
</div>
<!-- aqui fecha as informações do usuário !-->

<div class="col-sm-12 col-md-4 col-lg-4 panel panel-default panel-home">
    <div class="panel-body">
        <p class="amigos pd-5 no-margin no-padding-top">meus amigos <a ><?php  echo countAmigos($usuario['email']); ?></a></p>
        <div class="row">
            <?php  echo listAmigos($usuario['email']); ?>
        </div>
        <div class="btn-footer"></div>
</div>










    <!--////////////////////////////////////////////////
    ////////////////////////////////////////////////-->
  