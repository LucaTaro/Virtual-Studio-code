create table if not exists amico(
    id int auto_increment primary key,
    nome varchar(20),
    cognome varchar(30),
    tel varchar(20)
);
select * from amico;

insert into amico(nome, cognome)
select nome,cognome from studente;

create table parente (
    id int auto_increment primary key,
    nome varchar(20),
    cognome varchar(30)
) select nome,cognome from studente;

create table edd like studente;

insert into edd select * from studente;

update edd set email = 'sara è nana';

select * from studente order by cognome;

select * from studente order by cognome,nome desc, eta;

select * from studente order by cognome limit 10;

select * from studente order by cognome limit 10, 10;