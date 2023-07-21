<?php
// Establish a database connection

$serveur = "localhost";
$user = "root";
$password = "";
$database = "senmoney";
$conn = new mysqli($serveur, $user, $password, $database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch the numbers from the database
$sql = "SELECT number FROM comptes";
$result = $conn->query($sql);

// Prepare an array to store the numbers
//$numbers = [];

// Extract the numbers from the result set
if ($result->num_rows > 0) {
    echo '<select numero="dropdown">';
    while ($row = $result->fetch_assoc()) {
        $id = $row['id'];
        $numero = $row['numero'];
        echo '<option value="' . $id . '">' . $numero . '</option>';
    }
    echo '</select>';
} else {
    echo "No data available.";
}
    

// Close the database connection
$conn->close();

// Encode the numbers array in JSON format
$jsonData = json_encode($numbers);

// Send the JSON response
header('Content-Type: application/json');
echo $jsonData;
?>
