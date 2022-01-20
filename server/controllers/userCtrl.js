const bcrypt = require("bcryptjs");
const db = (req) => req.app.get("db");

const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const foundUser = await db(req).user.find_user_by_email([email]);
    const existingUser = foundUser[0];
    if (existingUser) {
      return res.status(409).send("Already an account for this email.");
    } else {
      const hash = bcrypt.hashSync(password); // default 10 salt
      const registeredUser = await db(req).user.create_user([email, hash]);
      const user = registeredUser[0];
      req.session.user = {
        id: user.id,
        email: user.email,
      };
      return res.status(201).send(req.session.user);
    }
  } catch (err) {
    console.log(`Error registering user: ${err}`);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const foundUser = await db(req).user.find_user_by_email(email);
    const existingUser = foundUser[0];
    if (!existingUser) {
      return res
        .status(401)
        .send("User not found. Please register before attempting to log in.");
    } else {
      const isAuthenticated = bcrypt.compareSync(
        password,
        existingUser.password
      );
      if (!isAuthenticated) {
        return res.status(403).send("Incorrect password!");
      } else {
        req.session.user = {
          id: existingUser.id,
          email: existingUser.email,
        };
        console.log(req.session.user);
        return res.status(200).send(req.session.user);
      }
    }
  } catch (err) {
    console.log(`Error loggin in user: ${err}`);
  }
};

const getUser = async (req, res) => {
  try {
    const existingUser = req.session.user;
    if (!existingUser) {
      return res.status(404).send("User not found");
    } else {
      return res.status(200).send(existingUser);
    }
  } catch (err) {}
};

const logout = (req, res) => {
  req.session.destroy();
  console.log("Logged out!");
  res.status(200).send("User logged out");
};

module.exports = {
  register,
  login,
  getUser,
  logout,
};