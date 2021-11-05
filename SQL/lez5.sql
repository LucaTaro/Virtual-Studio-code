select AVG(prezzo) AS "prezzo medio" from libro;
select count(*) from studente; --conta le righe
select max(prezzo), min(prezzo) from libro;
select floor(prezzo), ceiling (prezzo) from libro;
select round(nomecampo);--arrotondamento
select nome, length(nome) 
from studente; --lunghezza dei caratteri di ciascuno

