let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `┬──────────────⊷
┤👑𝐅𝐀𝐌𝐈𝐋𝐈𝐀 𝟏𝟒𝐊 👑 ┤* ${pesan}`
let teks = `╭─────────────┈⊷
│◦➛💥 E T I Q U E T A 💥
╰┬────────────┈⊷\n\n❏ ${oi}\n\n❏ *◦➛📚 Mensaje:*\n`
for (let mem of participants) {
teks += `┣➥ @${mem.id.split('@')[0]}\n`}
teks += `└ 𝟏𝟒 𝐊𝐢𝐥𝐚𝐭𝐞𝐬`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
