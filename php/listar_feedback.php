<?php
include('db.php');

$sql = "SELECT id, name, email, feedback, created_at FROM faq_feedback";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"]. " - Nome: " . $row["name"]. " - E-mail: " . $row["email"]. " - Feedback: " . $row["feedback"]. "<br>";
    }
} else {
    echo "Nenhum feedback encontrado.";
}

$conn->close();
?>
