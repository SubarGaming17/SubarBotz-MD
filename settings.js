const chalk = require("chalk")
const fs = require("fs")

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['6287755567549'] //ur owner number
global.ownernomer = "6287755567549" //ur owner number2
global.ownername = "あItsMeSubar" //ur owner name
global.ytname = "Subar Gaming17" //ur yt chanel name
global.socialm = "Subar_Gaming_17" //ur github or insta name
global.location = "Jawa Timur, Indonesia" //ur location

//new
global.apikey = ' wlz9ArtA '
global.botname = "あSubarBotzོ"
global.nomorlu = '6287755567549'
global.ownernumber = '6287755567549'
global.ownername = 'あItsMeSubar'
global.ownerNumber = ["6287755567549@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@SubarGaming17"
global.websitex = "https://github.com/SubarGaming17"
global.wagc = "https://chat.whatsapp.com/KtR5UBGJDmr7oELn7xQ5i5"
global.themeemoji = '🔰'
global.wm = "あSubarBotzོ"
global.botscript = '*Ga Boleh Tau*' //script link
global.packname = "あSubarBotzོ"
global.author = "あItsMeSubar"
global.creator = "6287755567549@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.hituet = 0

//media target
global.thum = fs.readFileSync("./DeepakMedia/theme/SubarBotz.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./DeepakMedia/theme/ItsMeSubar.jpg") //ur logo pic
global.err4r = fs.readFileSync("./DeepakMedia/theme/Zenitsu.jpg") //ur error pic
global.thumb = fs.readFileSync("./DeepakMedia/theme/SubarBotz.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Noh Selesai!',
    admin: 'Emangnya Kamu Admin??',
    botAdmin: '𝗕𝗼𝘁 Jadiin Admin!!',
    premime: 'Elu Premium??',
    owner: 'Elu Owner Gw??',
    group: 'Cuman Bisa Di Grup Woe!!',
    private: 'Cuman Bisa Di Chat Private Woe!!',
    bot: 'Fitur Ini Cuman Bisa Buat Bot Doang',
    wait: 'Tunggu Napa!!',
    linkm: 'Link Nya Mana Woe??',
    endLimit: 'Limit Lu Abis, Tunggu 12 Jam Sana!!',
    nsfw: 'Fitur Haram Ini Belum Diaktifin, Minta Owner Gw Sana Suruh Aktifin. ELU MESUM?!!',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})