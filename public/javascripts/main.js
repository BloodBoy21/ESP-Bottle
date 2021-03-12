let http = new XMLHttpRequest();
let url = 'http://localhost:3000/getBotellas';

let id = document.getElementById('count');

const mamada = () => {
	http.open('GET', url, false);
	http.send();
	let data = http.responseText;
	data = JSON.parse(data);
	id.innerHTML = data['count'];
};

setInterval(mamada, 30000);
