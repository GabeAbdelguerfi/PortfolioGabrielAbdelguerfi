//Data: POST REQUEST KEYS
const formId = "1FAIpQLSeN4X-x42jisbjbBjye3P8Kenl8TXy_NCNGe9WeKJ_bCg4Rzw";
const name = "entry.802378157";
const message = "entry.181262554";

//Data: URL REQUEST
const urlPOST = `https://docs.google.com/forms/d/e/${formId}/formResponse`;


let sheetId = '16-dbCV92doVYfmndzv-MJMLDx7NaD_J_ukxDfNGnQTQ';
const key = "AIzaSyAED6LMISASK8p1DfdrkmiJZKHNoaMapHM";
const sheet = encodeURIComponent('Form Responses 1');
const urlGET =`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheet}?key=${key}`;