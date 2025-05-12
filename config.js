const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_41_05_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA3MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzksXG4gICAgICAgIDQyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDU5LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDg0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDksXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIsXG4gICAgICAgIDYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc3LFxuICAgICAgICA1NixcbiAgICAgICAgMTEwLFxuICAgICAgICA4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDUsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDk0LFxuICAgICAgICA2NyxcbiAgICAgICAgODcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDMwLFxuICAgICAgICAzMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA1NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDczLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg2LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk3LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDU5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODIsXG4gICAgICAgIDM1LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDY4LFxuICAgICAgICAyNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDYyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzksXG4gICAgICAgIDE3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0OCxcbiAgICAgICAgMixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NixcbiAgICAgICAgMjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTI2LFxuICAgICAgICA5OCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWEYzb3M4ZTJ3TWhWK2tIMmJUWDRZOE5mYTd4Vi9XSGpSb09UbkFKcmxOTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU3OTQ0Mzc3MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkMwQ0I5REMxRDQwNDEzQjczQTY0NzI5ODk1OTI1MUY3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0NzA1MDEwNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJaN0ZxS3dHSFRPYXNzaWdUMUJTTHNBXCIsXG4gIFwicGhvbmVJZFwiOiBcImUzZTg1N2ZmLTA1MWEtNDQzNi04ZmFjLWMxMzE3YjcyMDU3MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDMsXG4gICAgICAxNDksXG4gICAgICAyMTcsXG4gICAgICAyMjYsXG4gICAgICAyMzIsXG4gICAgICAxNDYsXG4gICAgICAyMDUsXG4gICAgICA4MCxcbiAgICAgIDExMCxcbiAgICAgIDE0MSxcbiAgICAgIDE5NyxcbiAgICAgIDEwNCxcbiAgICAgIDI0NSxcbiAgICAgIDIzNSxcbiAgICAgIDE0OCxcbiAgICAgIDIxMixcbiAgICAgIDI1NCxcbiAgICAgIDY0LFxuICAgICAgMTcxLFxuICAgICAgMTcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM4LFxuICAgICAgMTI2LFxuICAgICAgNDgsXG4gICAgICA3NixcbiAgICAgIDgzLFxuICAgICAgNDgsXG4gICAgICAzMCxcbiAgICAgIDIxMixcbiAgICAgIDIwNixcbiAgICAgIDg5LFxuICAgICAgMjMsXG4gICAgICAyMjUsXG4gICAgICAxNjgsXG4gICAgICA5MixcbiAgICAgIDcxLFxuICAgICAgOTcsXG4gICAgICAxNzIsXG4gICAgICAyMzIsXG4gICAgICAxOTYsXG4gICAgICAxMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSFJXTFNTTE5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTc5NDQzNzcyMzozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTQ0MzQwNjY3MTQ4NjE6MzNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1Rza2Q4RkVPKzhoOEVHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQd1liWVB1MFlVMTdyVExWZm84RkF2NCtVaWxuaWVQUmdNYjMyek5NVFVrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImpjNmdlQUNpSzNodWxKZ2dUUEd0UUFxdEVvOGZtQTlvdnVxMlN5UnhrTmxqZUZoNUxZcys2eTEzNTBtcS9FcVA4endMTTQzSVg2Qk1may85YUk5WUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjZtUU1GZHk0ZjBvYjQ5MmlXQlp0ZGZ1d1ZYTDlDK0wzUENwWGd6MGxaS2NVWkxzREhhdW5tdTZvaVFvMEtnb2k1ZDNVbm9uaWJaVUViTWZaa0JrTUJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTc5NDQzNzcyMzozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ3MDUwMTAwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTzVDXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPNUMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYZzdwekFwNzFqUHNSbUNzdG9DZ2xKeFN2UmgvVVZyVytsczdRZWNJL2VJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1NDE2OTkxNzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Khalfan jr",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-e0f1533b-d5e8-498d-83e1-803827b7acf2",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "khalfan22",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
