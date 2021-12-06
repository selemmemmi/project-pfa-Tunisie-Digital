const User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

exports.Register = async (req, res) => {
  try {
    // req.body= name , email , password , phone
    const { email, password } = req.body;
    // test email
    const findUser = await User.findOne({ email });
    // email should be unique
    if (findUser) {
      return res
        .status(400)
        .send({ errors: [{ msg: "email should be unique" }] });
    }
    // new user
    const newUser = new User({ ...req.body });

    // hashage password
    const hashedpassword = await bcrypt.hash(password, saltRounds);
    newUser.password = hashedpassword;
    //then we save user
    await newUser.save();

    // response
    res.status(200).send({ msg: "register succ", user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ errors: [{ msg: "user not saved" }] });
  }
};

exports.Login = async (req, res) => {
  try {
    // email & password
    const { email, password } = req.body;
    //   test si email mawjoud
    const findUser = await User.findOne({ email });
    // ken mech mawjoud
    // bad credential
    if (!findUser) {
      return res.status(400).send({ errors: [{ msg: "bad credential" }] });
    }
    // test password
    //   password fel BD== password
    const comparePass = await bcrypt.compare(password, findUser.password);
    //   ken mech kifkif
    // bad crential
    if (!comparePass) {
      return res.status(400).send({ errors: [{ msg: "bad credential" }] });
    }
    // CREE UN TOKEN= meftaa7
    const token = jwt.sign(
      {
        id: findUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "3h" }
    );
    res.status(200).send({ msg: "login successfully", user: findUser, token });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "can not login" }] });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).send({ msg: "deleted" });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "faild to delete" }] });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const result = await User.find();
    res.status(200).send({ msg: "get All users", users: result });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "can not get all users" }] });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const result = await User.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    console.log(result);
    if (result.nModified) {
      return res.status(200).send("updated");
    }
    res.status(200).send({ msg: "no modification" });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "faild to update" }] });
  }
};

// module.exports = { Register,  };
