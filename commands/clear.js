module.exports = {

    name: 'clear',
    description: 'clear chat',
    execute(message , args){
        if(args[0] < 1) return message.reply('please define no. more than or equal to 1');
        if (args[0]) {
            message.channel.bulkDelete(args[0]).catch(err => {
                console.error(err);
                message.reply('there is an error message  is 14 days old or you typed some letters after code.');
            });
        } else {
            message.channel.bulkDelete(100).catch(err => {
                console.error(err);
                message.reply('Error! message is either older than 14 days or messages are exceeding the limit. Try !clear (number < 100)')
            });
        
        }
    }    
}

