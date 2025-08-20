<?php
// CRD CREATE RENAME DELETE *Pastas* com fotos dos usuarios
class CRD{

    public function __construct() {
        if (!is_dir("../documentos-usuarios")){
            mkdir("../documentos-usuarios");
        }
    }
    
    public function create($name){
        if (!is_dir($name)){
            mkdir("../documentos-usuarios/".$name);
            mkdir("../documentos-usuarios/".$name.'/img');
            mkdir("../documentos-usuarios/".$name.'/img/perfil');
            mkdir("../documentos-usuarios/".$name.'/img/galeria');
        }
    }
    public function rename($pasta_antigo, $pasta_nova){
        rename("../documentos-usuarios/".$pasta_antigo, "../documentos-usuarios/".$pasta_nova);
    }
    public function delete($name){
        echo $name;
        rmdir("../documentos-usuarios/".$name);
    }
    public function log($txt){
        $file=fopen("../log.txt","a+");
        fwrite($file,$txt);
        fclose($file);
    }
}

?>