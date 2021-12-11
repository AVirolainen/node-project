const { Router } = require('express')
const router = Router()
const TeamWeek = require('../models/TeamWeek')

router.get('/', async (req, res) => {
  try {
    const squad = await TeamWeek.findOne({ teamId: '1' })
    res.json(squad.squad)
  } catch (e) {
    res.status(500).json({ message: 'Something is wrong' })
  }
})

module.exports = router
