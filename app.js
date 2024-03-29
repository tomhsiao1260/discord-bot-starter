const { Client, GatewayIntentBits } = require('discord.js')
require('dotenv/config')

const client = new Client({ intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
]});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('messageCreate', message => {
  if (message.content === 'Hi') { message.reply('Hello') }
})

client.login(process.env.DISCORD_TOKEN)
