const Discord = require('discord.js');
const client = new Discord.Client();
const token  = process.env.TOKEN
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
client.on('message', msg => {
  if (msg.content === `-help`) {
    msg.channel.send({embed: { 
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Commands",
    url: "https://nick-inc.glitch.me",
    description: "`-help Commands`",
    fields: [{
        name: "Level commands",
        value: "Not in service ,Coming soon ;(",
        inline: true,
      },
      {
        name: "-ban",
        value: "Bans the mentioned user, Muahahahhaha",
        inline: false,
      },
      {
        name: "-kick",
        value: "Kicks the mentioned user lmao",
        inline: false,
      },
      {
        name: "-giveaway",
        value: "Creates a giveaway",
        inline: false,
      },
      {
        name: "-purge",
        value: "deletes the messages",
        inline: false,
      },
      {
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Made by `_N1CK#0001"
    }
      }]
      
    
     }})

 

}
});


client.login('token');