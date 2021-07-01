use db_mbroker;

-- INSERCION DE DATOS EN TABLA GENERO
INSERT 
	INTO GENERO(gn_nombreGenero,gn_descripcion,gn_created_at,gn_update_at)
	VALUES  ('BODA','Celebracion en la cual una pareja contrae matrimonio',NOW(),NOW()),
			('BABYSHOWER','Celebración que se lleva a cabo ante un inminente o un reciente nacimiento de un bebé',NOW(),NOW()),
			('CUMPLEAÑOS ADULTOS','Celebración de cumpleaños con temática para adultos',NOW(),NOW()),
			('CUMPLEAÑOS JOVENES','Celebración de cumpleaños con temática para adolescentes',NOW(),NOW()),
            ('CUMPLEAÑOS NIÑOS','Celebración de cumpleaños con temática para niños',NOW(),NOW()),
            ('QUINCEAÑERA','Celebración de cumpleaños para señoritas proximas a cumplir 15 años',NOW(),NOW()),
            ('EVENTO CASUAL','Celebración sin un fin especifico y solo con fines de diversion',NOW(),NOW());
			
			
-- INSERCION DE DATOS EN TABLA EVENTO
INSERT 
	INTO EVENTO (idGenero,ev_nombreEvento,ev_fechaEvento,ev_departamento,ev_provincia,ev_direccionEvento,ev_precioEvento,ev_created_at,ev_update_at)
	VALUES	(1,'Boda Floral','2021/10/08','Lima','San Borja','Jiron Dante Rossetti 609',1234.60,NOW(),NOW()),
			(1,'Boda 50 años','2021/11/08','Arequipa','Arequipa','Aviacion Camino de las Rosas 12',354.20,NOW(),NOW()),
			(2,'BabyShower Pinky','2021/08/17','Lima','San Miguel','Jiron Robles 123',120.80,NOW(),NOW()),
			(2,'BabyShower Beautiful','2021/10/29','Lima','San Borja','Jiron Dante Rossetti 634',320.40,NOW(),NOW()),
			(3,'Cumple Sky Bar','2021/07/12','Lima','Lima','Cercado de Lima',980.20,NOW(),NOW()),
			(3,'Cumple Blue Tematic','2021/12/11','Lima','Huaral','Av. Los Naturales Mz D Lote 4',1020.70,NOW(),NOW()),
			(4,'XD Juventud','2021/11/08','Lima','Los Olivos','Avenida Pascal Mariategui 12',2560.40,NOW(),NOW()),
			(4,'Tragos Y Baile','2021/10/08','Lima','San Borja','Dante Alligueri 123',3506.40,NOW(),NOW()),
			(5,'Princesas Show','2021/10/08','Lima','San Borja','Jiron Diego LO 156',1540.30,NOW(),NOW()),
			(5,'Superheroes Show','2021/11/01','Lima','Huaral','Calle A SisRosqueti 222',1890.30,NOW(),NOW()),
			(6,'Lago de los Cisnes','2021/10/08','Lima','San Borja','Jiron Dante Rossetti 609',1604.30,NOW(),NOW()),
			(6,'Flower Day','2021/10/08','Lima','San Borja','Barrio Chino 111',2341.12,NOW(),NOW()),
			(7,'Parrilla MVP','2021/10/08','Lima','San Borja','Av Phutin Sape 69',3039.20,NOW(),NOW()),
			(7,'Noche de Baile','2022/01/11','Lima','Magdalena','Ovalo Mash Chow Ta',2580.20,NOW(),NOW());
