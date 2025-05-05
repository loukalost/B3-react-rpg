const { generatePlayer } = require('../controllers/player-controller')

const router = require('express').Router()

router.post('/', async (req, res) => {
  console.log('Generate player !')

  const { body } = req
  if (!body) res.status(500).send('Missing body')

  const result = await generatePlayer(body)
  res.send(('Joueur généré !'))
})

module.exports = router
