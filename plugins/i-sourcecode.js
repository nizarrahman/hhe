let handler = async (m, { conn }) => {

     conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: 1339889,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: '*Nih:*\nwa.me/6281387945391,\n\n*Chat Aja *',
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler


