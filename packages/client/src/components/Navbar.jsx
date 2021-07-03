import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
	Box,
	Text,
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverBody,
	PopoverFooter,
	PopoverArrow,
	Flex,
	Button,
	PopoverCloseButton,
} from '@chakra-ui/react';
import VIcon from './VIcon';
import '../styles/navbar.css';
import Notification from './Notification';
import { DataContext } from '../store/GlobalState';
import { ACTIONS } from '../store/Actions';
import Socket from 'socket.io-client';
import { parseCategorie } from '../utils/parseCategorie';

const PORT = 'https://demo-2-arquitectura-client.herokuapp.com';
export default function Navbar({ setEventos }) {
	const { state, dispatch } = useContext(DataContext);

	const role = state.auth.rol;

	const [userCategories, setUserCategories] = useState(null);
	const [notification, setNotification] = useState([]);
	const handleLogout = () => {
		localStorage.removeItem('token');
		window.location.reload();
	};
	// const socket = Socket('http://localhost:3001');
	const socket = Socket('https://demo-2-arquitectura-client.herokuapp.com');
	useEffect(() => {
		if (role === 1) return;
		// socket = Socket('https://demo-2-arquitectura-client.herokuapp.com');
		socket.on('connect', () => {
			console.log('estas conectado');
		});
	}, []);

	useEffect(() => {
		if (role === 1) return;
		const peticion = async () => {
			const res = await fetch('https://demo-2-arquitectura-client.herokuapp.com/api/user/categoriesxuser', {
				method: 'GET',
				headers: {
					'Content-type': 'application/json',
					Accept: 'application/json',
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			});
			if (res.status !== 200) {
				console.log('Ocurrio un error');
				return;
			}
			const data = await res.json();
			setUserCategories(data);
		};
		peticion();
	}, []);
	useEffect(() => {
		if (!userCategories) return;
		if (role === 1) return;
		socket.on('eventoUsuario', (message) => {
			const messageParsed = JSON.parse(JSON.parse(message));
			if (userCategories.find((categorie) => categorie.idGenero === messageParsed.idGenero)) {
				setNotification((prev) => [...prev, { ...messageParsed }]);
			} else {
				console.log('Usuario no cuenta con genero');
			}
		});
	}, [userCategories]);

	useEffect(() => {
		if (notification.length === 0) return;
		const lastItem = notification[notification.length - 1];
		console.log(notification);
		setEventos((prev) => [
			...prev,
			{
				badge: parseCategorie[lastItem.idGenero],
				ev_departamento: lastItem.ev_departamento,
				ev_provincia: lastItem.ev_provincia,
				ev_direccionEvento: lastItem.ev_direccionEvento,
				ev_fechaEvento: lastItem.ev_fechaEvento,
				ev_nombreEvento: lastItem.ev_nombreEvento,
				idGenero: lastItem.idGenero,
				ev_precioEvento: lastItem.ev_precioEvento,
			},
		]);
	}, [notification]);

	return (
		<Box bg="secondary">
			<Flex className="wrapper-content" justify="space-between" align="center">
				{role !== 1 ? (
					<>
						<VIcon name="logo" />
						<ul className="list-items">
							<li>
								<NavLink exact to="/events" activeClassName="activeLink">
									{' '}
									Mis eventos
								</NavLink>
							</li>
							<li>
								<NavLink exact to="/Survey" activeClassName="activeLink">
									Encuesta
								</NavLink>
							</li>
						</ul>
						<Flex align="center">
							<Popover placement="bottom-end">
								<PopoverTrigger>
									<Box px="4" position="relative">
										<VIcon name="ring" color="blue" size={20} pointer />
										<Box
											h="2"
											w="2"
											bg="red"
											borderRadius="50"
											position="absolute"
											top="0.5"
											left="4"
										></Box>
									</Box>
								</PopoverTrigger>
								<PopoverContent w="150">
									<PopoverArrow />
									<PopoverCloseButton />
									<PopoverHeader>
										<Text color="gray">Mis notificaciones ({notification.length})</Text>
									</PopoverHeader>
									<PopoverBody>
										<Box h="200" overflow="auto" minW="xl">
											{notification &&
												notification.map((notifElement, idx) => (
													<Notification
														key={idx}
														type={parseCategorie[notifElement.idGenero]}
														event={notifElement.ev_nombreEvento}
													/>
												))}
										</Box>
									</PopoverBody>
								</PopoverContent>
							</Popover>
							<Popover placement="bottom-end">
								<PopoverTrigger>
									<Box px="4">
										<VIcon name="avatar" color="blue" size={25} pointer />
									</Box>
								</PopoverTrigger>
								<PopoverContent w="38">
									<PopoverArrow />

									<PopoverBody>
										{' '}
										<Button onClick={handleLogout}>Log out</Button>{' '}
									</PopoverBody>
								</PopoverContent>
							</Popover>
						</Flex>
					</>
				) : (
					<>
						<Text color="blue" fontSize="lg" py="4" align="center" width="100%" fontWeight="semibold">
							Mi panel
						</Text>
						<Popover placement="bottom-end">
							<PopoverTrigger>
								<Box px="4">
									<VIcon name="avatar" color="blue" size={25} pointer />
								</Box>
							</PopoverTrigger>
							<PopoverContent w="38">
								<PopoverArrow />
								<PopoverBody>
									{' '}
									<Button onClick={handleLogout}>Log out</Button>{' '}
								</PopoverBody>
							</PopoverContent>
						</Popover>
					</>
				)}
			</Flex>
		</Box>
	);
}
