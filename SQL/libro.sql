create table if not exists autore (
    id int auto_increment,
    nome varchar(50),
    cognome varchar(50),
    nazionalita varchar(2),
    index k_cogn(cognome),
    primary key(id)
);
create table if not exists libro (
    id int auto_increment,
    titolo varchar(255),
    prezzo decimal(6,2),
    pagine smallint unsigned,
    editore_id int,
    index k_titolo(titolo),
    primary key(id)
);
create table if not exists autore_libro (
    autore_id int,
    libro_id int,
    primary key(autore_id, libro_id)
);
create table if not exists editore(
    id int auto_increment,
    nome varchar(50),
    email varchar(100) unique,
    primary key(id)
);
desc autore;