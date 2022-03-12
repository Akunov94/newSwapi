export const getApiResource = async url => {
	try {
		const request = await fetch(url);
		if (!request.ok) {
			console.error('ERROR:', request.status);
			return false;
		}
		return await request.json();
	} catch (error) {
		console.error('ERROR ' + error.message);
		return false;
	}
};
