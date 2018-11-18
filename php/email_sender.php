<?php
header('Content-Type: text/plain; charset=utf-8');
$outp = '';

//get the sql command sent from fetch API
$email_message = json_decode($_POST['email_message'], false);


$to = $email_message->mail_to;
$subject = $email_message->mail_subject;
$txt = $email_message->mail_message;
//$headers = $email_message->headers->from;


if(mail($to,$subject,$txt))
	echo ('{' . '"email_to":"' . $to . '", "subject":"' . $subject . '", "message":"' . $txt . '", "result" : "success"}');
else
	echo ('{' . '"email_to":"' . $to . '", "subject":"' . $subject . '", "message":"' . $txt . '", "result" : "failure"}');
?>
