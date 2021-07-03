import React, { useEffect, useState } from 'react';
import '../styles/register.css';
import { Box, Text, FormControl, FormLabel, Checkbox, Button, Image, Grid } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
export default function Survey() {
	const [state, setState] = useState({
		TECNOLOGIA: '',
		EMPLEO: '',
		EMPRENDIMIENTO: '',
		SALUD: '',
		'MODA Y BELLEZA': '',
		VIDEOJUEGOS: '',
		ECONOMIA: '',
		DISEÑO: '',
	});
	const [categorias, setCategorias] = useState(null);
	const router = useHistory();
	useEffect(() => {
		const peticion = async () => {
			const res = await fetch('https://demo-2-arquitectura-client.herokuapp.com/api/user/categories', {
				method: 'GET',
				headers: {
					'Content-type': 'application/json',
					Accept: 'application/json',
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			});
			const data = await res.json();
			setCategorias(data);
			// console.log(data);
		};
		peticion();
	}, []);
	const handleToggle = ({ target }) => {
		setState((s) => ({ ...s, [target.name]: !s[target.name] === true ? target.value : '' }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const categoriasPrep = [...new Set([...Object.values(state)])].filter(Boolean);

		const res = await fetch('https://demo-2-arquitectura-client.herokuapp.com/api/user/saveQuest', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
			body: JSON.stringify({ categories: categoriasPrep }),
		});
		if (res.status === 400 || res.status === 500) {
			console.log('Un error ocurrio');
			return;
		}
		const data = await res.json();
		console.log(data);
		router.push('/');
	};
	return (
		<div>
			<div className="wrapper-content" style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
				<div className="ConteinerFondoEncuesta">
					<Image src="Celebration-rafiki 1.svg" />
				</div>
				<div>
					<Box>
						<Text
							color="#304659"
							fontFamily="Poppins"
							fontStyle="normal"
							fontSize="40px"
							textAlign="center"
							justify-content="center"
							p="4"
						>
							Encuesta
						</Text>
						<form onSubmit={handleSubmit}>
							<FormControl>
								<FormLabel
									color="#304659"
									fontFamily="Poppins"
									fontStyle="normal"
									fontSize="32px"
									p="4"
								>
									¿Qué categorías te interesan?
								</FormLabel>
								<Grid templateColumns="repeat(2,1fr)" templateRows="repeat(4,1fr)" gap="1">
									{categorias &&
										categorias.map((categoria, idx) => (
											<Checkbox
												key={idx}
												onChange={handleToggle}
												colorScheme="green"
												p="6"
												color="#304659"
												fontFamily="Poppins"
												fontStyle="normal"
												fontSize="30px"
												name={categoria.gn_nombreGenero}
												value={categoria.idGenero}
												checked={state['tecnologia']}
											>
												{categoria.gn_nombreGenero}
											</Checkbox>
										))}
								</Grid>
							</FormControl>
							<Box pt="10" p="6">
								<Button
									width="300px"
									colorScheme="#5D467C"
									textAlign="center"
									float="center"
									bg="#A179D9"
									color="#FFFFFF"
									fontFamily="Poppins"
									fontStyle="normal"
									fontSize="20px"
									type="submit"
									borderRadius="7px"
								>
									Guardar
								</Button>
							</Box>
						</form>
					</Box>
				</div>
			</div>
		</div>
	);
}
