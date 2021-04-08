module.exports = {
    name: 'avatar',
    discription: 'will show avatar',
    execute(message , args , Discord){

        const emb = new Discord.MessageEmbed()
            .setImage(message.author.avatarURL())
            .setAuthor(message.author.tag)
            .setDescription(`[Avatar Link](${message.author.displayAvatarURL()})`)
            .setColor('#a0a3a1');
            message.channel.send(emb);

    }
}