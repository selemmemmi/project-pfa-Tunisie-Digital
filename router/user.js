const express = require("express");
const {
  Register,
  Login,
  getAllUsers,
  updateUser,
  deleteUser,
} = require("../controllers/user.controllers");
const isAuth = require("../middleware/isAuth");
const {
  validation,
  registerValidate,
  loginValidate,
} = require("../middleware/validateUser");

const router = express.Router();

/*
@method: POST
@ path:http:localhost:5000/api/user/register
@ parameter: req.body  
public
*/
router.post("/register", registerValidate(), validation, Register);

/*
@method: POST
@ path:http:localhost:5000/api/user/login
@ parameter: req.body  
public
*/
router.post("/login", loginValidate(), validation, Login);

/*
@method: GET
@ path:http:localhost:5000/api/user/current
@ parameter: req.headers  
PRIVETE
*/
router.get("/current", isAuth, (req, res) => {
  res.send({ msg: "authorized", user: req.user });
});

/*
@method: DELETE
@ path:http:localhost:5000/api/user/:id
@ parameter: req.headers  
PRIVETE
*/
router.delete("/:id", isAuth, deleteUser);
/*
@method: GET
@ path:http:localhost:5000/api/user/
@ parameter:  req.headers  
PRIVETE
*/
router.get("/", isAuth, getAllUsers);
/*
@method: PUT
@ path:http:localhost:5000/api/user/:id
@ parameter: req.body  req.headers  
PRIVETE
*/
router.put("/:id", isAuth, updateUser);

// default export
module.exports = router;
