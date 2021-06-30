CREATE DATABASE db_mbroker;
USE db_mbroker;

CREATE TABLE usuario(
	idUsuario int PRIMARY KEY AUTO_INCREMENT,
	us_rol boolean default 0, -- 0 es cliente , 1 admin 
	us_nombre varchar(45) NOT NULL,
	us_apellido varchar(45) NOT NULL,
	us_correo varchar(45) NOT NULL UNIQUE,
	us_password varchar(45) NOT NULL,
	us_departamento varchar(45) NOT NULL,
	us_provincia varchar(45) NOT NULL,
	us_created_at DATETIME,
	us_update_at DATETIME 
	
);

CREATE TABLE genero(
	idGenero int PRIMARY KEY AUTO_INCREMENT,
	gn_nombreGenero varchar(45) NOT NULL ,
	gn_descripcion varchar(100) NOT NULL ,
    gn_created_at DATETIME,
	gn_update_at DATETIME 
	
);

CREATE TABLE evento(
	idEvento int PRIMARY KEY AUTO_INCREMENT,
	idGenero int  NOT NULL,
	ev_nombreEvento varchar(45) NOT NULL,
	ev_fechaEvento DATETIME NOT NULL,
	ev_departamento varchar(45) NOT NULL,
	ev_provincia varchar(45) NOT NULL,
	ev_direccionEvento varchar(45) NOT NULL,
	ev_precioEvento DECIMAL(10,2) NOT NULL,
	ev_created_at DATETIME,
	ev_update_at DATETIME,
    
	CONSTRAINT Evento_Genero FOREIGN KEY (idGenero) REFERENCES genero(idGenero)
	
);

CREATE TABLE articuloEvento(
	idArticulos INT PRIMARY KEY AUTO_INCREMENT,
	idEvento INT NOT NULL,
	art_nombreArticulo varchar(45) NOT NULL,
	art_cantidadArticulo INT NOT NULL,
    art_created_at DATETIME,
	art_update_at DATETIME, 	
    
	CONSTRAINT articuloEvento_Evento FOREIGN KEY(idEvento) REFERENCES evento(idEvento)
	
);


CREATE TABLE eventosxUsuario(
	idUsuario int NOT NULL,
	idEvento int NOT NULL,
    
	CONSTRAINT eventosxUsuario_Usuario FOREIGN KEY(idUsuario) REFERENCES usuario(idUsuario),
	CONSTRAINT eventosxUsuario_Evento FOREIGN KEY(idEvento) REFERENCES evento(idEvento)

);
