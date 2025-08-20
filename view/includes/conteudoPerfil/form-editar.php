<?php 
	$res = $bd->buscarUsuario($id);	
	$usuario = $res[0];

	if($_SERVER["REQUEST_METHOD"] === "POST") {
		$dir = "documentos-usuarios/".$usuario['email']."/img/".$_POST['pasta'];
		$file = $_FILES["fileUpload"];
		$tipo = $_POST['pasta'];////o tipo e usado caso for foto de perfil a foto terá o nome fotodeperfil.jpg 
		$urd->upload($dir, $file, $tipo);//caso tipo for galeria o nome da imagem ficara o original.
		
	}
	
?>
		<hr/>
		<h4>Adicionar Foto</h4>
		<hr/>
		<form method="POST" action="index.php?conteudo=perfil&conteudoPerfil=form-editar&id=<?echo $_GET["id"]?>" enctype="multipart/form-data">
			<div class=>
				<div class="table-responsive">
					<table class="table table-register no-margin">
						<tbody>
							<tr>
								<td class="text-right">Foto:</td>
								<td class="normal">
								<input type="file" name="fileUpload"><br/>
								</td>
							</tr>	
							<tr>
								<td class="text-right">Tipo:</td>
								<td class="normal">
									<label>
									<input type="radio" name="pasta" value="perfil">
										Perfil:
									</label>
									<label>
										<input type="radio" name="pasta" value="galeria" checked="yes">
										Galeria:
									</label>
								</td>
							</tr> 
						</tbody>
					</table>
				</div>
				<button type="submit">Enviar</button>
			</div>
		</form>
		<hr/>
		<h4>Editar Informacoes</h4>
		<hr/>
		<div class="row no-margin">
			<form action="./controler/editar.php" method="POST">
				<input type="hidden" name="id" value="<?php echo $_GET["id"]?>"/>
				<input type="hidden" name="nomePasta" value="<?php echo $usuario['email']?>"/>
				<div class="">
					<div class="table-responsive">
						<table class="table table-register no-margin">
							<tbody>
								<tr>
									<td class="text-right">Email:</td>
									<td class="normal">
										<input type="email" name="email" id="email" required="required" value="<?php echo $usuario['email']?>">
									</td>
								</tr>
								<tr>
								<td class="text-right">Senha:</td>
								<td class="normal">
									<input type="password" name="senha" id="senha" required="required" value="<?php echo $usuario['senha']?>">
								</td>
								</tr>
								<tr>
									<td class="text-right">Data de Nascimento:</td>
									<td class="normal">
										<input type="date" name="nascimento" id="data" required="required" value="<?php echo $usuario['nascimento']?>">
									</td>
								</tr>
								<tr>
									<td class="text-right">Nome:</td>
									<td class="normal">
										<label for="nome">Primeiro nome:</label>
											<p><input type="text" name="nome" id="nome" required="required" value="<?php echo $usuario['nome']?>"></p>
										<label for="sobrenome">Sobrenome:</label>
											<p><input type="text" name="sobrenome" id="sobrenome" required="required" value="<?php echo $usuario['sobrenome']?>"></p>
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
				</div>
		   		<button type="submit">Salvar</button>
			</form>
			<!--<a href="./DAO/excluir.php?email=<?php //echo $usuario['email'].'&nome='.$usuario['nome']?>">Excluir o perfil</a> <br><br>-->
		</div>  
