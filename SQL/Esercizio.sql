/* 1) Valore del magazzino */
select sum(prezzo * rimanenza) as "Valore magazzino" 
from articolo;
/*
+------------------+
| Valore magazzino |
+------------------+
| 340.573,50       |
+------------------+
*/
/* 2) Valore del magazzino per categoria */
select categoria, sum(prezzo * rimanenza) as "Valore magazzino" 
from articolo group by categoria;
/*
+-----------+------------------+
| categoria | Valore magazzino |
+-----------+------------------+
| hardware  | 106.676,00       |
| software  | 233.897,50       |
+-----------+------------------+
*/
/* 3) articoli ordinati e quantità relative ordinati per quantità */
select descrizione, sum(quantita) Ordinati 
from articolo, ordine_dettaglio 
where articolo.id = ordine_dettaglio.articolo_id 
group by descrizione order by Ordinati desc;
/*
+-------------+----------+
| descrizione | ordinati |
+-------------+----------+
| chiavetta   |       16 |
| monitor     |       13 |
| Webcam      |        6 |
| hard-disk   |        6 |
| Office      |        5 |
| smartwatch  |        4 |
| Photoshop   |        2 |
+-------------+----------+
*/
/* 4) quantità articoli ordinati divisi per categoria */
select categoria, sum(quantita) Ordinati 
from articolo, ordine_dettaglio 
where articolo.id = ordine_dettaglio.articolo_id 
group by categoria;
/*
+-----------+----------+
| categoria | ordinati |
+-----------+----------+
| hardware  |       45 |
| software  |        7 |
+-----------+----------+
*/
/* 5) articoli ordinati in un particolare ordine(7) */
select descrizione, sum(quantita) 
from articolo, ordine_dettaglio 
where articolo.id = ordine_dettaglio.articolo_id and ordine_dettaglio.ordine_id = 7 
group by descrizione;
/*
+-------------+----------+
| descrizione | quantita |
+-------------+----------+
| chiavetta   |        5 |
| hard-disk   |        2 |
| Webcam      |        1 |
+-------------+----------+
*/
/* 6) Valore degli ordini: Totale denaro speso dai clienti  */
select sum(quantita * prezzo) as "Valore ordini" 
from ordine_dettaglio, articolo 
where articolo.id = ordine_dettaglio.articolo_id;
/*
+---------------+
| Valore ordini |
+---------------+
| 12.126,50     |
+---------------+
*/
/* 7) Seleziono cognome, email dei clienti che hanno effettuato ordini */
select cognome, email 
from cliente, ordine 
where ordine.cliente_id = cliente.id and ordine.cliente_id != 0 
group by cognome order by cognome;
/*
+----------+----------------------+
| cognome  | email                |
+----------+----------------------+
| bianchi  | luca2@gmail.com      |
| esposito | francoe@icloud.com   |
| rossi    | paolo25@gmail.com    |
| rosso    | alberto12@icloud.com |
+----------+----------------------+
*/
/* 8) Seleziono l'ordine, la data dell'ordine e il nome del cliente */
select cognome, ordine.id as id, data 
from cliente, ordine 
where ordine.cliente_id = cliente.id and ordine.cliente_id != 0 
order by cognome;
/*
+----------+----+------------+
| cognome  | id | data       |
+----------+----+------------+
| bianchi  |  2 | 2018-01-11 |
| bianchi  |  4 | 2018-01-23 |
| bianchi  | 12 | 2018-02-28 |
| esposito |  5 | 2018-02-03 |
| esposito |  7 | 2018-02-13 |
| rossi    |  1 | 2017-12-01 |
| rosso    |  3 | 2018-01-21 |
+----------+----+------------+
*/
/* 9) Seleziono i clienti e il denaro speso in totale da ciascuno */
select cognome, sum(prezzo * quantita) as Speso 
from cliente, ordine, ordine_dettaglio, articolo 
where ordine.cliente_id = cliente.id and ordine.id = ordine_dettaglio.ordine_id and ordine_dettaglio.articolo_id = articolo.id 
group by cognome order by cognome;
/*
+----------+---------+
| cognome  | Speso   |
+----------+---------+
| bianchi  | 7670.50 |
| esposito | 3428.50 |
| rossi    |  242.50 |
| rosso    |  785.00 |
+----------+---------+
*/