//creacion de la tabla y las inserciones.

DROP TABLE IF EXISTS canciones;

CREATE TABLE canciones (
	id SERIAL primary key , 
	titulo  VARCHAR(50)  not null,
	artista VARCHAR(50)  not null,
	tono VARCHAR(10) not null
	);
	
	INSERT INTO canciones (titulo,artista,tono) VALUES
('Stairway to heaven', 'Led Zepellin', 'Em'),
('Para que nunca mas ', 'Sol y Lluvia','Gm'),
('Behind the wheel ', 'Depeche Mode','Sol');


select * from canciones;