const router = require('express').Router()

router.get('/', (req, res) => {
        res.render('places/index')
})

// More code here in a moment

module.exports = router
