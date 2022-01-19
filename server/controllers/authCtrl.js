const bcrypt = require('bcryptjs')
const db = (req) => req.app.get('db')

module.exports = {
  register: async (req, res ) => {
    const { email, password } = req.body;

    try {
        const result = await db(req).get_user([email]);
        const existingUser = result[0];
        if (existingUser){
            return res.status(409).json('Username taken');
        } else {
            const hash = bcrypt.hashSync(password);
            const registeredUser = await db(req).register_user([email, hash]);
            const user = registeredUser[0];
            req.session.user = {
                id: user.id,
                email: user.email
            };
            return res.status(201).send(req.session.user);
        }
    } catch (err) {
        console.log(`Error registering user: ${err}`);
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    try {
        const foundUser = await db(req).get_user(email);
        const user = foundUser[0];
        if (!user){
            return res.status(401).send('User not found. Please register as a new user before logging in.');
        } else {
            const isAuthenticated = bcrypt.compareSync(password, user.hash);
            if (!isAuthenticated){
                return res.status(403).send('Incorrect email or password.')
            } else {
                req.session.user = {
                    id: user.id,
                    username: user.username,
                    email: user.email
                }
                return res.status(200).send(req.session.user);
            }
        }
    } catch (err) {
        console.log(`Error logging in user: ${err}`);
        }
    },

    getUser: async (req, res) => {
        try {
            const user = await db(req).get_user(req.body.email);
            return res.status(200).send(user);
        } catch (err) {
            console.log(`Error retrieving user: ${err}`);
        }
    },

    logout: async (req, res) => {
        req.session.destroy();
        res.status(200).send('User logged out.');
    }
}