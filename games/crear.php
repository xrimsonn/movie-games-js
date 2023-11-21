<?php
$baseURL = "https://api.themoviedb.org/3";
$apiKey = "097f81eb95a65002b311aec88399d0b1";
$endpoint = "/movie/popular";
$totalPages = 42;

$allMovies = [];

for ($page = 1; $page <= $totalPages; $page++) {
    $url = "$baseURL$endpoint?api_key=$apiKey&page=$page";
    $response = file_get_contents($url);
    $data = json_decode($response, true);

    if (isset($data['results'])) {
        $allMovies = array_merge($allMovies, $data['results']);
    }
}

// Convertir el array en una cadena JSON
$jsonData = json_encode($allMovies);

// Guardar el JSON en un archivo en la carpeta actual
file_put_contents('peliculas.json', $jsonData);

echo 'Datos guardados como peliculas.json en la carpeta actual.';
?>