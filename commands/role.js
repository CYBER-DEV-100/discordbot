module.exports = {
    name: 'role',
    discription: 'will provide  role',
    async execute(message, args, Discord, bot) {
        bot = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
        const channel = '821986836472922133';
        const role_1 = message.guild.roles.cache.get('713829243469168731');
        const role_2 = message.guild.roles.cache.get('822385217934589952');
        const role_1_emote = '🔫';
        const role_2_emoji = '😎';

        let embed = new Discord.MessageEmbed()
            .setColor('#a0a3a1')
            .setTitle('Roles')
            .setDescription('something\n\n'
                + `${role_2_emoji} To get access \n`
                + `${role_1_emote} To get acess`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(role_2_emoji);
        messageEmbed.react(role_1_emote);

        bot.on('messageReactionAdd' , async(reaction, user) =>{
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;
            if(reaction.message.channel === channel){
                if(reaction.emoji.name === role_2_emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role_1);   
                }
                if(reaction.emoji.name === role_1_emote){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role_2);
                }   
            } else {
                return;
            }
        });

        bot.on('messageReactionRemove' , async(reaction, user) =>{
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;
            if(reaction.message.channel === channel){
                if(reaction.emoji.name === role_2_emoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role_1);   
                }
                if(reaction.emiji.name === role_1_emote){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role_2);
                }   
            } else {
                return;
            }
        });
    }
}