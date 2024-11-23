<?php
include('db.php');

// Defina o tipo de conteúdo como JSON
header('Content-Type: application/json');

// Query para pegar os relatórios
$sql = "SELECT titulo, conteudo, data_publicacao, link FROM relatorios ORDER BY data_publicacao DESC";
$result = $conn->query($sql);

// Verifica se ocorreu um erro na consulta
if (!$result) {
    // Retorna um erro em formato JSON
    echo json_encode(['error' => 'Erro na consulta: ' . $conn->error]);
    exit();  // Encerra o script após retornar o erro
}

$relatorios = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $relatorios[] = [
            'titulo' => $row['titulo'],
            'conteudo' => $row['conteudo'],
            'data_publicacao' => $row['data_publicacao'],
            'link' => $row['link']
        ];
    }
} else {
    // Se não houver relatórios
    echo json_encode(['message' => 'Nenhum relatório encontrado']);
    exit();
}

// Codifica os dados em JSON e envia de volta
echo json_encode($relatorios);
$conn->close();
?>
