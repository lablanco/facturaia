<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to_email = "lb43386@gmail.com"; // Reemplaza con tu dirección de correo
    $subject = "Nuevo archivo cargado desde el sitio web";

    // Comprueba si se ha subido un archivo
    if (isset($_FILES["archivo"]) && $_FILES["archivo"]["error"] == UPLOAD_ERR_OK) {
        $file_name = $_FILES["archivo"]["name"];
        $file_temp = $_FILES["archivo"]["tmp_name"];

        // Directorio de destino para guardar el archivo
        $upload_dir = "uploads/";
        if (!file_exists($upload_dir)) {
            mkdir($upload_dir, 0777, true);
        }

        $upload_path = $upload_dir . $file_name;

        // Mueve el archivo cargado al directorio de destino
        move_uploaded_file($file_temp, $upload_path);

        // Contenido del correo
        $message = "Se ha cargado un nuevo archivo desde el sitio web. Nombre del archivo: $file_name";

        // Envía el correo electrónico con el archivo adjunto
        $headers = "From: tu_correo@example.com\r\n";
        $headers .= "Reply-To: tu_correo@example.com\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        mail($to_email, $subject, $message, $headers);

        // Mensaje de éxito
        echo "El archivo se ha cargado correctamente y se ha enviado por correo electrónico.";
    } else {
        // Mensaje de error si no se cargó ningún archivo
        echo "Error: No se ha cargado ningún archivo.";
    }
}
?>
