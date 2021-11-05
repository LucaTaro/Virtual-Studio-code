select titolo
from libro, editore
where libro.editore_id = editore.id AND editore.nome = "mondadori"
order by titolo;

select titolo, cognome
from libro, autore, autore_libro
where libro.id = autore_libro.libro_id and autore.id = autore_libro.autore_id AND autore.nazionalita = "en";

select titolo
from libro, autore, autore_libro
where libro.id = autore_libro.libro_id and autore.id = autore_libro.autore_id AND autore.cognome = "Tolkien";

select titolo, nome
from libro, editore
where libro.editore_id = editore.id;

alter table libro
add constraint fk_libro_editore
foreign key(editore_id) references editore(id)
on delete no action
on update no action;

alter table autore_libro
add constraint fk_al_autore
foreign key(autore_id) references autore(id)
on delete no action
on update no action;

alter table autore_libro
add constraint fk_al_libro
foreign key(libro_id) references libro(id)
on delete no action
on update no action;

select table_name, column_name, constraint_name, referenced_table_name, referenced_column_name
from information_schema.key_column_usage
where table_schema = "generation"
and referenced_column_name is not null;