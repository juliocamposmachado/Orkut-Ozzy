<?php        
    require_once("./model/postagem.php");
    
    if(isset($_POST['acao'])){
        switch($_POST['acao']){
            case 'inserir':
                inserir();
                break;
            case 'delete':
                delete();
                break;
        }
    }

    function inserir(){
        $post = new Post();
        $post->setAutor($_POST['id']);
        $post->setConteudo($_POST['conteudo']);
        $post->inserir();
    }

    function delete(){
        $post = new Post();
        $post->setID($_POST['idDelete']);
        $post->delete();
    }

    function listar($autor){
        $post = new Post();
        $html='';
        if($res = $post->listAll($autor)){
            foreach($res as $data){
                if($autor == $_SESSION['id'] ){
                    $html.='<form action="?conteudo=perfil&conteudoPerfil=postagem&id='.$_SESSION['id'].'" method="POST">
                            <input type="hidden" name="idDelete" value="'.$data['id'].'">
                            <input type="hidden" name="acao" value="delete">
                            <input type="submit" value="Delete">
                      </form><br/>';
                }
                $html.="<p>".$data['conteudo']."</p>";
                $html.="<p>".$data['data']."</p><hr/>";

            }
            return $html; 
        }
        return "Nenhuma Postagem no momento";
    }
    function form($id){
        echo '<form action="?conteudo=perfil&conteudoPerfil=postagem&id='.$_SESSION['id'].'" method="POST">
            Postagem:<br/> 
            <input type="hidden" name="id" value="'.$id.'">
            <input type="hidden" name="acao" value="inserir">
            <textarea rows="10" cols="30" name="conteudo"></textarea><br/>
            <input type="submit" value="Enviar">
        </form><hr/>';
    }

?>