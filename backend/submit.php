<?php
header('Content-Type: application/json; charset=utf-8');

require_once __DIR__ . '/DB.php';
require_once __DIR__ . '/FormValidator.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'error' => 'Неверный метод запроса']);
    exit;
}

$name  = $_POST['name']  ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';

$validator = new FormValidator();

if (!$validator->validate($name, $email, $phone)) {
    echo json_encode(['success' => false, 'error' => implode(' ', $validator->errors)]);
    exit;
}

$db = new DB();

if ($db->hasRecentDuplicate($name, $email, $phone)) {
    echo json_encode([
        'success' => false,
        'error'   => 'Вы уже отправляли заявку менее 5 минут назад.'
    ]);
    exit;
}

$db->insertRequest($name, $email, $phone);

echo json_encode(['success' => true]);
