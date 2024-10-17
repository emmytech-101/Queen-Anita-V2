//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349023134805";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0xlS1RrcFRIVURhMHBabXBWL2FjQ1p6dkhGUXRFZ2pRNHhrci9OSStraz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicDdUc2NSdEVBRUlwVjE0VU9ySzdSbndPcVlCRzJTQ2RPdDNVeWtCNndBTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5TTJGbis5NlpXVDlialZVV1pwRnk4L00vbmlWNDdNVzE2U2wxcHN0bzNvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0eWFjVkpmdEErNzlnQW85Ylh6NzRYM3lUZUFKVWVteDNsMDUwRjBKcno4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZKd3F4WnNtS2VQckd6SGM4d3NpZ21WODBmRnozaDJZU0VjV0NtKzZHRkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1DeU00WWd1Q3M5ejZHTzNxUEE0MURnTjhuU2w2YllDYnp2RlBHam1BbUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFBWSnA0bnNWQmRkSVMyYTh3UjNjUXZrZ0VqYTZCeHVrS0cvRERtdVdFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVTZmNm5aZWptRFNpbzdhRG5WbzM4MDhvNE0xK0o3NFZwd1ZIWDNkOXMzYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBxNkxCMUZpbmFVMHY5VzRXTFNlWmc5QndCQWRvSjRrSGpEOW8yUENmOFRyeFRRa2xxaFlvbWM0dDZuTUtDTkFqQzA0eVBSS3RjeTNLanZLK2ZuMWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA4LCJhZHZTZWNyZXRLZXkiOiJPQUo1dTN1ZGhnY2tlN0YyVzlRR3h3TlBYbDdSQndDbTAwUitLKzIxbTZ3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzckhYMElVOFI2LUxPRGhQa2tOcjF3IiwicGhvbmVJZCI6ImI0NGRiNWFjLTk4ODctNDFkNi1hM2EwLWE2YmE0ZWEyODg3NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJWmpTRVF0L2Z6dE00eSt0UFFFU28vc29ZUXM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1Fab2QzZUsxZmtzYlNqOEFxVUtGT3QzN3dNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ikg5NlJYVlY0IiwibWUiOnsiaWQiOiIyMzQ5MDIzMTM0ODA1OjEzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlBhc2NhbCBCdXNpbmVzcyBDb25zdWx0IChFbW1hbnVlbCkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xTVXBZY0hFUHJJeGJnR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkpjdndkQWgxM2dNbmdRYytyM3BkUmdTbVZQNld5bytiL2dWbFIyTVBWek09IiwiYWNjb3VudFNpZ25hdHVyZSI6Im1XamRtWDJackhtM09SNWtlQ0lsOEV0WTNWL2VJSVJFZkgxUmtiRlpFMGE1N1lRS0UySU85bGZTWCtnMUZkNS9KbXlZL0xTdXhLWm52Yno1aFplcUJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJZc05pTE9CaGRKempsSFd2WWp6QXpuMEZIS3p2a0xOMkgwbmpXUzBPRUZJUTYzNEVmZWZzUlpaZUgzNCtMd0lpRzlUTEZPUjdIYWd6VGlSaWxhSjZpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMjMxMzQ4MDU6MTNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU1hMOEhRSWRkNERKNEVIUHE5NlhVWUVwbFQrbHNxUG0vNEZaVWRqRDFjeiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTE5MzA5NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQV2wifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
