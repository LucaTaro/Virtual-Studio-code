select titolo, cognome
from libro, autore, autore_libro
where libro.id=libro_id and autore.id=autore_id

select titolo, cognome
from libro
inner join autore_libro
on libro.id = libro_id
inner join autore
on autore.id = autore_id

Create or replace view libro_v AS
select titolo Titolo, pagine Pagine, prezzo Costo
from libro
order by titolo;

insert into libro_v(titolo, prezzo, pagine)
values ("Tacci tua", 23.99, 143);

create or replace view studente_v AS
select cognome, nome, genere, indirizzo, citta Città, provincia, regione, email, data_nascita
from studente
order by cognome;

create or replace view libro_tot AS
select l.titolo Titolo, l.pagine Pagine, round(l.prezzo * 1.22, 2) Prezzo, e.nome Editore, concat_ws (" ", a.cognome, a.nome) Autore
from libro l
join editore e on l.editore_id = e.id
join autore_libro al on al.libro_id = l.id
join autore a on al.autore_id = a.id
order by Titolo;

select * from libro_tot where Editore = "Mondadori";

select table_name, table_type
from information_schema.tables
where table_schema = "generation"
order by table_name;

create or replace view studente_to as
select nome, cognome, email, provincia
from studente
where provincia = "to"
order by cognome
with check option;

create temporary table giovane
select nome, cognome, genere, eta
from studente
where eta <= 30
order by cognome;

drop temparary table giovane;
/*sono valiti tutti i comando normali di mysql per le temporary*/

alter table studente
add constraint ck_eta check (eta >= 18);

mysqldump -uroot -p generation > c:\users\taro\desktop\backup.sql/*backup tutto db*/

mysqldump -uroot -p generation libro studente europa > c:\users\taro\desktop\backuptabelle.sql/*backup selettivo e con dati interni*/

mysqldump -uroot -p generation -d libro  > c:\users\taro\desktop\backupstrutture.sql

mysqldump -uroot -p generation -t libro > c:\users\taro\desktop\backupdatiinterni.sql

/*after login with root*/create databases if not exists mortaccidegeneration;/*quit after creating database*/

mysql - uroot -p mortaccidegeneration < c:\users\taro\desktop\backup.sql