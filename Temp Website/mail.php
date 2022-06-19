<?php
$message_sent = false;
if (isset($_POST['email']) && $_POST['email'] != '') {
    if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $firstName = $_POST['first_name'];
        $lastName = $_POST['last_name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        $recepient = "jl435063@gmail.com";
        $body = "You recieved an email from ";

        $body .= "From: " . $firstName . $lastName . "\r\n";
        $body .= "Email: " . $email . "\r\n";
        $body .= "Message: " . $message . "\r\n";

        // mail($recepient, $subject, $body, $mailHeader);
        header("Location: index.php?mailsend");
        $message_sent = true;
    }
}
