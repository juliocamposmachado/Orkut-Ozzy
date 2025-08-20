<?php 
    require_once($_SERVER['DOCUMENT_ROOT'].'/rede_social/controler/amizade.php');
    $query = "";
    if(isset($_POST['q'])){
        $query = $_POST['q'];
    }
?>

<div class="editar-perfil">
    <div class="tab-content">
        <div role="tabpanel" class="tab-pane active pd-10" id="usuario">
            <table class="table">
                <tbody>
                    <?php  echo listAmigosBY($query); ?>
                </tbody>
            </table>
        </div>
    </div>
</div>