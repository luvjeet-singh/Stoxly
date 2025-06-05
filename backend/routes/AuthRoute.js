const { Signup, Login, Logout } = require("../controllers/AuthController");
const { userVerification } = require("../middlewares/AuthMiddleware");
const router = require("express").Router();

// userVerification is a route handler for POST /, not a middleware in the chain.
router.post("/", userVerification);

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);

module.exports = router;
