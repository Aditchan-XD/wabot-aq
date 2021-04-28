let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [081313293689]
│ • Axis      [081xxxxxxxxx]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
