import React, { useContext, useEffect, useState } from 'react';
import {
	Text,
	Box,
	Grid,
	Flex,
	Button,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	ModalHeader,
	FormControl,
	FormLabel,
	Input,
	Select,
} from '@chakra-ui/react';
import CardModal from '../components/CardModal';
import { useForm } from '../hooks/useForm';
import { DataContext } from '../store/GlobalState';
export default function Events({ eventos, setEventos }) {
	const { state, dispatch } = useContext(DataContext);
	const role = state.auth.rol;
	const { isOpen, onOpen, onClose } = useDisclosure();

	// const [eventos, setEventos] = useState([]);
	const [generos, setGeneros] = useState([]);

	//PARA PUBLICAR EVENTO
	const [values, handleInputChange, reset] = useForm({
		name: '',
		category: '',
		date: '',
		department: '',
		province: '',
		cost: '',
		address: '',
	});
	const { name, category, date, department, province, cost, address } = values;

	const handleNewPublishSubmit = async (e) => {
		e.preventDefault();
		const badge = generos.filter((el) => el.gn_nombreGenero === category)[0];
		const res = await fetch('https://demo-2-arquitectura-admin.herokuapp.com/api/admin/create', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
			body: JSON.stringify({
				ev_departamento: department,
				ev_provincia: province,
				ev_direccionEvento: address,
				ev_fechaEvento: date,
				ev_nombreEvento: name,
				idGenero: badge.idGenero,
				ev_precioEvento: cost,
			}),
		});
		const data = await res.json();
		//console.log(data);
		setEventos((prev) => [
			...prev,
			{
				badge: badge.gn_nombreGenero,
				ev_departamento: department,
				ev_provincia: province,
				ev_direccionEvento: address,
				ev_fechaEvento: date,
				ev_nombreEvento: name,
				idGenero: badge.idGenero,
				ev_precioEvento: cost,
			},
		]);
		onClose();
	};

	useEffect(() => {
		reset();
	}, [isOpen]);
	useEffect(() => {
		if (role === 0 || role === 1) {
			const peticion = async () => {
				if (role === 1) {
					const res = await fetch('https://demo-2-arquitectura-admin.herokuapp.com/api/admin/categories', {
						method: 'GET',
						headers: {
							'Content-type': 'application/json',
							Accept: 'application/json',
							Authorization: `Bearer ${localStorage.getItem('token')}`,
						},
					});
					const data = await res.json();
					setGeneros(data);
				}
			};
			peticion();
		}
	}, [role]);
	useEffect(() => {
		if (role === 0 || role === 1) {
			const peticion = async () => {
				if (role === 1) {
					const res = await fetch('https://demo-2-arquitectura-admin.herokuapp.com/api/admin/all', {
						method: 'GET',
						headers: {
							'Content-type': 'application/json',
							Accept: 'application/json',
							Authorization: `Bearer ${localStorage.getItem('token')}`,
						},
					});
					const data = await res.json();
					setEventos(data);
					//	console.log(data);
				} else {
					const res = await fetch('https://demo-2-arquitectura-client.herokuapp.com/api/user/posts', {
						method: 'GET',
						headers: {
							'Content-type': 'application/json',
							Accept: 'application/json',
							Authorization: `Bearer ${localStorage.getItem('token')}`,
						},
					});
					const data = await res.json();
					setEventos(data);
				}
			};
			peticion();
		}
	}, [role]);
	return (
		<>
			<div className="wrapper-content">
				{role !== 1 ? (
					<>
						<Text fontSize="4xl" py="5" align="center" fontWeight="semibold">
							Encuentra tu evento
						</Text>
						<Text fontSize="md">Publicaciones para ti</Text>
					</>
				) : (
					<>
						<Text fontSize="4xl" py="5" align="center" fontWeight="semibold">
							Publicar evento
						</Text>
						<Flex justify="center">
							<Button variant="primary" w="60" onClick={onOpen}>
								Nuevo
							</Button>
						</Flex>
					</>
				)}
				{role !== 1 ? (
					<Grid templateColumns="repeat(3,1fr)" py="3">
						{eventos &&
							eventos.map((evento, idx) => (
								<CardModal
									key={idx}
									name={evento.ev_nombreEvento}
									date={new Date(evento.ev_fechaEvento).toISOString().split('T')[0]}
									place={evento.ev_direccionEvento}
									department={evento.ev_departamento}
									province={evento.ev_provincia}
									address={evento.ev_direccionEvento}
									badge={evento.badge}
									cost={evento.ev_precioEvento}
									role={evento.idGenero}
								/>
							))}
					</Grid>
				) : (
					<Grid templateColumns="repeat(3,1fr)" py="3">
						{eventos &&
							eventos.map((evento, idx) => (
								<CardModal
									key={idx}
									name={evento.ev_nombreEvento}
									date={new Date(evento.ev_fechaEvento).toISOString().split('T')[0]}
									place={evento.ev_direccionEvento}
									department={evento.ev_departamento}
									province={evento.ev_provincia}
									address={evento.ev_direccionEvento}
									badge={evento.badge}
									cost={evento.ev_precioEvento}
									role={evento.idGenero}
								/>
							))}
					</Grid>
				)}

				<Modal isOpen={isOpen} onClose={onClose} isCentered size="2xl">
					<ModalOverlay />
					<ModalContent>
						<ModalCloseButton _focus={{ boxShadow: 'none' }} />
						<ModalHeader>
							<Text align="center" fontSize="2xl">
								Nuevo evento
							</Text>
						</ModalHeader>
						<ModalBody>
							<form onSubmit={handleNewPublishSubmit}>
								<FormControl p="4">
									<FormLabel>Nombre del evento</FormLabel>
									<Input
										type="text"
										placeholder="Escribe el nombre aquí"
										name="name"
										value={name}
										onChange={handleInputChange}
									/>
								</FormControl>
								<Grid templateColumns="repeat(2,1fr)">
									<FormControl p="4">
										<FormLabel>Elige una categoría</FormLabel>
										<Select
											placeholder="Seleccionar categoría"
											variant="outline"
											name="category"
											value={category}
											onChange={handleInputChange}
										>
											{generos.map((genero) => (
												<option
													key={genero.idGenero}
													value={genero.gn_idGenero}
													style={{ color: 'var(--black)' }}
												>
													{genero.gn_nombreGenero}
												</option>
											))}
										</Select>
									</FormControl>
									<FormControl p="4">
										<FormLabel>Fecha</FormLabel>
										<Input
											type="date"
											placeholder="Seleccionar fecha"
											name="date"
											value={date}
											onChange={handleInputChange}
										/>
									</FormControl>
									<FormControl p="4">
										<FormLabel>Departamento</FormLabel>
										<Input
											type="text"
											placeholder="Escribe el departamento aquí"
											name="department"
											value={department}
											onChange={handleInputChange}
										/>
									</FormControl>
									<FormControl p="4">
										<FormLabel>Provincia</FormLabel>
										<Input
											type="text"
											placeholder="Escribe el provincia aquí"
											name="province"
											value={province}
											onChange={handleInputChange}
										/>
									</FormControl>
								</Grid>
								<FormControl p="4">
									<FormLabel>Dirección</FormLabel>
									<Input
										type="text"
										placeholder="Av. Universitaria"
										name="address"
										value={address}
										onChange={handleInputChange}
									/>
								</FormControl>
								<FormControl p="4">
									<FormLabel>Costo</FormLabel>
									<Input
										type="numeral"
										placeholder="s/. 200"
										name="cost"
										value={cost}
										onChange={handleInputChange}
									/>
								</FormControl>
								<Box d="flex" justifyContent="center">
									<Button variant="primary" type="submit" size="lg">
										Aceptar
									</Button>
								</Box>
							</form>
						</ModalBody>
					</ModalContent>
				</Modal>
			</div>
		</>
	);
}
