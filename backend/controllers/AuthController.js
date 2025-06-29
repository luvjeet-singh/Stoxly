const User = require("../model/UsersModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  const isProd = process.env.NODE_ENV === "production";
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: isProd,
      sameSite: isProd ? "None" : "Lax",
    });
    console.log(res.getHeaders());
    res.status(201).json({
      message: `Hi ${user.username}, you’re now logged in`,
      success: true,
      user,
    });
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
  const isProd = process.env.NODE_ENV === "production";
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: isProd,
      sameSite: isProd ? "None" : "Lax",
    });
    console.log(res.getHeaders());
    res.status(201).json({
      message: `Welcome back, ${user.username}`,
      success: true,
      user: user.username,
    });
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.Logout = async (req, res, next) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Logout failed" });
  }
};
