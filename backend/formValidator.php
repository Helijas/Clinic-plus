<?php

class FormValidator {
    public array $errors = [];

    public function validate(string $name, string $email, string $phone): bool {
        if (trim($name) === '') {
            $this->errors[] = 'Введите имя.';
        }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $this->errors[] = 'Некорректный email.';
        }

        $cleanPhone = preg_replace('/\D+/', '', $phone);
        if (strlen($cleanPhone) < 10) {
            $this->errors[] = 'Некорректный телефон.';
        }

        return empty($this->errors);
    }
}