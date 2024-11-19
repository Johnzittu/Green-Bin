<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Dados de conexão com o banco de dados
$servername = "localhost";
$username = "root";  // No XAMPP, o usuário padrão é "root"
$password = "";      // A senha padrão para root no XAMPP é vazia
$dbname = "green_bin";  // Nome do banco de dados

// Conectando ao banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Checando a conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}
?>
