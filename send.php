<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

try {
  if( isset($_POST['send'])) {

    $mail = new PHPMailer(true);
    $mail->SMTPDebug = 2;                      //Enable verbose debug output
    //$mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'latequilarestaurants.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'miltiempos@latequilarestaurants.com';                     //SMTP username
    $mail->Password   = 'YJE[)F$RRLE?';                               //SMTP password
    $mail->SMTPSecure = 'ssl';                                  //Enable implicit TLS encryption
    $mail->Port       = 465;  

    $mail->setFrom('miltiempos@latequilarestaurants.com', 'Mil tiempos Mezcal');
    $mail->addAddress('contact@latequilarestaurants.com');

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $_POST["subject"];
    $mail->Body = "From : ".$_POST['name']."<br /> Email : ".$_POST['email']."<br /> Subject : ".$_POST['subject']."<br />Message : ".$_POST['message']."<br />Phone: ".$_POST['phone']."<br />Company: ".$_POST['company'];

    $mail->send();

    echo "<script>
    alert('Sent successfully');
    window.location.href='index.html';
    </script>";
  };

} catch (Exception $e) {
  echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

?>
