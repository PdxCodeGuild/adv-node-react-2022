const bcrypt = require('bcrypt');
const { Router } = require('express');
const { check, validationResult } = require('express-validator/check');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const { JWT_SECRET } = require('../utils/secrets');
const { jwtAuth } = require('../utils/auth');

const router = Router();

router.post('/login', [
  check(['username', 'password']).exists(),
], async (req, res) => {
  // Check our req.body has the right values
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).send({ errors: errors.array() });
  }

  // Get our data
  const { username, password } = req.body;

  // Find a user
  const user = await User.findOne({ username });

  // Figure out if they actually are the user!
  if(user) {
    const validUser = bcrypt.compareSync(password, user.password);
    if(validUser) {
      const token = jwt.sign({
        ...user._doc,
        password: undefined,
      }, JWT_SECRET);

      return res.send({ token });
    }
  }

  res.status(422).send({error: 'invalid login information'});  
});

router.post('/sign-up', [
  check(['username', 'password']).exists(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).send({ errors: errors.array() });
  }

  const { username, password, passwordConfirm } = req.body;

  if(password !== passwordConfirm) {
    res.status(400).send({error: 'passwords do not match'});
    return;
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  const user = new User({
    username: username,
    password: hashedPassword,
  });

  try {
    await user.save();
    res.send({
      ...user._doc,
      password: undefined,
    });
  } catch(error) {
    res.status(400).send(error.message);
  }
});

router.get('/profile', jwtAuth, async (req, res) => {
  res.send(req.user);
});

module.exports = router;