select adddate("2021-10-31", interval 5 year);

select adddate(data_nascita, 5) from studente;/*se sono giorni non bisogna specificare interval + month/year*/

SELECT ADDTIME('17:25','05:05');

select subdate(curdate(),5);/*togli i giorni, stessa cosa per interval*/

select datediff("2021-11-09", "2022-01-31");

timestampadd(unità, intervallo, espr_datetime)
select timestampadd(week, 2, curdate());

select timestampdiff(year, curdate(), "2019-12-25");

select floor(datediff(curdate(),"1993-06-01")/365.24218967);

select timestampadd(year, data_nascita, curdate()) eta 
from studente order by eta;

alter table studente
add eta tinyint unsigned
after data_nascita;

UPDATE studente
SET eta = TIMESTAMPDIFF(YEAR,data_nascita,CURDATE());

insert into studente (nome, cognome, data_nascita, email, eta)
values ("Sara", "Padawan", "1992-06-23", "sara@sara.it", TIMESTAMPDIFF(YEAR,data_nascita,CURDATE()));

create table if not exists articolo(
    id int auto_increment primary key,
    descrizione varchar(55),
    specifiche json
);

insert into articolo(descrizione, specifiche)
values (
    'TV Apple 40"',
    '{
        "marca": "Apple",
        "pesokg": "5.3",
        "schermo": "OLED",
        "pollici": 40,
        "uscite": ["HDMI 2.0", "USB 3.0"]
    }'
);

insert into articolo(descrizione, specifiche)
values (
    'TV Samsung 55"',
    json_object ("marca", "Samsung", "pesokg", "7.6", "schermo", "QLED", "pollici", 55, "uscite", "HDMI 2.0")
);

insert into articolo(descrizione, specifiche)
values (
    'TV Sony Bravia 85"',
    json_object ("marca", "Sony", "pesokg", "10.1", "schermo", "OLED", "pollici", 85, "uscite", json_array("HDMI 2.0", "USB 3.1", "Ethernet", "Dolby surround"))
);

select json_extract(specifiche, "$.uscite") from articolo;

select json_extract(specifiche, "$.uscite[2]") from articolo;

select specifiche -> "$.uscite" from articolo;

update articolo
set specifiche = json_set(/*aggiunge anche campi non esistenti*/
        specifiche,
        "$.marca", "Boh",
        "$.uscite", json_array("hdmi", "scart"),
        "$.ingressi", json_array("usb", "ethernet"),
)
where id = 1;

update articolo
set specifiche = json_insert (
        specifiche, "$.uscite[2]", "RGB")/*inserisce l'elemento solo se non è presente, non sovrascrive nulla*/
where id = 1;

update articolo
set specifiche = json_replace(
    specifiche, "$.marca", "Aaiowjvwio")
where id = 1;

update articolo
set specifiche = json_remove(
    specifiche, "$.marca", "$.uscite[2]")
where id = 1;