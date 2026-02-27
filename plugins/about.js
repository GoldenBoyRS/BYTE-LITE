const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 HELLO ${pushname}*

*╰┈───────────────•*
*╭┈───────────────•*
*│  ◦* *ᴡᴇʟᴄᴏᴍᴇ ɪᴛs GOLDEN-MD*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ GOLDENBOY*
*│  ◦* *ʀᴇᴀɪʟ ɴᴀᴍᴇ➠ GOLDEN BOY*
*│  ◦* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ➠ GOLDENBOY*
*│  ◦* *ᴀɢᴇ➠ 19 ʏᴇᴀʀ*
*│  ◦* *ᴄɪᴛʏ➠ Cap-Haïtien*
*│  ◦* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*╰┈───────────────•*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • Golden-MD - TEAM • ]*
*╭┈───────────────•*
*│  ◦* *▢➠ GOLDENBOY*
*╰┈───────────────•*
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ GOLDENBOY
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
