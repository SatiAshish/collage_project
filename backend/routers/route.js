const express = require("express")
const router = express.Router()

const authControllers = require("../controller/auth_controller");
// const mailController = require("../controller/sendMail");
const authMiddleware = require("../middlewares/auth-middleware");

router.route("/").get(authControllers.home)
router.route("/register").post(authControllers.register)
router.route("/login").post(authControllers.login)
// router.route("/addUser").post(authControllers.addUser);
router.route("/user").get(authMiddleware, authControllers.user);
router.route("/getUser").get( authControllers.getUser);
// router.route("/addAnniversary").post(authControllers.addAnniversary);
// router.route("/mail").get(mailController.sendMail);

module.exports = router;