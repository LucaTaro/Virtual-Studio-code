decreate table if not exists cliente(
    id int auto_increment,
    cognome varchar(40) not null,
    nome varchar(40),
    telefono varchar(15),
    email varchar(100) unique not null,
    indirizzo varchar(50),
    citta varchar(50),
    provincia varchar(30),
    regione varchar(30),
    credito int,
    primary key(id)
);

create table if not exists ordine(
    id int auto_increment,
    cliente_id int,
    impiegato_id int,
    data date,
    consegna enum("consegnato", "da spedire", "spedito"),
    primary key (id)
);

create table if not exists ordine_dettaglio(
    ordine_id int,
    articolo_id int,
    quantita tinyint,
    primary key(ordine_id, articolo_id)
);

create table if not exists articolo(
    id int auto_increment,
    descrizione varchar(255),
    prezzo decimal(6,2),
    categoria enum("hardware", "software"),
    rimanenza tinyint,
    primary key (id)
);

create table if not exists impiegato(
    id int auto_increment,
    nome varchar(50),
    cognome varchar(50),
    ruolo varchar(50),
    rif_to int,
    stipendio decimal(6,2),
    ufficio_id int,
    primary key (id)
);

create table if not exists ufficio(
    id int auto_increment,
    nome varchar(30),
    luogo_id int, 
    primary key(id)
);

