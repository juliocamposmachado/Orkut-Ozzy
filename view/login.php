<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="img/logo-footer.png	">
        <title>Yorgut - Entrar</title>
        <link href="css/bootstrap.min.css" rel="stylesheet">
<link href="./view/css/estilo.css" rel="stylesheet">
    </head>
    <body class="login">
        <div class="container">
            <p>
            <div class="row">
                <div class="col-md-8 login-desc">
                    <img src="img/yorgut-logo.png" class="center-block img-responsive">
                    <div class="hidden-xs hidden-sm">
                        <p><span>Conecta-se</span> aos seus amigos e familiares usando postagens e suas galerias</p>
                        <p><span>Conheça</span>  novas pessoas através de amigos de seus amigos</p>
                        <p><span>Compartilhe</span> suas fotos e paixôes em um só lugar</p>
                    </div>
                </div>


                <div class="col-md-4 login-box">
                    <div class="panel panel-default panel-login">
                        <div class="panel-body">
                            <p class="text-center auth-subtitle">Acesse o <b>Yorgut</b> com a sua conta</p>
                            <form action="../controler/login.php" method="POST" class="form-horizontal">
                                <div class="hidden-sm hidden-xs">
                                    <div class="form-group no-margin">
                                        <label for="email" class="col-sm-2 control-label no-padding " >E-mail:</label>
                                        <div class="col-sm-10 no-padding pd-l-5 " >
                                            <input type="email" class="" name="email" id="email" required="required" placeholder="E-mail">
                                        </div>
                                    </div>
                                    <div class="form-group no-margin mt-5">
                                        <label for="senha" class="col-sm-2 control-label no-padding">Senha:</label>
                                        <div class="col-sm-10 no-padding pd-l-5">
                                            <input type="password" class="" name="senha" id="senha" required="required" placeholder="Password">
                                        </div>
                                    </div>
                                    <div class="form-group no-margin mt-5">
                                        <div class="col-sm-offset-2 col-sm-10 no-padding pd-l-5">
                                            <button type="submit" class="">Login</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <form action="../controler/login.php" method="POST" class="form-horizontal"> 
                            <div class="hidden-md hidden-lg visible-xs visible-sm login-xs">
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="E-mail" name="email" id="email" required="required">
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="Senha" name="senha" id="senha" required="required">
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-default form-control">Login</button>
                                </div>
                            </div>
                        </form>
                        </div>
                        <div class="panel panel-default panel-login">
                            <div class="panel-body">
                                <p class="text-center auth-subtitle">Ainda não é membro? Cadastre-se</p>
								<p class="text-center">
									<a href="./cadastro.php"><b>Cadastrar</b></a>
								</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row footer">
                    Trabalho terceira etapa na matéria de programação para internet - <b>Alysson</b> - <b>Bruno</b> - <b>Jean</b> - <b>Octacílio</b>
                </div>
        </div>
    </body>
</html>