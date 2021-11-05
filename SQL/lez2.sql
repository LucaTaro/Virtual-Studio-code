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

create table frocio like studente;

insert into frocio select * from studente;

update frocio set email = 'sara piace il cazzo';

select * from studente order by cognome;

select * from studente order by cognome,nome desc, eta;

select * from studente order by cognome limit 10;

select * from studente order by cognome limit 10, 10;