## QUERYS 
use db_mbroker;
SELECT * FROM evento 
WHERE idGenero IN (
					SELECT idGenero 
					FROM generoxusuario 
					WHERE idUsuario=1);