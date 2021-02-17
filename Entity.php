<?php


class Entity {
    private $db;

    function __construct() {
        include("DB.php");
        include("config.php");
        $this->db = new DB(DBHOST, DBNAME, DBUSER, DBPWD);
    }

    function filter($column, $type, $value) {
        $operator = $type === 'greater' ? '>' : ($type === 'lesser' ? '<' : ($type === 'equal' ? '=' : 'LIKE'));
        if ($operator === 'LIKE') {
            $value = '%' . $value . '%';
        }
        return $this->db->query("SELECT * FROM entity WHERE {$column} {$operator} :value;", ["value" => $value]);
    }

    function getAll() {
        return $this->db->query("SELECT * FROM entity;");
    }
}

