const socket = io('http://localhost:3001');

// const message = document.getElementById('message');

// socket.on('connect', () => {
// 	socket.emit('identity', 55);
// });

const typeNotification = 'test';
//Cliente recibe notificacion en base al tipo de contenido que desea, se debe filtrar el tipo de notificacion
socket.on(typeNotification, (el) => {
	console.log(el);
});
