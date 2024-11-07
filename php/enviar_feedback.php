<?php
// Incluir a conexão com o banco de dados
include('db.php');

// Verifica se os dados do formulário foram enviados
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $comentario = $_POST['comentario'];

    // SQL para inserir os dados no banco de dados
    $sql = "INSERT INTO feedback (nome, email, comentario) VALUES ('$nome', '$email', '$comentario')";

    // Executa a consulta
    if ($conn->query($sql) === TRUE) {
        echo "Feedback enviado com sucesso!";
    } else {
        echo "Erro: " . $sql . "<br>" . $conn->error;
    }

    // Fecha a conexão com o banco de dados
    $conn->close();
}
?>
