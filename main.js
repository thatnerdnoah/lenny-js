import { Client, GatewayIntentsBits } from 'discord.js';
const client = new Client({intents: [GatewayIntentsBits.Guilds]})

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(TOKEN);