const { Extra } = require('telegraf')
const path = require('path')

const buildTrigger = word => new RegExp(word, 'i')

const imagesMap = new Map([
  ['cansad', ['cansado.png']],
  ['javascript', ['erro.jpg']],
  ['js', ['erro.jpg']],
  ['bom dia', ['joinha.jpg', 'luta.gif']],
  ['boa tarde', ['joinha.jpg']],
  ['sex', ['joinha.jpg']],
  ['boa noite', ['joinha.jpg']],
  ['trabalh', ['trabalho.jpg', 'cansado.png']],
  ['triste', ['fracassado.jpg', 'triste2.jpg']],
  ['chorand', ['fracassado.jpg', 'triste2.jpg']],
  ['desist', ['nunca.jpg']],
  ['morre', ['triste2.jpg']],
  ['ramda', ['triste.jpg']]
])

const getRandomImage = responses =>
  responses[Math.floor(Math.random() * responses.length)]

const handler = bot => {
  const words = [...imagesMap.keys()]
  const triggers = words.map(buildTrigger)

  bot.hears(triggers, async ctx => {
    const [match] = ctx.match
    const responses = imagesMap.get(match)

    const imageName = getRandomImage(responses)
    const imagePath = path.join('images', imageName)

    await ctx.replyWithPhoto({
      source: imagePath
    },
    Extra.inReplyTo(ctx.message.message_id))
  })
}

module.exports = {
  handler
}
