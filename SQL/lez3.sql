select libro.titolo, libro.prezzo, editore.nome
from libro, editore
where libro.editore_id = editore_id;

source nomefile.sql;

select libro.titolo, editore.nome
from libro, editore
where editore.id = libro.editore_id;

select libro.titolo, libro.prezzo, autore.cognome
from libro, autore, autore_libro
where libro.id = autore_libro.libro_id AND autore.id=autore_libro.autore_id
and autore.nazionalita='us';

truncate libro;
truncate autore;
truncate autore_libro;
truncate editore;

alter table autore_libro
modify libro_id int first;

select data_nascita as "data di nascita"
from studente;

select titolo, nome
from libro, editore
where libro.editore_id = editore.id;

select titolo as Titolo, prezzo as Prezzo, nome Editore
from editore as e, libro l
where l.editore_id = e.id;

select libro.titolo, libro.prezzo, libro.pagine, editore.nome "Edito da", autore.nome, autore.cognome
from libro, autore, editore, autore_libro
where libro.editore_id = editore.id and autore.id = autore_libro.autore_id and libro.id = autore_libro.libro_id

select l.titolo, l.prezzo, l.pagine, e.nome "Edito da", a.nome, a.cognome
from libro l, autore a, editore e, autore_libro al
where l.e_id = e.id and a.id = a_libro.a_id and l.id = a_libro.libro_id

create table if not exists africamerda (
    capitale varchar(50) unique,
    stato varchar(30) unique,
    primary key(stato, capitale)
);

alter table africamerda
add popolazione int first;

alter table africamerda
modify popolazione int
after stato;

alter table africamerda
change popolazione pop bigint,
modify capitale varchar(30);

alter table africamerda
drop pop;