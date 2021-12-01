select titolo, cognome
from libro, autore, autore_libro
where libro.id=libro_id and autore.id=autore_id

select titolo, cognome
from libro
inner join autore_libro
on libro.id = libro_id
inner join autore
on autore.id = autore_id