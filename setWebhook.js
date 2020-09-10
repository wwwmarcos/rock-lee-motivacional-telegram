const { bot } = require('./bot')
const { config } = require('./config')

const setWebhook = async (_req, res) => {
  const url = `${config.currentHost}/callback`
  await bot.telegram.setWebhook(url)
  res.send(`listening on ${config.currentHost}`)
}

module.exports = {
  setWebhook
}
