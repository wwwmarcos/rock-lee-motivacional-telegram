const Telegraf = require('telegraf')
const { config } = require('./config')

const bot = new Telegraf(config.botToken, {
  telegram: {
    webhookReply: false
  }
})

module.exports = {
  bot
}
