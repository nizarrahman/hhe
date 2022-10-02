/**
* Kalo Eror Tqto nya Perbaiki aja
* mending lu tambahin deh nama lu jangan hapus kreditnya
**/

let handler = async (m, { conn, usedPrefix }) => {

    conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: 1339889,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: `
 *- - - —「 BIG THANKS TO 」— - - - ◂*
*❉ Allah SWT*
*❉ Ortu Gw*
*❉ Guru Gw*
*❉ My team*
*❉ My all friend* 
*❉ Para Pengguna Bot*

*▸ - - - —「 Thanks For My Team 」— - - - ◂*
*❉ Nizar Rahman*:https://instagram.com/nizarrahman.f_
*❉ Irham:* https://instagram.com/yuki_sen23
*❉ Adyran:* https://instagram.com/adrynngrha

\`\`\`${conn.user.name}\`\`\`
`,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(credits?|thanks?to|tqto|ttq)$/i

module.exports = handler
