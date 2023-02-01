<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET,POST");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


    $servidor = "localhost"; $usuario = "root"; $contrasenia = ""; $nombreBaseDatos = "estudiantes";
    $conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);


    if (isset($_GET["consultar"])){
        $sqlEstudiaantes = mysqli_query($conexionBD,"SELECT * FROM estudiantes WHERE id=".$_GET["consultar"]);
        if(mysqli_num_rows($sqlEstudiaantes) > 0){
            $estudiaantes = mysqli_fetch_all($sqlEstudiaantes,MYSQLI_ASSOC);
            echo json_encode($estudiaantes);
            exit();
        }
        else{  echo json_encode(["success"=>0]); }
    }
    //borrar
    if (isset($_GET["borrar"])){
        $sqlEstudiaantes = mysqli_query($conexionBD,"DELETE FROM estudiantes WHERE id=".$_GET["borrar"]);
        if($sqlEstudiaantes){
            echo json_encode(["success"=>1]);
            exit();
        }
        else{  echo json_encode(["success"=>0]); }
    }
    // Inserta
    if(isset($_GET["insertar"])){
        $data = json_decode(file_get_contents("php://input"));
        $matricula=$data->matricula;
        $nombre=$data->nombre;
        $fecha=$data->fecha;
        $motivo=$data->motivo;
        $valido=$data->valido;
        $comentario=$data->comentario;
            if(($matricula!="")&&($nombre!="")&&($fecha!="")&&($motivo!="")&&($valido!="")&&($comentario!="")){
                
                $sqlEmpleaados = mysqli_query($conexionBD,"INSERT INTO estudiantes(matricula,nombre,fecha,motivo,valido,comentario) VALUES('$matricula','$nombre','$fecha','$motivo','$valido','$comentario')");
                echo json_encode(["success"=>1]);
            }
        exit();
    }
    //Actualiza
    if(isset($_GET["actualizar"])){
        
        $data = json_decode(file_get_contents("php://input"));

        $id=(isset($data->id))?$data->id:$_GET["actualizar"];
        $matricula=$data->matricula;
        $nombre=$data->nombre;
        $fecha=$data->fecha;
        $motivo=$data->motivo;
        $valido=$data->valido;
        $comentario=$data->comentario;
        
        $sqlEstudiaantes = mysqli_query($conexionBD,"UPDATE estudiantes SET matricula = '$matricula',nombre='$nombre',fecha = '$fecha',motivo = '$motivo',valido = '$valido',comentario = '$comentario' WHERE id='$id'");
        echo json_encode(["success"=>1]);
        exit();
    }
    // Consulta
        $sqEstudiaantes = mysqli_query($conexionBD,"SELECT * FROM estudiantes ");
    if(mysqli_num_rows($sqlEstudiaantes) > 0){
        $estudiaantes = mysqli_fetch_all($sqlEstudiaantes,MYSQLI_ASSOC);
        echo json_encode($estudiaantes);
    }
    else{ echo json_encode([["success"=>0]]); }


?>
