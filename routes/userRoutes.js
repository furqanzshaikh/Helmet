const express = require("express");
const router = express.Router();
const {
  test,
  getAllUsers,
  getSingleUser,
  createUser,
  editUser,
  deleteUser,
  login,
  validateToken,
  logout,
} = require("../controllers/userControllers.js");

router.get("/", test);
router.get("/users", getAllUsers);
router.get("/user/:id", getSingleUser);
router.post("/signup", createUser);
router.put("/user/edit/:id", editUser);
router.delete("/user/delete/:id", deleteUser);
router.post("/login", login);
router.get("/validate-token", validateToken);
router.post("/logout", logout);

module.exports = router;
