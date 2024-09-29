const express = require("express");
const adminController = require("../controller/admin-controller");

const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

const router = express.Router();

router.route("/users").get(authMiddleware, adminMiddleware, adminController.getAllUsers);
router.route("/addAnniversary").post(authMiddleware, adminMiddleware, adminController.addAnniversary);
router.route("/addUser").post(authMiddleware, adminMiddleware, adminController.addUser);

router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware, adminController.deleteUserbyId);

module.exports = router;