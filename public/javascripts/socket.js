let socket = io.connect('http://localhost:3000', { forceNew: true });
socket.on('update', (data) => {
	console.log(data);
});
