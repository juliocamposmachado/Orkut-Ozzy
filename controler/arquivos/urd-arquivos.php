<?php
// URD UPLOAD READ DELETE *Arquivos*
class URD{

    public function __construct() {
        
    }
    
    public function upload($dir, $file, $tipo){

        $nomeImg = "fotodoperfil.jpg";
        if($tipo == 'galeria'){
            $nomeImg = $file["name"];
        }
		if($file["error"]) {
			echo "<h1>Ocorrer um erro: " . $file["error"] . "</h1>";
		}
		if(!is_dir($dir)) {
			mkdir($dir);
		}

		if(move_uploaded_file($file["tmp_name"], $dir . DIRECTORY_SEPARATOR . $nomeImg)) {
			echo "<h1>Upload realizado com sucesso!</h1>";
		}
		else {
			echo "<h1>Não foi possível realizar o upload!</h1>";
		}

    }
    public function read($dir){
        $list = "";
        if (is_dir($dir)){
            $images= scandir($dir);
            foreach ($images as $img){
                if(!in_array($img,array(".","..") )){
                    $filename=$dir.DIRECTORY_SEPARATOR.$img;  
                    $list .= '<img class="fotos" src="'.$filename.'">';
                }
            }  
        }  
        return $list;
    }
  //  public function delete($dir){
   //     rmdir("../documentos/".$dir);
    //}
}

?>