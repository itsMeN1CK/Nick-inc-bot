const Discord = require ("discord.js");
const {MessageEmbed} = require ('discord.js');

module.exports = {
    name: '8ball',
    description: '8ball knows best',
    usage: '<question>',
    aliases: '8b',
    run: async(client, message, args) => {
            let responses = [
                " hm",
                " hm",
                "hm ",
                "hm ",
                "hm ",
                "hm ",
                " hm",
                " hm",
                " hm",
            ];
            let Response = responses[Math.floor(Math.random()*(responses.length))]
            let Embed = new MessageEmbed()
            .setTitle(' ')
            .setColor('RANDOM')
            .setDescription("\n"+Response)
            message.channel.send(Embed)
        }
    }

    client.login('NzYxMjQyNDk2MjgxMDgzOTE1.X3XwUg.i2oxarUVZlqUqTnAtvbaua214qs')