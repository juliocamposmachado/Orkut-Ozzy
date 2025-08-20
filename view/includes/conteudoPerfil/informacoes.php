<ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active">
        <a href="" aria-controls="social" role="tab" data-toggle="tab">social</a>
    </li>
</ul>
<div class="tab-content">
    <div role="tabpanel" class="tab-pane active pd-10" id="social">
        <div class="table-responsive">
            <table class="table table-perfil no-margin">
                <tbody>
                    <tr>
                        <td class="text-right">Nome:</td>
                        <!-- pegar o nome !-->  <td><?php echo $usuario['nome']?></td>
                    </tr>
                    <tr>
                        <td class="text-right">Sobrenome:</td>
                        <!-- pegar o sobrenome !--> <td><?php echo $usuario['sobrenome']?></td>
                    </tr>
                    <tr>
                        <td class="text-right">Email:</td>
                        <!-- pegar o email !--> <td><?php echo $usuario['email']?></td>
                    </tr>
                    <tr>
                        <td class="text-right">Data de Nascimento:</td>
                        <!-- pegar data de nascimento do usuário !-->   <td><?php echo $usuario['cadastro']?></td>
                    </tr>
                        <!-- Colocar aqui a sessão se é masculino e feminino e o botão para clicar na opção desejada !-->
                    <tr>
                        <td class="text-right">Relacionamento:</td>
                        <td>solteiro(a)</td>
                    </tr>
                    <tr>
                        <td class="text-right">país:</td>
                        <td>Brasil</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>