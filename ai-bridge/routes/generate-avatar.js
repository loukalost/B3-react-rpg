const router = require('express').Router()

router.post('/', async (req, res) => {
  res.send(('Cadeau photo 📸'))
})

module.exports = router
