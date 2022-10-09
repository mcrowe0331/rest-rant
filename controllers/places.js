const router = require('express').Router()

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/id', (req, res) => {
  res.render('/places/id')
}) 

router.get('/', (req, res) => {
  res.render('/places')
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})


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
