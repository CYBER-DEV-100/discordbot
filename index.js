const Discord = require('discord.js');//
const botset = require('./botsettings.json');
const bot = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] }); 

const fs = require('fs');
// const Memes = fs.readdirSync('./Images/').filter(file => file.endsWith('.jpg'));
bot.commands = new Discord.Collection();

const CommandsFile = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of CommandsFile){
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name , command);

}

//const PREFIX - "!";
bot.once('ready', () => {
    console.log(`${bot.user.username} is online`);
    bot.user.setActivity("server", { type: "WATCHING" });
}); 
bot.on('message', message => {
    if (message.author.bot
     || message.channel.type === "dm" || message.author.bot) return;
    let args = message.content.slice(botset.PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (!bot.commands.has(command)) return;

    try {
	 bot.commands.get(command).execute(message, args, Discord, fs, bot);
    } catch (error) {
	    console.error(error);
	    message.reply('there was an error trying to execute that command!');
    }

});
bot.on('guildMemberAdd', member => {
    const embed = new Discord.MessageEmbed()
        .setTitle(member.user.username) //`${member.user.username}`
        .setThumbnail(member.user.displayAvatarURL())
        .setDescription(`welcome to our server ${member},\n 
        we are glad you joined here \n
        please read the rules in <#822008087224778762>`)
        .addFields(
            { name: 'Tip', value: 'Please do check our help and support channel <#822471501479280681> to know about our server' }, true,
            { name: 'Role', value: 'To get more out of our server \n please give yourself a role through <#821986836472922133>' },
        )
        .setColor('#1060eb')
        .setTimestamp(Date.now());
    const channel = member.guild.channels.cache.find(channel => channel.id === "821852634763231254");
    if (!channel) return;
    channel.send(embed);
    

});


 bot.login(botset.token);


