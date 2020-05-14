<?php 
    $to = "goldpalace@hotmail.com";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $numPlayers = $_POST['numPlayers'];
    $promo = $_POST['promo'];
    $comment = $_POST['comment'];
    
    
    $subject = "Email From Website";
    
    $message = "Name: ".$name."\nEmail: ".$email."\nPhone: ".$phone."\nNumber of players: ".$numPlayers."\nPromo: ".$promo."\nComment: ".$comment;
    mail($to, $subject, $message,"From:".$email);
    echo "<script>
            alert('Form Submitted Succesfully'); 
            window.location.assign('https://pphspot.com');
        </script>";
?>
