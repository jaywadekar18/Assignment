const express = require('express');
const app = express();
const router = express.Router()
const bodyparser = require('body-parser');
var jwt = require('jsonwebtoken');
const Land = require('../Schema/Schema')
const Login = require('../Schema/Login')

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});
router.use(bodyparser.urlencoded({ extended: false }))
router.use(express.json())
require('dotenv').config();



router.get('/landData', (req, res) => {

  Land.find().then((data) => { res.send(data); }).catch((err) => { console.log(err) })
})

router.delete('/landData', (req, res) => {
  console.log(req.body);
  Land.deleteOne({ _id: req.body._id }).then((data) => { res.send(data); console.log(data); }).catch((err) => { console.log(err) })
})



router.post('/landData', async (req, res) => {
  
  try {
    const copyInDatabase = await Land.findOne({ Name: req.body.Name });
    if (copyInDatabase) {
      throw Error('This land already Exist in database!!');
    }

    const land = await new Land(req.body)
    let result = await land.save();

    console.log(result);
    res.status(201).json({Data: result});

  }

  catch (err) {
    console.log(err); res.status(400).json({});
  }


})

router.put('/landData', (req, res) => {
  Land.updateOne({ _id: req.body._id }, {
    $set: {
      Name: req.body.Name,
      Area: req.body.Area,
      City: req.body.City,
      State: req.body.State,
      Country: req.body.Country,

    }
  }).then(() => { res.send('Data reveived') })
    .catch((err) => { res.send(err) })

})



router.post('/login', async (req, res) => {
  const { Email, Password } = req.body;
  console.log(req.body)

  try {
    const user = await Login.login(Email, Password);
    const accessToken = jwt.sign(user.id, 'Secret');
    console.log(accessToken)
    res.status(200).json({ accessToken: accessToken });

  }
  catch (err) {
    console.log(err);
    res.status(400).json({})
  }

}
)

module.exports = router;