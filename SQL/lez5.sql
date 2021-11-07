select AVG(prezzo) AS "prezzo medio" from libro;

select count(*) from studente; --conta le righe

select max(prezzo), min(prezzo) from libro;

select floor(prezzo), ceiling (prezzo) from libro;

select round(nomecampo);--arrotondamento

select nome, length(nome) 
from studente; --lunghezza dei caratteri di ciascuno

select concat(nome, " ", cognome, " ", email)
from studente;

select concat_ws(" - ", nome, cognome, email)
from studente;

select cognome, substring(cognome,2) --ricava un'altra stringa a partire dalla posizione data
from studente;

select cognome, substring(cognome, 2, 3) --ricava un'altra stringa a partire dalla posizione data con la lunghezza
from studente;

select nome, left(nome,1) --a partire da sinistra estrae la quantità di caratteri indicati
from studente;

select nome, right(nome,1) --a partire da destra estrae la quantità di caratteri indicati
from studente;

select concat(left(nome,1), " ", right(cognome,2))
from studente;

select avg(length(concat(nome, cognome)))
from studente;

select cognome, email
from studente limit 5;

update studente
set email = replace(email, ".com", ".it");

select now();
select curdate();
select curtime();
select second(curtime());
select year(data_nascita) from studente;
