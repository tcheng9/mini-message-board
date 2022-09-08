const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.render('index', { title: "Mini Messageboard", messages: messages })
  res.render('index', { title: 'Mini Messageboard', messages: messages, });
});


// Form Get

router.get('/new', function (req, res, next) {
  res.render('form');
});

//Form Post
router.post('/new', function(req,res,next){
  let messageText = req.body.messageText;
  let messageUser = req.body.messageUser;
  messages.push({text: messageText, user: messageUser, added: new Date()});
 
  res.redirect('/')
})
module.exports = router;

