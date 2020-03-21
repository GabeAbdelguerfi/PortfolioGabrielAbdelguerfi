const postToGoogleDB = function(data){
	const urlEncoded = encodeURL(urlPOST, data);
	const request = initRequest('POST', urlEncoded, 'no-cors');
	sendRequest(request)
		.then( responseEventPOST);
}

const encodeURL = function(path, params){
	const url = new URL(path);
	for(let key in params){
		url.searchParams.set(key, params[key]);
	}
	return url;
}

const initRequest = function(verb, url, mode='cors'){
	const init = new Object();
	init.method = verb;
	init.mode = mode;
	return new Request(url, init);
}

const sendRequest = async function(request){
	const response = await fetch(request);
	return response;
}

const getFromGoogleDB = function(){
	const request = initRequest('GET', urlGET);
	sendRequest(request)
	.then (responseEventGET);
}

const responseEventGET = async function (response){
	const sheetData = await response.json();
	showComments(sheetData);
}

const responseEventPOST = response => getFromGoogleDB();