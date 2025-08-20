<?php 
    
   
    require_once($_SERVER['DOCUMENT_ROOT'].'/rede_social/model/SQL.php'); /// foi preciso pasar o diretorio completo 

	class Post{
        
        private $id;
        private $autor;
        private $conteudo;
        private $data;

        
        function getId(){
            return $this->id;
        }
        function setId($id){
            $this->id = $id;
        }
        function getAutor(){
            return $this->autor;
        }
        function setAutor($autor){
            $this->autor = $autor;
        }
        function getConteudo(){
            return $this->conteudo;
        }
        function setConteudo($conteudo){
            $this->conteudo = $conteudo;
        }
        function getData(){
            return $this->data;
        }
        function setData($data){
            $this->data = $data;
        }
        
        function inserir(){
            $bd = new BD();  
            if($bd->inserirPostagem($this->autor,$this->conteudo)){
                return true;
            }
            return false;
        }
        function delete(){
            $bd = new BD();
            $bd->excluirPostagem($this->id);
        }

        function listAll($autor){
            $bd = new BD();
            if($res = $bd->buscarpostagens($autor)){
               return $res; 
            }
            return false;
        }
    }
?>