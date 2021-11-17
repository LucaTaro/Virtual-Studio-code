select distint cognome from studente; /*estrare il campo senza ripetizioni*/

select distint cognome from studente like "v%"; /*solo dati che iniziano per v*/

select  cognome from studente group by cognome; /*stessa cosa del distinct ma più efficare se da fare operazioni coi dati*/

select genere, count(genere) from studente group by genere;
select genere, count(*) from studente group by genere;
select e.nome, count(*) from libro l, editore e where l.editore_id=e.id group by e.id;

select genere, count(genere), floor (avg(timestampdiff(year, data_nascita, curdate()))) "età media" 
from studente group by genere;

select sum(prezzo) valore, nome Editore from libro, editore 
where libro.editore_id = editore.id group by valore;

select cognome, genere from studente having genere = "m";/*having filtro ulteriore con condizione*/
select genere, count(genere) from studente 
where provincia = "to" group by genere having genere != "null";

create table if not exists europa (
    id int auto_increment primary key,
    stato varchar(30),
    capitale varchar(20),
    index k_stato(stato)
);

create table if not exists america (
    id int auto_increment primary key,
    stato varchar(30),
    capitale varchar(20),
    index k_stato(stato)
);

create table if not exists africa (
    id int auto_increment primary key,
    stato varchar(30),
    capitale varchar(20),
    index k_stato(stato)
);

insert into europa(stato, capitale)
values ("Italia", "Roma"), ("Francia", "Parigi"), ("Germania", "Berlino");

insert into america(stato, capitale)
values ("Stati Uniti", "Washington"), ("Messico", "Citta del messico"), ("Argentina", "Buenos Aires");

insert into africa(stato, capitale)
values ("Egitto", "Il Cairo"), ("Sud Africa", "Pretoria"), ("Marocco", "Rabat");

select stato, capitale from europa;

select libro.id, libro.titolo, libro.editore_id, editore.id, editore.nome
from libro, editore where libro.editore_id = editore.id;

select libro.titolo, editore.nome
from libro inner join editore on libro.editore_id = editore.id;

select titolo, nome, prezzo from libro left join editore on libro.editore_id = editore.id;

select titolo, nome, prezzo from libro right join editore on libro.editore_id = editore.id;

select titolo, nome, prezzo from libro right join editore on libro.editore_id = editore.id where libro.editore_id is null;

select titolo, nome, prezzo from libro right join editore on libro.editore_id = editore.id where editore.id is null;

select titolo, editore.nome as "edito da" concat(autore.cognome, " ", autore.nome) as "Autore", prezzo
from libro
join editore on editore.id = libro.editore_id
join autore_libro on libro.id = autore_libro.libro_id
join autore on autore.id = autore_libro.autore_id;

create table if not exists impiegato(
    id int auto_increment primary key,
    nome varchar(30),
    cognome varchar(30),
    ruolo varchar(30),
    stipendio decimal(6, 2),
    rif_to int,
    ufficio_id int
);

alter table impiegato modify rif_to int after ruolo;

INSERT INTO `impiegato` 
VALUES (1,'Mario','Rossi','tecnico',NULL,2500.00,1),
(2,'Marco','Bianchi','amministrativo',7,1600.00,2),
(3,'Paolo','Verdi','amministrativo',7,1600.00,2),
(4,'Enrico','Marrone','venditore',8,1300.00,3),
(5,'Nicola','Testa','venditore',8,1300.00,3),
(6,'Franco','Barba','tecnico',1,1500.00,1),
(7,'Elena','Totti','amministrativo',NULL,2600.00,2),
(8,'Paola','Capra','venditore',NULL,2300.00,3),
(9,'Mauro','Barba','venditore',8,1300.00,3);

select e.cognome, e.nome, m.cognome Responsabile
from impiegato e, impiegato m
where e.rif_to = m.id
order by e.ruolo;