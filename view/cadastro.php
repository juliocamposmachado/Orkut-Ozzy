<!DOCTYPE html>
<html lang="pt-BR"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="img/logo-footer.png">
    <title>Yorgut - Cadastro</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
<link href="./view/css/estilo.css" rel="stylesheet">
    </head>

    <body class="register">
        <div class="container">
            <div class="row">
                <div class="col-md-12 no-padding col-register">
                    <div class="panel panel-default panel-home">
                        <div class="panel-body pd-lr-15 pd-tb-10">
                            <h3 class="no-margin auth-title">Bem-vindo(a) ao Yorgut!</h3>
                            <p class="no-margin auth-subtitle">Forceça suas informações antes de você começar a usar o yorgut:</p>
                            <div class="row no-margin">
                                <form action="../controler/inserir.php" method="post">
                                    <div class="hidden-xs hidden-sm">
                                        <div class="table-responsive">
                                            <table class="table table-register no-margin">
                                                <tbody>
                                                    <tr>
                                                        <td class="text-right">Email:</td>
                                                        <td class="normal">
                                                            <input type="email" name="email" id="email" required="required" placeholder="email">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-right">Senha:</td>
                                                        <td class="normal">
                                                            <input type="password" name="senha" id="senha" required="required" placeholder="password">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-right">Data de Nascimento:</td>
                                                        <td class="normal">
                                                            <input type="date" name="nascimento" id="data" required="required">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-right">Nome:</td>
                                                        <td class="normal">
                                                            <label for="nome">Primeiro nome:</label>
                                                                <input type="text" name="nome" id="nome" required="required">
                                                            <label for="sobrenome">Sobrenome:</label>
                                                                <input type="text" name="sobrenome" id="sobrenome" required="required">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-right">Sexo:</td>
                                                        <td class="normal">
                                                            <label>
                                                                <input type="radio" name="sexo" value="Feminino">
                                                                Feminino
                                                            </label>
                                                            <label>
                                                                <input type="radio" name="sexo" value="Masculino">
                                                                Masculino
                                                            </label>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <button type="submit" class="btn-orkut-2 no-margin">Cadastrar</button>
                                    </div>
                                </form>
                                <form action="../controler/inserir.php" method="post">
                                    <div class="hidden-lg hidden-md visible-sm visible-xs cadastro-xs">
                                        <div class="cadastro-margin">
                                            <div class="form-group">
                                                <input type="email" class="form-control" placeholder="Email" name="email" id="email" required="required">
                                            </div>
                                        </div>
                                        <div class="cadastro-margin">
                                            <div class="form-group">
                                                <input type="password" name="senha" id="senha" placeholder="Senha" class="form-control" required="required">
                                            </div>
                                        </div>
                                        <div class="cadastro-margin">
                                            <div class="form-group">
                                                <div class="row no-margin">
                                                    <div class="col-xs-4 no-padding">
                                                        <input type="date" name="nascimento" id="data" required="required">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cadastro-margin">
                                            <div class="form-group">
                                                <div class="row no-margin">
                                                    <div class="col-xs-6 no-padding">
                                                        <input type="text" name="nome" id="nome" class="form-control" placeholder="Primeiro nome" required="required">
                                                    </div>
                                                    <div class="col-xs-6 no-padding">
                                                        <input type="text" name="sobrenome" class="form-control no-border-l" placeholder="Sobrenome" id="sobrenome" required="required">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cadastro-margin">
                                            <div class="form-group">
                                                <select name="sexo" id="sexo" class="form-control">
                                                    <option disabled="" selected="" value="">Sexo</option>
                                                    <option value="Feminino">Feminino</option>
                                                    <option value="Masculino">Masculino</option>
                                                </select>
                                            </div>
                                        </div>
                                            <button type="submit" class="btn-100">Cadastrar</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </body>
</html>