const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();
const token = process.env.TOKEN
/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === '-av') {
    // Send the user's avatar URL
    message.reply(message.author.displayAvatarURL());
  }
});

// Log our bot in using the token from https://discord.com/developers/applications
client.login('token');