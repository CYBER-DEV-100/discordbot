module.exports = {
    name: 'meme',
    discription: 'send meme',

    execute(message , args, Discord , fs){
        
        const Memes = fs.readdirSync('./Images/').filter(file => file.endsWith('.jpg'));
        const attachement = new Discord.MessageAttachment('./Images/' + Memes[Math.floor(Math.random() * Memes.length)]);
        console.log(Memes);
        message.channel.send(message.author, attachement);

    }

}