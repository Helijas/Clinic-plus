<?php
require_once __DIR__ . '/config.php';

class DB {
    private PDO $pdo;

    public function __construct() {
        $dsn = 'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8';
        $this->pdo = new PDO($dsn, DB_USER, DB_PASS, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        ]);
    }

    public function hasRecentDuplicate(string $name, string $email, string $phone): bool {
        $sql = "SELECT id FROM requests
                WHERE name = :name AND email = :email AND phone = :phone
                    AND created_at > (NOW() - INTERVAL 5 MINUTE)";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            ':name'  => $name,
            ':email' => $email,
            ':phone' => $phone,
        ]);
        return (bool)$stmt->fetch();
    }

    public function insertRequest(string $name, string $email, string $phone): void {
        $sql = "INSERT INTO requests (name, email, phone)
                VALUES (:name, :email, :phone)";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            ':name'  => $name,
            ':email' => $email,
            ':phone' => $phone,
        ]);
    }
}
