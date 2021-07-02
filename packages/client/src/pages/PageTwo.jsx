import React from 'react';
import '../styles/register.css';
import VIcon from '../components/VIcon/Logo';
import { Box, Text, FormControl, FormLabel, Input, Button, Image } from '@chakra-ui/react';
import { useForm } from '../hooks/useForm';
import { Link } from 'react-router-dom';
export default function PageTwo() {
	const [values, handleInputChange] = useForm({
		name: '',
		lastName: '',
		department: '',
		province: '',
		email: '',
		password: '',
	});
	const { name, lastName, department, province, email, password } = values;
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(values);
	};
	return (
		<div>
			<div className="ConteinerFondo">
				<Image src="Celebration-pana 1.svg" />
			</div>
			<div className="ConteinerForm">
				<Box ml="50" width="400px">
					<Text
						alignItems="end"
						color="#525252"
						fontFamily="Poppins"
						fontStyle="normal"
						fontSize="18px"
						p="10"
					>
						<Link to="/login">Iniciar Sesión</Link>
					</Text>
					<VIcon></VIcon>
					<Text color="#9C94F2" fontFamily="Poppins" fontStyle="normal" fontSize="30px" p="1">
						Registro
					</Text>
					<form onSubmit={handleSubmit}>
						<FormControl>
							<FormLabel color="#525252" fontFamily="Poppins" fontStyle="normal" fontSize="18px" p="3">
								Nombre
							</FormLabel>
							<Input
								borderColor="Black"
								_hover={{
									color: 'black',
								}}
								type="text"
								name="name"
								value={name}
								onChange={handleInputChange}
							/>
						</FormControl>
						<FormControl>
							<FormLabel color="#525252" fontFamily="Poppins" fontStyle="normal" fontSize="18px" p="3">
								Apellidos
							</FormLabel>
							<Input
								borderColor="Black"
								_hover={{
									color: 'black',
								}}
								type="text"
								name="lastName"
								value={lastName}
								onChange={handleInputChange}
							/>
						</FormControl>
						<FormControl>
							<FormLabel color="#525252" fontFamily="Poppins" fontStyle="normal" fontSize="18px" p="3">
								Departamento
							</FormLabel>
							<Input
								borderColor="Black"
								_hover={{
									color: 'black',
								}}
								type="text"
								name="department"
								value={department}
								onChange={handleInputChange}
							/>
						</FormControl>
						<FormControl>
							<FormLabel color="#525252" fontFamily="Poppins" fontStyle="normal" fontSize="18px" p="3">
								Provincia
							</FormLabel>
							<Input
								borderColor="Black"
								_hover={{
									color: 'black',
								}}
								type="text"
								name="province"
								value={province}
								onChange={handleInputChange}
							/>
						</FormControl>
						<FormControl>
							<FormLabel color="#525252" fontFamily="Poppins" fontStyle="normal" fontSize="18px" p="3">
								Correo electrónico
							</FormLabel>
							<Input
								borderColor="Black"
								_hover={{
									color: 'black',
								}}
								type="email"
								name="email"
								value={email}
								onChange={handleInputChange}
							/>
						</FormControl>
						<FormControl>
							<FormLabel color="#525252" fontFamily="Poppins" fontStyle="normal" fontSize="18px" p="3">
								Contraseña
							</FormLabel>
							<Input
								borderColor="Black"
								_hover={{
									color: 'black',
								}}
								type="password"
								name="password"
								value={password}
								onChange={handleInputChange}
							/>
						</FormControl>
						<Box pt="10">
							<Button
								width="100%"
								colorScheme="#5D467C"
								bg="#A179D9"
								color="#FFFFFF"
								fontFamily="Poppins"
								fontStyle="normal"
								fontSize="20px"
								borderRadius="7px"
								type="submit"
							>
								Registrarse
							</Button>
						</Box>
					</form>
				</Box>
			</div>
		</div>
	);
}
