const User = require("../../models/User")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt'); // import bcrypt

const SALT_ROUNDS = 6; // tell bcrypt how many times to randomize the generation of salt. usually 6 is enough.


module.exports = {
    signup,
    login
}

async function signup(req, res) {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS)
      const user = await User.create({username: req.body.username, email:req.body.email, password:hashedPassword,});
  
      // creating a jwt: 
      // the first parameter specifies what we want to put into the token (in this case, our user document)
      // the second parameter is a "secret" code. This lets our server verify if an incoming jwt is legit or not.
      const token = jwt.sign({ user }, process.env.SECRET,{ expiresIn: '24h' });
      res.json(token); // send it to the frontend
    } catch (err) {
      console.log("user creation error", err)
      res.status(400).json(err);
    }
  }
  
  async function login(req, res) {
    try {
      const user = await User.findOne({ username: req.body.username });
      // check password. if it's bad throw an error.
      if (!(await bcrypt.compare(req.body.password, user.password))) throw new Error();
  
      // if we got to this line, password is ok. give user a new token.
      const token = jwt.sign({ user }, process.env.SECRET,{ expiresIn: '24h' });
      res.json(token)
    } catch {
      res.status(400).json('Bad Credentials');
    }
  }