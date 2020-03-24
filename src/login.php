<?php

// get request
// header("location: /index.php?name="  . "&id=" . $id);

$url = 'http://localhost/LocalRegularityDocumentsDatabase-/src/index.php?name=Me';

// what post fields?
$fields = array(
   'id' => 23,
   'name' => "Ivan Ivanov",
);

// build the urlencoded data
$postvars = http_build_query($fields);

// open connection
$ch = curl_init();

// set the url, number of POST vars, POST data
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, count($fields));
curl_setopt($ch, CURLOPT_POSTFIELDS, $postvars);

// execute post
$result = curl_exec($ch);

// close connection
curl_close($ch);
?>