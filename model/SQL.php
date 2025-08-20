<?php 

	class Bd extends PDO {
		private $conn;

		//No construct são 2 underline!!!!
	public function __construct() {
		// Configurações do banco - usa variáveis de ambiente se disponível
		$host = $_ENV['DB_HOST'] ?? 'localhost';
		$dbname = $_ENV['DB_NAME'] ?? 'redesocial';
		$username = $_ENV['DB_USER'] ?? 'root';
		$password = $_ENV['DB_PASS'] ?? '78451200';
		
		// Opções para PlanetScale (SSL)
		$options = [
			PDO::MYSQL_ATTR_SSL_CA => false,
			PDO::MYSQL_ATTR_SSL_VERIFY_SERVER_CERT => false,
		];
		
		$this->conn = new PDO("mysql:host=$host;dbname=$dbname;sslmode=require", $username, $password, $options);
		}

		public function buscarUsuarios() {
			$stmt = $this->conn->prepare("SELECT * FROM usuario");

			$stmt->execute();

			return $stmt->fetchALL(PDO::FETCH_ASSOC);
		}

		public function verificarUsuario($email,$senha){
			$stmt = $this->conn->prepare("SELECT id, email FROM usuario WHERE email=:EMAIL and senha=:SENHA");

			$stmt->bindParam(":EMAIL",$email);
			$stmt->bindParam(":SENHA",$senha);

			$stmt->execute();

			return $stmt->fetchALL(PDO::FETCH_ASSOC);	
		}

		public function inserirUsuario($nome, $sobrenome, $email, $senha, $nascimento, $sexo) {
			$stmt = $this->conn->prepare("INSERT INTO usuario(nome,sobrenome,email,senha,nascimento,sexo,cadastro) VALUES(:NOME, :SOBRENOME, :EMAIL, :SENHA, :NASCIMENTO, :SEXO, NOW())");
			$stmt->bindParam(":NOME",$nome);
			$stmt->bindParam(":SOBRENOME",$sobrenome);
			$stmt->bindParam(":EMAIL",$email);
			$stmt->bindParam(":SENHA",$senha);
			$stmt->bindParam(":NASCIMENTO",$nascimento);
			$stmt->bindParam(":SEXO",$sexo);

			if($stmt->execute()){
				return true;
			}
				return false;
		}

		public function buscarUsuario($id) {
			$stmt = $this->conn->prepare("SELECT * FROM usuario WHERE id=:ID");

			$stmt->bindParam(":ID",$id);

			$stmt->execute();

			return $stmt->fetchALL(PDO::FETCH_ASSOC);	
		}

		public function excluirUsuario($email) {
			$stmt = $this->conn->prepare("DELETE FROM usuario WHERE email=:EMAIL");

			$stmt->bindParam(":EMAIL",$email);

			if($stmt->execute()){
				return true;
			}
				return false;
		}

		public function editarUsuario($id ,$nome, $sobrenome, $email, $senha, $nascimento, $sexo){
			
			$stmt = $this->conn->prepare("UPDATE usuario SET nome = :NOME, sobrenome = :SOBRENOME, senha = :SENHA, nascimento = :NASCIMENTO, email = :EMAIL, sexo = :SEXO  WHERE id = :ID");

			$stmt->bindParam(":ID",$id);
			$stmt->bindParam(":NOME",$nome);
			$stmt->bindParam(":SOBRENOME",$sobrenome);
			$stmt->bindParam(":EMAIL",$email);
			$stmt->bindParam(":SENHA",$senha);
			$stmt->bindParam(":NASCIMENTO",$nascimento);
			$stmt->bindParam(":SEXO",$sexo);

			if($stmt->execute()){
				return true;
			}
				return false;
		}

		/////////////// Tabela Amizade//////////
		public function solicitarAmizade($de, $para) {
			$stmt = $this->conn->prepare("INSERT INTO amizade(de,para) VALUES(:DE, :PARA)");
			$stmt->bindParam(":DE",$de);
			$stmt->bindParam(":PARA",$para);

			if($stmt->execute()){
				return true;
			}
				return false;
		 }

		 public function deletarAmizade($email1, $email2) {
			$stmt = $this->conn->prepare("DELETE FROM amizade WHERE (de = :EMAIL1 and para = :EMAIL2) or (de = :EMAIL2 and para = :EMAIL1)");
			$stmt->bindParam(":EMAIL1",$email1);
			$stmt->bindParam(":EMAIL2",$email2);

			if($stmt->execute()){
				return true;
			}
				return false;
		 }

		 public function aceitarAmizade($de, $para) {
			$stmt = $this->conn->prepare("UPDATE amizade SET status = true WHERE de = :DE and para = :PARA");
			$stmt->bindParam(":DE",$de);
			$stmt->bindParam(":PARA",$para);

			if($stmt->execute()){
				return true;
			}
				return false;
		 }
		 public function solicitacoesDeAmizade($email) {
			$stmt = $this->conn->prepare("SELECT usuario.id, usuario.nome, usuario.email FROM usuario INNER JOIN amizade ON usuario.email = amizade.de WHERE para=:PARA and status = false");
			$stmt->bindParam(":PARA",$email);
			$stmt->execute();
			return $stmt->fetchALL(PDO::FETCH_ASSOC);	
		}

		public function saoAmigos($email1, $email2) {
			$stmt = $this->conn->prepare("SELECT * FROM amizade WHERE (de=:EMAIL1 and para=:EMAIL2) or (de=:EMAIL2 and para=:EMAIL1)");
			$stmt->bindParam(":EMAIL1",$email1);
			$stmt->bindParam(":EMAIL2",$email2);
			$stmt->execute();
			if($res = $stmt->fetchALL(PDO::FETCH_ASSOC)){
				return true;
			}
			return false;
		}

		public function buscaramigos($email) {
			$stmt = $this->conn->prepare("SELECT usuario.id, usuario.nome, usuario.sobrenome, usuario.email FROM usuario INNER JOIN amizade ON usuario.email = amizade.de or usuario.email = amizade.para WHERE (de =:EMAIL  or para=:EMAIL)and usuario.email != :EMAIL and status = true");
			$stmt->bindParam(":EMAIL",$email);
			$stmt->execute();
			
			return $stmt->fetchALL(PDO::FETCH_ASSOC);
		}


		public function buscaramigosBy($query) {
			$stmt = $this->conn->prepare("SELECT * FROM usuario  WHERE nome like :Q or sobrenome like :Q or email like :Q");
			$stmt->bindParam(":Q",$query);
			$stmt->execute();
			
			return $stmt->fetchALL(PDO::FETCH_ASSOC);
		}

		//////////// Postagens //////////
		public function inserirPostagem($autor, $conteudo) {
			$stmt = $this->conn->prepare("INSERT INTO postagem(autor,conteudo,data) VALUES(:AUTOR, :CONTEUDO, NOW())");
			$stmt->bindParam(":AUTOR",$autor);
			$stmt->bindParam(":CONTEUDO",$conteudo);

			if($stmt->execute()){
				return true;
			}
				return false;
		}

		public function buscarPostagens($id) {
			$stmt = $this->conn->prepare("SELECT * FROM postagem WHERE autor=:ID");
			$stmt->bindParam(":ID",$id);
			$stmt->execute();

			return $stmt->fetchALL(PDO::FETCH_ASSOC);
		}

		public function excluirPostagem($id) {
			$stmt = $this->conn->prepare("DELETE FROM postagem WHERE id=:ID");
			$stmt->bindParam(":ID",$id);

			if($stmt->execute()){
				return true;
			}
				return false;
		}

	}

?>
