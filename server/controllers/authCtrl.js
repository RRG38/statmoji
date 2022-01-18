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
  }
}