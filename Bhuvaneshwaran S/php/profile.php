<?php
require 'vendor/autoload.php';

// connect to MongoDB
$mongoClient = new MongoDB\Client("mongodb://localhost:27017");

// select the database
$database = $mongoClient->Details;

// get the form data
$dob = $_POST['dob'];
$age = $_POST['age'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$address=$_POST['address'];

// check if required fields are empty
if (empty($dob) || empty($age) || empty($email) || empty($phone) || empty($address)) {
    echo "Error: One or more required fields are empty.";
} else {
    // create a new document
    $document = [
        'dob' => $dob,
        'age' => $age,
        'email' => $email,
        'phone' => $phone,
        'address' => $address
    ];

    // insert the document into the collection
    $collection = $database->details;
    $result = $collection->insertOne($document);

    // check if the insertion was successful
    if ($result->getInsertedCount() > 0) {
        echo "Data inserted successfully!";
    } else {
        echo "Error inserting data!";
    }
}
?>
