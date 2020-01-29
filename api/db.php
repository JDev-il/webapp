
<?php

    global $jsonQuery;

    $mysql = require('./connection.php');

    $user = file_get_contents('https://randomuser.me/api/');
    $jsonQuery = json_decode($user);

    $firstname = $jsonQuery->results[0]->name->first;
    $lastname = $jsonQuery->results[0]->name->last;
    $email = $jsonQuery->results[0]->email;
    $streetname = $jsonQuery->results[0]->location->street->name;
    $streetnum = $jsonQuery->results[0]->location->street->number;
    $country = $jsonQuery->results[0]->location->country;
    $city = $jsonQuery->results[0]->location->city;

    $get_query = "SELECT * FROM users";
    if ($result = mysqli_query($conn, $get_query)) {
        if (mysqli_num_rows($result) > 0) {
            if ($row = $result->fetch_row()) {
                $id = $row[0];
                $delete_query = "DELETE FROM users WHERE id = '$id'";
                if($del = mysqli_query($conn, $delete_query)){
                    $insert_query = "INSERT INTO users (firstname, lastname, email, streetname, streetnum, country, city) VALUES('$firstname', '$lastname', '$email', '$streetname', '$streetnum', '$country', '$city')";
                    $res = mysqli_query($conn, $insert_query);
                }
            }
        } else {
            $insert_query = "INSERT INTO users (firstname, lastname, email, streetname, streetnum, country, city) VALUES('$firstname', '$lastname', '$email', '$streetname', '$streetnum', '$country', '$city')";
            $res = mysqli_query($conn, $insert_query);
        }
    } else {
        echo "ERROR: Could not able to execute $get_query. " . mysqli_error($conn);
    }
    
?>

<?php
    $query="SELECT * From users";
    $result=mysqli_query($conn, $query);
    $totalRows=mysqli_num_rows($result); 
    if($totalRows>0){
        $response=array();
        while($res=mysqli_fetch_object($result)){
            $response[]=($res);
        }
        $output=json_encode($response);
        echo $output;
    }
    
?>