const User = require("../model/UsersModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

// userVerification function is used to verify if a user is logged in,
// and responds with that user’s username if the token is valid.

module.exports.userVerification = (req, res) => {
  const token = req.cookies.token;
  console.log(" Token from cookie:", token);
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await User.findById(data.id);
      if (user)
        return res.json({
          status: true,
          user: {
            username: user.username,
            email: user.email,
          },
          message: `Welcome back, ${user.username}`,
        });
      else return res.json({ status: false });
    }
  });
};
