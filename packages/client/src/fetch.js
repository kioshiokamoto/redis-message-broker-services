const baseUrl = 'http://localhost:5001';
export const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');

export const http = (endpoint, data, method = 'GET') => {
	const url = `${baseUrl}/${endpoint}`;
	if (method === 'GET') {
		return fetch(url);
	} else {
		return fetch(url, {
			method,
			headers: {
				'Content-type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(data),
		});
	}
};

export const httpToken = (endpoint, data, method = 'GET') => {
	const url = `${baseUrl}/${endpoint}`;
	if (method === 'GET') {
		return fetch(url, {
			method,
			headers: {
				'Content-Type': 'application/json',
				Authorization: localStorage.getItem('token') || '',
			},
		});
	} else {
		return fetch(url, {
			method,
			headers: {
				'Content-type': 'application/json',
				'x-token': localStorage.getItem('token') || '',
			},
			body: JSON.stringify(data),
		});
	}
};
