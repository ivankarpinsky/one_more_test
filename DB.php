<?php

class DB {
    private $db;

    public function __construct($host, $name, $login, $password) {
        $this->db = new PDO('mysql:host=' . $host . ';dbname=' . $name, $login, $password);
    }

    public function query($sql, $params = []) {
        $stmt = $this->db->prepare($sql);
        $stmt->execute($params);

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

}

