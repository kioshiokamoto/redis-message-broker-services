import React, { useContext } from 'react';
import '../styles/register.css';
import VIcon from '../components/VIcon/Logo';
import { Box, Text, FormControl, FormLabel, Input, Button, Image, Link } from '@chakra-ui/react';
import { useForm } from '../hooks/useForm';
import { DataContext } from '../store/GlobalState';
import { ACTIONS } from '../store/Actions';
export default function PageOne() {
	const { dispatch } = useContext(DataContext);
	const [values, handleInputChange] = useForm({ email: '', password: '' });
	const { email, password } = values;
	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await fetch('https://demo-2-arquitectura-client.herokuapp.com/api/user/login', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(values),
		});
		if (res.status !== 200) {
			console.log('Error de credenciales');
			return;
		}
		const data = await res.json();
		if (data?.token) {
			localStorage.setItem('token', data.token);
			localStorage.setItem('user', JSON.stringify(data.user));
			//console.log(data);
			dispatch({
				type: ACTIONS.AUTH,
				payload: JSON.stringify(data.user),
			});
			dispatch({
				type: ACTIONS.AUTH_LOGING,
			});
		}
	};
	return (
		<div>
			<div className="ConteinerFondo">
				<Image src="Celebration-pana 1.svg" />
			</div>
			<div className="ConteinerForm">
				<Box ml="50" width="400px">
					<Box p="20" ml="15">
						<Link
							color="#525252"
							fontFamily="Poppins"
							fontStyle="normal"
							fontSize="18px"
							p="10"
							href="register"
						>
							Registrarse
						</Link>
					</Box>
					<Box mt="30">
						<VIcon></VIcon>
						<Text color="#9C94F2" fontFamily="Poppins" fontStyle="normal" fontSize="30px" p="1">
							Inicio de sesión
						</Text>
						<Text color="#525252" fontFamily="Poppins" fontStyle="normal" fontSize="20px" p="1">
							¡Bienvenido otra vez a Eventimor!
						</Text>
						<form onSubmit={handleSubmit}>
							<FormControl>
								<FormLabel
									color="#525252"
									fontFamily="Poppins"
									fontStyle="normal"
									fontSize="18px"
									p="3"
								>
									Correo electrónico
								</FormLabel>
								<Input
									borderColor="Black"
									_hover={{
										color: 'black',
									}}
									type="email"
									onChange={handleInputChange}
									value={email}
									name="email"
								/>
							</FormControl>
							<FormControl>
								<FormLabel
									color="#525252"
									fontFamily="Poppins"
									fontStyle="normal"
									fontSize="18px"
									p="3"
								>
									Contraseña
								</FormLabel>
								<Input
									borderColor="Black"
									_hover={{
										color: 'black',
									}}
									type="password"
									onChange={handleInputChange}
									value={password}
									name="password"
								/>
							</FormControl>
							<Box pt="10">
								<Button
									colorScheme="#5D467C"
									textAlign="left"
									w="400px"
									bg="#A179D9"
									color="#FFFFFF"
									fontFamily="Poppins"
									fontStyle="normal"
									fontSize="20px"
									borderRadius="7px"
									type="submit"
								>
									Iniciar Sesión
								</Button>
							</Box>
						</form>
					</Box>
				</Box>
			</div>
		</div>
	);
}
