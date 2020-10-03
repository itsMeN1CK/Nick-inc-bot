const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', msg => {

  if (msg.content === `-admin`) {
    msg.channel.send({embed: { 
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Admin info ",
    url: "",
    description: "N1CK inc",
    fields: [{
        name: "Guilds",
        value: "Not in service ,Coming soon ;(",
        inline: true,
      },
      {
        name: "Ping",
        value: "",
        inline: false,
      },
      {
        name: "hM",
        value: "",
        inline: true,
      },
      {
        name: "hM",
        value: "hM",
        inline: false,
      },
      {
        name: "View Profile",
        value: "https://dsc.bio/itsnick",
        inline: true,
      },
      {
   
      }]
      
    
     }})

 

}
});
client.login(config.token)