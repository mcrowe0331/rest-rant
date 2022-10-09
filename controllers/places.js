const router = require('express').Router()

router.get('/', (req, res) => {
        let places = [{
                name: 'H-Thai-ML',
                city: 'Seattle',
                state: 'WA',
                cuisines: 'Thai, Pan-Asian',
                pic: '/images/Thai-Bowl.jpg'
              }, {
                name: 'Coding Cat Cafe',
                city: 'Phoenix',
                state: 'AZ',
                cuisines: 'Coffee, Bakery',
                pic: '/images/Coffee.jpg'
              }]
              
        res.render('places/index', {places})
})

// More code here in a moment

module.exports = router
