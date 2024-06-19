<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    use PHPMailer\PHPMailer\PHPMailer;
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/Exception.php';
    require 'PHPMailer/SMTP.php';
    $link = mysqli_connect('localhost', 'ct57679_marketgo', 'EEbr4N27', 'ct57679_marketgo');
    mysqli_set_charset($link, "utf8");
    if (!$link) {
        die('Ошибка соединения: ' . mysqli_error($link));
    }
    if(isset($_POST['submit1'])) {
        // Текст письма заменить в этом месте
        $message = "
        <html>
        <head></head>
        <body>
        <h2>Привет!</h2>
        <p>Как и обещали, отправляем вам презентацию «Как повысить выручку на маркетплейсах»</p>
        <p>Мы скоро напишем вам на почту. Если не хочется ждать - позвоните нам по номеру 8 (499) 130-05-88 или напишите  в whatsapp по номеру
        <a href='https://api.whatsapp.com/send/?phone=79031300588&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C.%20%D0%A5%D0%BE%D1%82%D0%B8%D0%BC%20%D0%BF%D0%BE%D0%B2%D1%8B%D1%81%D0%B8%D1%82%D1%8C%20%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D0%B6%D0%B8%20%D0%BD%D0%B0%20%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%BF%D0%BB%D0%B5%D0%B9%D1%81%D0%B0%D1%85'> +7 903 130-05-88
        </a></p>
        <a href='https://docviewer.yandex.ru/view/9308218/?*=GYaMYv6sNTYEQZH1znK49m7fz9R7InVybCI6InlhLWRpc2stcHVibGljOi8vaitwRGx4TUxtQ0VJS3B3bGg4L2JIUEY4RzdMUWp6VmdTQWo3cnUxZnd4L1lYY2FOOGxzb2tBWTlqdFdwRUcvUHEvSjZicG1SeU9Kb25UM1ZvWG5EYWc9PSIsInRpdGxlIjoi0J%2FRgNC10LfQtdC90YLQsNGG0LjRjyBNYXJrZXRHTy5wZGYiLCJub2lmcmFtZSI6ZmFsc2UsInVpZCI6IjkzMDgyMTgiLCJ0cyI6MTYyOTYyNjE4ODU3MCwieXUiOiI4Njc4MDA0MjExNjE5MzY4MDc1In0%3D'>
            Ссылка на презентацию
        </a>
        </body>
        </html>";

        $subject = "Увеличение объема продаж";

        // $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        // $headers .= "From: MarketGO Agency  <mail@marketgo.agency>\r\n";
        // $headers .= "Reply-To: mail@marketgo.agency\r\n";

        // сюда нужно вписать токен вашего бота
        define('TELEGRAM_TOKEN', '1737361237:AAEpzj567JRj2_a9fj7xXumuzknKxZlms_o');
        // сюда нужно вписать ваш внутренний айдишник
        define('TELEGRAM_CHATID', '-1001580042055');

        function message_to_telegram($text)
        {
            $ch = curl_init();
            curl_setopt_array(
                $ch,
                array(
                    CURLOPT_URL => 'https://api.telegram.org/bot' . TELEGRAM_TOKEN . '/sendMessage',
                    CURLOPT_POST => TRUE,
                    CURLOPT_RETURNTRANSFER => TRUE,
                    CURLOPT_TIMEOUT => 10,
                    CURLOPT_POSTFIELDS => array(
                        'chat_id' => TELEGRAM_CHATID,
                        'text' => $text,
                    ),
                )
            );
            curl_exec($ch);
        }
        $email = $_POST['mail1'];
        $text = "Новая заявка: \n" .
        "Почта: " . $email . "\n";
        message_to_telegram($text);

        //mail($email, $subject, $message, $headers);
        $mail = new PHPMailer();
        $mail->CharSet = 'utf-8';
        // Настройки SMTP
        $mail->isSMTP();
        $mail->SMTPAuth = true;
        $mail->Host = 'ssl://smtp.yandex.ru';
        $mail->Port = 465;
        $mail->Username = 'stydiogalaxy';
        $mail->Password = 'ongalaxyongalaxy';
        // От кого
        $mail->setFrom('stydiogalaxy@yandex.ru', 'MarketGO Agency');
        $mail->AddReplyTo('stydiogalaxy@yandex.ru', 'MarketGO Agency');
        // Кому
        $mail->addAddress($email);
        // Тема письма
        $mail->Subject = $subject;
        // Тело письма
        $mail->msgHTML($message);
        // Проверяем отравленность сообщения
        if($mail->send()) {
            // echo "ok";
        }
        else {
            // echo $mail->ErrorInfo;
        }
        $query = "INSERT INTO requests (email) VALUES ('$email')";
        mysqli_query($link, $query);
        header('Location: https://marketgo.agency/?send1');
    }
    else if(isset($_POST['submit2'])) {
        // Текст письма заменить в этом месте
        $message = "
        <html>
        <head></head>
        <body>
        <h2>Привет!</h2>
       <p>Как и обещали, отправляем вам презентацию «Как повысить выручку на маркетплейсах»</p>
        <p>Мы скоро напишем вам на почту. Если не хочется ждать - позвоните нам по номеру <a href='tel:+74991300588'>8 (499) 130-05-88</a> или напишите  в whatsapp по номеру <a href='https://api.whatsapp.com/send/?phone=79031300588&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C.%20%D0%A5%D0%BE%D1%82%D0%B8%D0%BC%20%D0%BF%D0%BE%D0%B2%D1%8B%D1%81%D0%B8%D1%82%D1%8C%20%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D0%B6%D0%B8%20%D0%BD%D0%B0%20%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%BF%D0%BB%D0%B5%D0%B9%D1%81%D0%B0%D1%85'> +7 903 130-05-88
        </a></p>
        <a href='https://docviewer.yandex.ru/view/9308218/?*=GYaMYv6sNTYEQZH1znK49m7fz9R7InVybCI6InlhLWRpc2stcHVibGljOi8vaitwRGx4TUxtQ0VJS3B3bGg4L2JIUEY4RzdMUWp6VmdTQWo3cnUxZnd4L1lYY2FOOGxzb2tBWTlqdFdwRUcvUHEvSjZicG1SeU9Kb25UM1ZvWG5EYWc9PSIsInRpdGxlIjoi0J%2FRgNC10LfQtdC90YLQsNGG0LjRjyBNYXJrZXRHTy5wZGYiLCJub2lmcmFtZSI6ZmFsc2UsInVpZCI6IjkzMDgyMTgiLCJ0cyI6MTYyOTYyNjE4ODU3MCwieXUiOiI4Njc4MDA0MjExNjE5MzY4MDc1In0%3D'>
            Ссылка на презентацию
        </a>
        </body>
        </html>";
        $subject = "Увеличение объема продаж";

        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: MarketGO Agency <mail@marketgo.agency>\r\n";
        $headers .= "Reply-To: mail@marketgo.agency\r\n";

        // сюда нужно вписать токен вашего бота
        define('TELEGRAM_TOKEN', '1737361237:AAEpzj567JRj2_a9fj7xXumuzknKxZlms_o');
        // сюда нужно вписать ваш внутренний айдишник
        define('TELEGRAM_CHATID', '-1001580042055');

        function message_to_telegram($text)
        {
            $ch = curl_init();
            curl_setopt_array(
                $ch,
                array(
                    CURLOPT_URL => 'https://api.telegram.org/bot' . TELEGRAM_TOKEN . '/sendMessage',
                    CURLOPT_POST => TRUE,
                    CURLOPT_RETURNTRANSFER => TRUE,
                    CURLOPT_TIMEOUT => 10,
                    CURLOPT_POSTFIELDS => array(
                        'chat_id' => TELEGRAM_CHATID,
                        'text' => $text,
                    ),
                )
            );
            curl_exec($ch);
        }

        $email = $_POST['email2'];
        $name = null;
        if(isset($_POST['firstname']))
            $name = $_POST['firstname'];

        $siteAddress = null;
        if(isset($_POST['siteAddress']))
            $siteAddress = $_POST['siteAddress'];

        $text = "Новая заявка: \n" .
        "Почта: " . $email . "\n" .
        "Имя: " . $name . "\n" .
        "Адрес сайта: " . $siteAddress . "\n";
        message_to_telegram($text);

        //mail($email, $subject, $message, $headers);
        // $mail = new PHPMailer();
        // $mail->CharSet = 'utf-8';
        // // Настройки SMTP
        // $mail->isSMTP();
        // $mail->SMTPAuth = true;
        // $mail->Host = 'ssl://smtp.yandex.ru';
        // $mail->Port = 465;
        // $mail->Username = 'stydiogalaxy';
        // $mail->Password = 'ongalaxyongalaxy';
        // // От кого
        // $mail->setFrom('stydiogalaxy@yandex.ru', 'MarketGO Agency');
        // // Кому
        // $mail->addAddress($email);
        // // Тема письма
        // $mail->Subject = $subject;
        // // Тело письма
        // $mail->msgHTML($message);
        // // Проверяем отравленность сообщения
        // $mail->send();
        $query = "INSERT INTO requests (email, name, siteAddress) VALUES ('$email', '$name', '$siteAddress')";
        mysqli_query($link, $query);
        header('Location: https://marketgo.agency/?send2');
    }
    else
        header('Location: https://marketgo.agency/');

?>
