exports.updatemenu  => {
	return `
let { execSync } = require('child_process')
let handler = async (m, { conn, text }) => {
  if (global.conn.user.jid == conn.user.jid) {
    let stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''))
    require('fs').readdirSync('lib').map(v=>global.reload('', v))
    conn.reply(m.chat, stdout.toString(), m)
  }
}


