<?php 
    
   
    require_once($_SERVER['DOCUMENT_ROOT'].'/rede_social/model/SQL.php'); /// foi preciso pasar o diretorio completo 
    require_once($_SERVER['DOCUMENT_ROOT'].'/rede_social/controler/arquivos/crd-pasta.php');
	class Usuario{
        
        private $id;
        private $nome;
        private $sobrenome;
        private $email;
        private $senha;
        private $nascimento;
        private $sexo;
        private $cadastro;

        public function __construct(){

           
            
        }
        
        function getId(){
            return $this->id;
        }
        function setId($id){
            $this->id = $id;
        }
        function getNome(){
            return $this->nome;
        }
        function setNome($nome){
            $this->nome = $nome;
        }
        function getSobrenome(){
            return $this->sobrenome;
        }
        function setSobrenome($sobrenome){
            $this->sobrenome = $sobrenome;
        }
        function getEmail(){
            return $this->email;
        }
        function setEmail($email){
            $this->email = $email;
        }
        function getSenha(){
            return $this->senha;
        }
        function setSenha($senha){
            $this->senha = $senha;
        }
        function getNascimento(){
            return $this->nascimento;
        }
        function setNascimento($nascimento){
            $this->nascimento = $nascimento;
        }
        function getSexo(){
            return $this->sexo;
        }
        function setSexo($sexo){
            $this->sexo = $sexo;
        }
        function getCadastro(){
            return $this->cadastro;
        }
        
        function inserir(){
            $bd = new BD();
            $crd = new CRD();
            if($bd->inserirUsuario($this->nome,$this->sobrenome,$this->email,$this->senha,$this->nascimento,$this->sexo)){
		
                //cria uma pasta com o nome recebendo o email do usuario na pasta documentos
                $crd->create($this->email); 
                //add um log no arquivo txt
                $crd->log('O usuario email '.$this->email.', com nome '.$this->nome.' foi cadastrado em '.date("Y-m-d H:i:s")."\r\n");
                return true;
            }
            return false;
                
        }
        function edit($antigaPasta){
            $bd = new BD();
            $crd = new CRD();

            $novaPasta = $this->email; 

            if($bd->editarUsuario($this->id, $this->nome,$this->sobrenome,$this->email,$this->senha,$this->nascimento,$this->sexo)){
                $crd->rename($antigaPasta, $novaPasta);
                
                $crd->log('O usuario email '.$this->email.', com nome '.$this->nome.' foi alterado em '.date("Y-m-d H:i:s")."\r\n");
                return true;
            }
            return false;
        }

        function delete(){
            $bd = new BD();
            $crd = new CRD();

            $nomePasta = $this->email;


            if($bd->excluirUsuario($this->email)){
                $crd->delete($nomePasta);
                
                $crd->log('O usuario email '.$this->email.', foi deletado em '.date("Y-m-d H:i:s")."\r\n");

            }
        }
        function listAll(){
            $bd = new BD();

            if($res = $bd->buscarUsuarios()){
               return $res; 
            }
            return false;
        }
    }
?>