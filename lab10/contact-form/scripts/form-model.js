const entry1 = 'entry.1888625293';
const entry2 = 'entry.832171510';
const entry3 = 'entry.1945052866';
const formId = '1FAIpQLSdwcQDPPIE4yeDX0h9ycez4Vc-3UJbqOUDDrD3X0-5e6kkb_w';
const form = 'https://docs.google.com/forms/d/e/1FAIpQLSdwcQDPPIE4yeDX0h9ycez4Vc-3UJbqOUDDrD3X0-5e6kkb_w/formResponse'

const getPath = formId => `https://docs.google.com/forms/d/e/${ formId }/formResponse`;

const postToGoogleDB = function(data){
	const path = getPath(formId);
	const url = getURL(path, data)
	console.log("before request");
	sendRequest('POST', url)
	.then (responseEvent);
	console.log("after request.")
}

const getURL = function(path, params){
	const url = new URL(path);
	for(let key in params){
		url.searchParams.set( key, params[key]);
	}
	return url;
}

const sendRequest = async function(verb, url){
	console.log("send request");
	const request = initRequest(verb, url);
	const response = await fetch(request);
	return response;
}

const initRequest = function(verb, url){
	const init = new Object();
	init.method = verb;
	init.mode = 'no-cors';
	return new Request(url, init);
}

const responseEvent = response => alert('Success!');