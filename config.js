const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEIyUWE1bHRxYjRnMFFnWHQ2U1djY2NCdWZEbStmRkhOelpZeVM5UjNFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSHJ6Um1kTWJibC8xc2hkK3p5bDArTVhTd3A4c3F4di9QSFJHSUdaYWVqND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDT1h1S1ZIUm04UGRWTUczaUZaaWdEeDZORkhVeVdVQTVkdmdpK2hOZkdBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSXYwNkJhalQ3TnhOeDVybG96cUtEbDlhRitGUGZJM1VhUHNXYWo4NXhJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVPU0doMzlKMGI2Y013Zy9XU25NWEJYQzBsRkZVK2hNeExjdkZzZmh3VzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFTbk1hZWJ1MWFOcExiUzJnV2g3NWNMT092bEp4cXFWOWRKZnFlZmpNVTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUVCMEl1WFI0MnM3MzdjT2E5WXpMUVgrNGdaRWg3RU5nNzdWL1VjN1RsND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRDU4aU4wczV3RmdGR3dqZVN4aUdGM0NkUVphb09KV1A1aVRtWmtmZFRIWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFReWJMZElRL2FITGZkVkVOWkpYeTNoeXZsNkxvNjAvaGd2ZjFWZktOeDlxK3dRcjZNdHBHZ1ByTnY5STRNT0FKM0RDQkZ3QnRqUE5nRG9Ya3F2Zmh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM0LCJhZHZTZWNyZXRLZXkiOiIyR0FmS1cwT3plMFg5TmRrTDBFVTJpZ0M0ZW5TbU9sRGM0RW9qaStoaDZrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI3NzIzMjU1OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0EyNzFERTE4QTAzMTA0MTIwRUY4M0M4OTI2Qjc0NCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU5MTQyNTI3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMyNzcyMzI1NThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUMxNDIwQjM4QUM4RkRBN0VDQkU5RDU3MTI5MjZEMEQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1OTE0MjUyN31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWVhDQlJIMkIiLCJtZSI6eyJpZCI6IjkyMzI3NzIzMjU1ODozQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjM0NDk3MjExNjQyMDA5OjNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQaSs3YllIRVBqRTZjWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ1b2Q1UzlkcGJXS1lKZUhXTjIxcjNTMEdVeC85UlVhc1E5MFRNV3BEVDAwPSIsImFjY291bnRTaWduYXR1cmUiOiJsQ2FZeHljczM4bkxtcmtVUXUxR2dsYUdYdXFZZk0zVFpFbkdYUVg4bEIvaFZWQnZ4VWFiL0ZWWWhCbEltNUt3K1B0RnNyd1pPajBnZFdEeFBwaURCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZUNLdXRyQ0JsSENqUURvejRzaDJsUmExWlRrUjRjZ0c4ZDhCaENRcDBMQ0twZnBCRUNkc0ExbEJSNEI1WUM4N1pCUTFhKzBRNG54WGFZVEU2N1Jhanc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyNzcyMzI1NTg6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJicUhlVXZYYVcxaW1DWGgxamR0YTkwdEJsTWYvVVZHckVQZEV6RnFRMDlOIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTkxNDI1MjQsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTUUvIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Imrᴀɴ-Mᴅ 𓅓*",
// set the auto reply massage on status reply
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "IMRAN-MD V5",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Mʀ-Imrᴀɴ",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself  
OWNER_NUMBER: process.env.OWNER_NUMBER || "923046123264",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "MR-SALARA",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ Imranɴ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add img for alive msg 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups  
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923046123264",
//replace with your whatsapp number        
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
