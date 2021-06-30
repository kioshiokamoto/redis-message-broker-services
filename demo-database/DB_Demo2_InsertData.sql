use db_mbroker;

--- INSERCION DE DATOS EN TABLA GENERO
INSERT 
	INTO GENERO(gn_nombreGenero,gn_descripcion,gn_created_at,gn_update_at)
	VALUES  ('BODA','Celebracion en la cual una pareja contrae matrimonio',NOW(),NOW()),
			('BABYSHOWER','Celebración que se lleva a cabo ante un inminente o un reciente nacimiento de un bebé',NOW(),NOW()),
			('CUMPLEAÑOS ADULTOS','Celebración de cumpleaños con temática para adultos',NOW(),NOW()),
			('CUMPLEAÑOS JOVENES','Celebración de cumpleaños con temática para adolescentes',NOW(),NOW()),
            ('CUMPLEAÑOS JOVENES','Celebración de cumpleaños con temática para niños',NOW(),NOW()),
            ('QUINCEAÑERA','Celebración de cumpleaños para señoritas proximas a cumplir 15 años',NOW(),NOW()),
            ('EVENTO CASUAL','Celebración sin un fin especifico y solo con fines de diversion',NOW(),NOW());
			
			
--- INSERCION DE DATOS EN TABLA GENERO

