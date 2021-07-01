## QUERYS 
use db_mbroker;
SELECT * FROM evento E
WHERE E.idGenero IN (
					SELECT GU.idGenero 
					FROM generoxusuario GU
					WHERE GU.idUsuario=1);