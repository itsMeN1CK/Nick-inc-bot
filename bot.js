const Discord = require('discord.js');
const client = new Discord.Client();

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

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('-kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      
      const member = message.guild.member(user);
      
      if (member) {
        
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
           
            message.reply(`Successfully kicked ${user.tag} ahah GG`);
          })
          .catch(err => {
          
            message.reply('I was unable to kick the member hmm idk why');
          
            console.error(err);
          });
      } else {
       
        message.reply("That user isn't in this server! dude so don't kick invalid users ;-;");
      }
      
    } else {
      message.reply("You didn't mention the user to kick!  fjdjgf learn how to moderate ");
    }
  }
});



client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith('-ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to ban the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("You didn't mention the user to ban!");
    }
  }
});
client.login('NzYxMjQyNDk2MjgxMDgzOTE1.X3XwUg.i2oxarUVZlqUqTnAtvbaua214qs');