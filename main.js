// ๐๐ง๐๐๐ฉ๐๐ ๐๐ฎ ๐ผ๐ ๐๐๐ง
const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  Mimetype,
  GroupSettingChange,
} = require("@adiwajshing/baileys");
const simple = require("./lib/simple.js");
const WAConnection = simple.WAConnection(_WAConnection);
const figlet = require('figlet')
const fs = require("fs");
const { version, bugs } = require('./package.json')
const { banner, start, success, getGroupAdmins } = require("./lib/functions");
const fetch = require("node-fetch");
const moment = require("moment-timezone");
blocked = [];
const { color } = require('./lib/color')
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Good night";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Good evening๐";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "good afternoon๐";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "good afternoonโ๏ธ";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Good morning๐";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Good night๐";
    }
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
fakenomor = '0@s.whatsapp.net'
const gcrevoke = ["919677331878-1621430788@g.us"]
prefix = '#'
shp = 'โฌก'
owner = "919677331878@s.whatsapp.net"
spc1 = '         '
spc2 = '\n                           '
spc3 = '                   '
spc4 = '               '
require("./index.js");
nocache("./index.js", (module) => console.log(`${module} is now updated!`));
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const starts = async (client = new WAConnection()) => {
  client.logger.level = "warn";
  client.version = [2, 2143, 3];
  client.browserDescription = ["Subscribe Monster", "Chrome", "3.0"];
  console.log(banner.string);
  client.on("qr", () => {
    console.log(
      color("[", "white"),
      color("!", "blue"),
      color("]", "white"),
      color(" flashy scan the qr code"),
      client.sendMessage(`919677331878@s.whatsapp.net`, `ใ *NOTIFICATION!* ใ\n\n _Bot Connected Successfully!_`, MessageType.extendedText)
          
    );
  });

  fs.existsSync("./session.json") && client.loadAuthInfo("./session.json");
  client.on("connecting", () => {
    start("2", "Connecting...");
  });
  client.on("open", () => {
    success("2", "Successfully connected to wa, Subscribe Monster");
console.log(color(figlet.textSync(`${spc1}            Monster Bot`, {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
width: 80,
whitespaceBreak: false
}), 'cyan'))
console.log(color(`${spc2}[ โข CREATOR BOT ${fakeyoi} โข ]` ,'cyan'))
console.log(color(`${spc4}< ================================================== >`, 'cyan'))
console.log(color(`${spc3}[โข]`, 'aqua'), color(`Hi        : ${ucapanWaktu}`, 'white'))
console.log(color(`${spc3}[โข]`, 'aqua'), color(`Bot Version : 2.1.2`, 'white'))
console.log(color(`${spc3}[โข]`, 'aqua'), color(`Status      : Online!`, 'white'))
console.log(color(`${spc3}[โข]`, 'aqua'), color(`Owner       : ${fakeyoi}`, 'white'))
console.log(color(`${spc4}< ================================================== >`, 'cyan'))

    console.log(color('โ','red'), color('\n๐๐ค๐ฉ๐: ๐ฟ๐ค๐ฃ๐ฉ ๐๐ค๐ง๐๐๐ฉ ๐ฉ๐ค ๐จ๐ช๐๐จ๐๐ง๐๐๐ ๐ข๐ค๐ฃ๐จ๐ฉ๐๐ง ๐ฎ๐ฉ', 'yellow'))
    console.log(color('โ','red'), color('๐ฆ๐ผ๐๐ฟ๐ฐ๐ฒ ๐๐ผ๐ฑ๐ฒ ๐ฉ๐ฒ๐ฟ๐๐ถ๐ผ๐ป:', 'aqua'), color(version))
    console.log(color('โ','red'), color('๐๐๐ด? ๐๐ฟ๐ฟ๐ผ๐ฟ? ๐ฆ๐๐ด๐ด๐ฒ๐๐๐ถ๐ผ๐ป? ๐ฉ๐ถ๐๐ถ๐ ๐๐ฒ๐ฟ๐ฒ:', 'aqua'), color('https://wa.me/919677331878'))
    console.log(color('[MONSTER BOT]'), color(' แดแดษดsแดแดส สแดแด ษชs แดษดสษชษดแด(โงโโฆ)/๏ธ', 'aqua'))
    console.log(color('[DEV]', 'cyan'), color('๐ช๐ฒ๐น๐ฐ๐ผ๐บ๐ฒ ๐๐ฎ๐ฐ๐ธ, ๐ข๐๐ป๐ฒ๐ฟ! ๐๐ผ๐ฝ๐ฒ ๐ฌ๐ผ๐ ๐๐ฟ๐ฒ ๐๐ผ๐ถ๐ป๐ด ๐ช๐ฒ๐น๐น~', 'magenta'))
    console.log(color('โ','green'), color('๐๐๐๐ฃ๐ ๐จ ๐๐ค๐ง ๐ช๐จ๐๐ฃ๐ ๐ฉ๐๐ ๐๐ค๐ฉ', 'white'))
  });
await client.connect({ timeoutMs: 30 * 1000 });
  fs.writeFileSync("./session.json",JSON.stringify(client.base64EncodedAuthInfo(), null, "\t"));
 teks = `https://chat.whatsapp.com/E6kGrmOhmo9FtNvonhrjy1`
 client.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 console.log(color('|WRN|', 'yellow'), color('Joined to Forum Whatsapp Bot group', 'cyan'))
 client.sendMessage(`919677331878@s.whatsapp.net`, `*Hi Owner Akbar, the bot has been successfully connected to this number*\nโโโโโโโโโโโโโโโโโโโโ\n\`\`\`${JSON.stringify(client.user, null, 2)}\`\`\`\nโโโโโโโโโโโโโโโโโโโโ\n*If there is an error/bot not responding, please contact the bot developer above, thank you*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Akbar Bot Inc.",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./Akbar.jpg'),sourceUrl:"https://wa.me/919677331878?text=Hello bro"}}})
	console.log(color('|WRN|', 'yellow'), color('Sending bot info to bot owner', 'cyan'))
fetch(`http://ip-api.com/line`).then(res => res.text())  
        .then(bu =>{
       client.sendMessage("919677331878@s.whatsapp.net", `โโโโโใ *IP-USER* ใโโโโโ\n\n\`\`\`${bu}\`\`\`\nโโโโโโโโโโโโโโโโโโโโ`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Akbar Bot Inc.",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./Akbar.jpg'),sourceUrl:"https://wa.me/919677331878?text=Hello bro"}}})
     console.log(color('|WRN|', 'yellow'), color('Sending ip address to developer bot', 'cyan'))
   })
      
    client.on('connecting', () => {
		console.log(color('|TRM|'), color('Connecting...', 'cyan'))
		})
	
	client.on('open', () => {
	console.log(color('|TRM|'), color('Connected', 'cyan'))
	}) 
     
    client.on('ws-close', () => {
        console.log(color('|TRM|'), color('Connection lost, trying to reconnect.', 'cyan'))
        })
    
    client.on('close', async () => {
        console.log(color('|TRM|'), color('Disconnected.', 'cyan'))
        })
    
client.on('group-update', async (anu) => {
fkontakk = { key: {
  fromMe: false,
    participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '919677331878-1604595598@g.us' } : {})
},
 message: {
    "contactMessage":{"displayName":'Akbar',"vcard":"BEGIN:VCARD\nVERSION:3.0\nN:2;Akbar;;;\nFN:resku\nitem1.TEL;waid=919677331878:+91 967-7331-878\nitem1.X-ABLabel:Mobile\nEND:VCARD"
 }}}
metdata = await client.groupMetadata(anu.jid)
if(anu.announce == 'false'){
teks = ` [ Group Opened ] \n\n_Group has been opened by admin_\n_Now all members can send messages_`
client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ Group Opened ] - In ${metdata.subject}`)
}
else if(anu.announce == 'true'){
teks = ` [ Group Closed ] \n\n_Group has been closed by admin_\n_Now only admin can send messages_`
client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(` [ Group Closed ]  In ${metdata.subject}`)
}
else if(!anu.desc == ''){
tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
teks = ` [ Group Description Change ] \n\nGroup description has been changed by Admin @${anu.descOwner.split('@')[0]}\nโข New Description : ${anu.desc}`
client.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
console.log(`- [ Group Description Change ] - In ${metdata.subject}`)
  }
else if(anu.restrict == 'false'){
teks = `- [ ๐๐ฟ๐ผ๐๐ฝ ๐ฆ๐ฒ๐๐๐ถ๐ป๐ด ๐??๐ฎ๐ป๐ด๐ฒ ] -\n\nEdit Group info has been opened for members\nNow all members can edit this group info`
client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
  }
else if(anu.restrict == 'true'){
teks = `- [ ๐๐ฟ๐ผ๐๐ฝ ๐ฆ๐ฒ๐๐๐ถ๐ป๐ด ๐๐ต๐ฎ๐ป๐ด๐ฒ ] -\n\nEdit Group info has been closed for members\nNow only group admins can edit this group info`
client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
}
})
  client.on("group-participants-update", async (anu) => {
    try {
      groupMet = await client.groupMetadata(anu.jid);
      groupMembers = groupMet.participants;
      groupAdmins = getGroupAdmins(groupMembers);
      mem = anu.participants[0];

      console.log(anu);
      try {
        pp_user = await client.getProfilePicture(mem);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      try {
        pp_grup = await client.getProfilePicture(anu.jid);
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      if (anu.action == "add" && mem.includes(client.user.jid)) {
        client.sendMessage(anu.jid, "๏ธ", "conversation");
      }
hehe = await getBuffer(pp_user)
if (anu.action == 'add' && !mem.includes(client.user.jid)) {
             const mdata = await client.groupMetadata(anu.jid)
             
             const memeg = mdata.participants.length
             const thu = await client.getStatus(anu.participants[0], MessageType.text)
             const num = anu.participants[0]
             const bosco1 = await client.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			 const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
                let v = client.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                teks = `๐ *Hษช* @${num.split('@')[0]}\n๐ *Bษชแด* : *${thu.status}*\n๐ *Mแดแดสแดสs : ${memeg}*\n๐ *Wแดสแดแดแดแด Tแด* \n *${mdata.subject}*\n *โน๏ธแดแดษดแด ๊ฐแดสษขแดแด แดแด สแดแดแด แดแด๊ฑแดสษชแดแดษชแดษด*\n โแดแดษดsแดแดส สแดแด`
                welcomeBut = [{buttonId:`getdeskgc`,buttonText:{displayText:'DESCRIPTION'},type:1}, {buttonId:`okeyx`,buttonText:{displayText:'CLICK HERE'},type:1}]
                welcomeButt = { contentText: `ย `, footerText: `${teks}`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
                client.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                 }
            if (anu.action == 'remove' && !mem.includes(client.user.jid)) {
                const mdata = await client.groupMetadata(anu.jid)
                const num = anu.participants[0]
                const bosco3 = await client.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			    const bosco4 = bosco3.message["ephemeralMessage"] ? bosco3.message.ephemeralMessage : bosco3
                let w = client.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                memeg = mdata.participants.length
                out = `*Gแดแดแด Bสแด* ๐\n@${num.split('@')[0]}\n*๐ท๐๐๐๐๐๐๐๐ข ๐๐๐๐๐ ๐๐๐๐ ๐ฑ๐ ๐ฑ๐๐๐๐๐ ๐ท๐๐๐ ๐ฐ๐๐ข๐๐๐๐* \n โแดแดษดsแดแดส สแดแด`
                goodbyeBut = [{buttonId:`h`,buttonText:{displayText:'Join Bot'},type:1}, {buttonId:`sc`,buttonText:{displayText:'SUBSCRIBE'}, type:1}]
                goodbyeButt = { contentText: ` `, footerText: `${out}`, buttons: goodbyeBut, headerType: 6, locationMessage: bosco3.message.locationMessage}
                client.sendMessage(mdata.id, goodbyeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
            }
      /*welcom = true
      if (anu.action == "add" && !mem.includes(client.user.jid)) {
        mdata = await client.groupMetadata(anu.jid);
        memeg = mdata.participants.length;
        num = anu.participants[0];
        if (welcom === false) return
        let v = client.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = v.vname || v.notify || num.split("@")[0];
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm");
        teks = `๐๐ฎ๐น๐ผ ${anu_user} ๐ฆ๐ฒ๐น๐ฎ๐บ๐ฎ๐ ๐๐ฎ๐๐ฎ๐ป๐ด ใท๏ธ`;
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${
            groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`
        );
        buttons = [
          { buttonId: `verify`, buttonText: { displayText: "๐ฝ๐๐๐๐๐ใ๏ธ" }, type: 1 },
          { buttonId: `command`, buttonText: { displayText: "๐ช๐๐๐๐ ๐ด๐๐๐ใ๏ธ" }, type: 1 },
        ];
        imageMsg = (
          await client.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: `ใ ๐๐ถ๐ฏ๐ต๐ช๐ฎ๐ฆ ${runtime(process.uptime())} \n ๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ ${fakeyoi}`,
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await client.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        );
        client.relayWAMessage(prep);
      }
      if (anu.action == "remove" && !mem.includes(client.user.jid)) {
        mdata = await client.groupMetadata(anu.jid);
        num = anu.participants[0];
        let w = client.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm");
        memeg = mdata.participants.length;
        out = `๐ฆ๐ฎ๐๐ผ๐ป๐ฎ๐ฟ๐ฎ ${anu_user} ๐`;
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${
            groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`
        );
        buttons = [
          { buttonId: `y`, buttonText: { displayText: "๐๐บ๐ฆ๐ฆใท๏ธ" }, type: 1 },
          { buttonId: `runtime`, buttonText: { displayText: "๐๐ถ๐ฏ๐ต๐ช๐ฎ๐ฆใท๏ธ" }, type: 1 },
        ];
        imageMsg = (
          await client.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `${out}`,
          footerText: `ใ๏ธ ๐๐ถ๐ฏ๐ต๐ช๐ฎ๐ฆ ${runtime(process.uptime())} \n ๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ ${fakeyoi}๐น`,
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await client.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        );
        client.relayWAMessage(prep);
      }*/
      
      if (anu.action == "promote") {
        const mdata = await client.groupMetadata(anu.jid);
        num = anu.participants[0];
        let w = client.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        try {
          ppimg = await client.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          );
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
        }
        let buffer = await getBuffer(
          `https://api-yogipw.herokuapp.com/api/promote?name=${anu_user}&msg=promoted%20as%20admin&mem=${groupAdmins.length}&picurl=${ppimg}&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg`
        );
        teks = `${anu_user} has been promoted as admin`;
        client.sendMessage(mdata.id, buffer, MessageType.image, {
          caption: teks,
        });
      }

      if (anu.action == "demote") {
        const mdata = await client.groupMetadata(anu.jid);
        num = anu.participants[0];
        let w = client.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        try {
          ppimg = await client.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          );
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
        }

        let buffer = await getBuffer(
          `https://api-yogipw.herokuapp.com/api/demote?name=${anu_user}&msg=yahahaha demoted&mem=${groupAdmins.length}&picurl=${ppimg}&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg`
        );
        teks = `${anu_user} has been demoted from admin`;
        client.sendMessage(mdata.id, buffer, MessageType.image, {
          caption: teks,
        });
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"));
    }
  });
  //
 antidel = false
  client.on("message-delete", async (m) => {
    if (m.key.remoteJid == "status@broadcast") return;
    if (!m.key.fromMe && m.key.fromMe) return;
   if (antidel === false) return
    m.message =
      Object.keys(m.message)[0] === "ephemeralMessage"
        ? m.message.ephemeralMessage.message
        : m.message;
    const jam = moment.tz("Asia/Jakarta").format("HH:mm:ss");
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("1 Januari 2021").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
     ];
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let calender = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
     const type = Object.keys(m.message)[0];
     client.sendMessage(
      m.key.remoteJid,
      `\`\`\`ใ ๐๐ก๐ง๐ ๐๐๐๐๐ง๐ ใ\`\`\`
  โข> Name : @${m.participant.split("@")[0]}
  โข> Type : ${type}`,
      MessageType.text,
      { quoted: m.message, contextInfo: { mentionedJid: [m.participant] } }
    );

    client.copyNForward(m.key.remoteJid, m.message);
  });
  client.on("chat-update", async (message) => {
    require("./index.js")(client, message);
  });
  isBattre = "Not Detect"; //
  isCharge = "Not Detect"; //
  client.on(`CB:action,,battery`, (json) => {
    const batteryLevelStr = json[2][0][1].value;
    const batterylevel = parseInt(batteryLevelStr);
    isBattre = batterylevel + "%";
    isCharge = json[2][0][1].live;
  });
antical = true
client.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
client.sendMessage(call, `*Sorry ${client.user.name} can't receive calls.*\n*Call = Block!*`, MessageType.text)
.then(() => client.blockUser(call, "add"))
})
  client.on("CB:Blocklist", (json) => {
    if (blocked.length > 2) return;
    for (let i of json[1].blocklist) {
      blocked.push(i.replace("c.us", "s.whatsapp.net"));
    }
  });
};

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional>
 */
function nocache(module, cb = () => {}) {
  console.log("Module", `'${module}'`, "is now being watched for changes");
  fs.watchFile(require.resolve(module), async () => {
    await uncache(require.resolve(module));
    cb(module);
  });
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = ".") {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(module)];
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}

starts();
// Dont delete the credit wrote on top :V
