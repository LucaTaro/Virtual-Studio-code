mysql -u root -p
passworddatabase

create database if not exists ESERCIZIO;

grant all
on ESERCIZIO.*
to 'app_generation'@'localhost';


mysql -uapp_generation -pgeneration_2021

use ESERCIZIO;

CREATE TABLE IF NOT EXISTS docente(
    nome varchar(20) not null,
    cognome varchar(30) not null,
    indirizzo varchar(50),
    citta varchar(30),
    provincia varchar(20),
    regione varchar(15),
    email varchar(50) not null unique,
    telefono tinyint,
    datanascita date,
    codicefiscale varchar(16),
    primary key (codicefiscale),
    key k_cogn(cognome)
);

CREATE TABLE IF NOT EXISTS corso(
    id int auto_increment,
    nome varchar(20) not null,
    argomento varchar(20) not null,
    tipo enum('fad', 'presenza') not null,
    primary key (id),
    key k_nome(nome)
);

CREATE TABLE IF NOT EXISTS aula(
    id int auto_increment,
    nome varchar(20) not null,
    capienza tinyint not null,
    edificio varchar(20) not null,
    piano enum('1°', '2°', '3°', '4°', '5°'),
    numeroaula tinyint,
    numeropc tinyint,
    proiettore enum('si', 'no'),
    lavagna enum('si', 'no'),
    primary key (id)
);

CREATE INDEX corso 
ON corso(nome);
CREATE INDEX docente 
ON docente(cognome);