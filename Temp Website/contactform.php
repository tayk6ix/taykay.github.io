$message_sent = false;
if(isset($_POST[email]) && $_POST[email] != ''){
    if(filter_var($_POST[email], FILTER_VALIDATE_EMAIL )){
        <!-- Submit the form -->
        $userFirstName = $_POST['first_name'];
        $userLastName = $_POST['last_name'];
        $userEmail = $_POST[email];
        $userPhone = $_POST['phone'];
        $message = $_POST['message'];

        $to = "jnj_construction@outlook.com";
        $body = "";

        $body .= "From ".$userFirstName.$userLastName. "\r\n";
        $body .= "Contact at ".$userEmail.$userPhone "\r\n";
        $body .= "Message ".$message. "\r\n";

        <!-- mail($to, $messageSubject, $body); -->
        $message_sent = true;
    }
}
