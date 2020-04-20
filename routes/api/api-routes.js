//const passport = require('../config/passport')
const express = require('express')
const Cookies = require('js-cookie')
const router = express.Router()
const passport = require('../../config/passport')
const db = require('../../models/user')
const con = require('../../config/config')
const set = require('../../models/setBudget')
const bill = require('../../models/setBills')
//const isAuthenticated = require('../config/middleware/isAuthenticated')

const { check, validationResult } = require('express-validator');

router.post('/user', [
  check('email').isEmail(),
  check('username').isLength({ min: 5}),
  check('password').isLength({ min: 5 })

], (req, res) => {
  
  const errors = validationResult(req);
  console.log(errors)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  db.create(
     req.body.username,
     req.body.email,
     req.body.password,
  )
  .then(result => {
    res.json(result)
  })
});


router.post('/api/login', passport.authenticate('local'), (req, res) => {
      
      res.json(req.user[0])
})


router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

router.post('/api/user', (req, res) => {
  con.query("SELECT * FROM user WHERE userId = ?", [req.body.id], (err, result) => {
      
      res.json(result)
  })
  
})

router.post('/setBudget',(req, res) => {
  set.set(
    req.body.groceriesBudget,
    req.body.transportationBudget,
    req.body.diningBudget,
    req.body.shoppingBudget
 )
});

router.post('/setBills',(req, res) => {
  bill.set(
    req.body.groceries,
    req.body.transportation,
    req.body.dining,
    req.body.shopping
 )
});


module.exports = router