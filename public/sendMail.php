<?php
header('Content-Type: text/plain; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo 'Método no permitido';
  exit;
}

function clean($value) {
  return str_replace(["\r", "\n"], '', trim((string) $value));
}

function h($value) {
  return htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
}

$name = clean($_POST['name'] ?? '');
$number = clean($_POST['number'] ?? '');
$email = clean($_POST['email'] ?? '');
$asunto = clean($_POST['asunto'] ?? '');
$message = trim((string) ($_POST['message'] ?? ''));
$establecimiento = clean($_POST['establecimiento'] ?? '');

$emailOk = (bool) preg_match('/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/', $email);
$phoneOk = (bool) preg_match('/^\+569\d{8}$/', $number);
$nameOk = (bool) preg_match('/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+(?:\s+[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)*$/u', $name);

if (
  !$nameOk || mb_strlen($name) < 2 || mb_strlen($name) > 60 ||
  !$phoneOk ||
  mb_strlen($asunto) < 4 || mb_strlen($asunto) > 25 ||
  strlen($email) > 64 || !$emailOk ||
  mb_strlen($message) < 10 || mb_strlen($message) > 400
) {
  http_response_code(400);
  echo 'Datos inválidos';
  exit;
}

$from = 'styloschool@formularios.com';
$to = 'lucianobvx@gmail.com';
$subject = 'Asunto: ' . $asunto;

$nameH = h($name);
$numberH = h($number);
$emailH = h($email);
$asuntoH = h($asunto);
$establecimientoH = h($establecimiento);
$messageH = nl2br(h($message));

$messageContent = "
<html>
<head>
  <title>Nueva consulta desde Styloschool</title>
  <style>
    body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px; }
    .container { background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); padding: 20px; max-width: 600px; margin: auto; }
    h1 { color: #333; font-size: 20px; }
    p { line-height: 1.6; color: #555; }
    .footer { margin-top: 20px; font-size: 0.9em; color: #777; }
  </style>
</head>
<body>
  <div class='container'>
    <h1>Nueva consulta desde el formulario web</h1>
    <p><strong>Nombre:</strong> {$nameH}</p>
    <p><strong>Establecimiento:</strong> {$establecimientoH}</p>
    <p><strong>Teléfono:</strong> {$numberH}</p>
    <p><strong>Correo:</strong> {$emailH}</p>
    <p><strong>Asunto:</strong> {$asuntoH}</p>
    <p><strong>Mensaje:</strong></p>
    <p>{$messageH}</p>
    <div class='footer'>
      <p>Mensaje automático del sitio Styloschool. Podés responder a este correo para contactar al cliente.</p>
    </div>
  </div>
</body>
</html>
";

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: <{$from}>\r\n";
$headers .= "Reply-To: {$email}\r\n";

if (mail($to, $subject, $messageContent, $headers)) {
  echo 'El mensaje de correo electrónico ha sido enviado.';
} else {
  http_response_code(500);
  echo 'Hubo un problema al enviar el mensaje.';
}
