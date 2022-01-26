const bcrypt = require("bcryptjs");
const db = (req) => req.app.get("db");

const getFeelingsEmojis = (req, res) => {
  req.app.get('db').feelingsEntries.get_feelings_emojis(req.params.id).then(emoji => emoji[0] ? res.status(200).send(emoji[0]) : res.status(200).send({}))
}

const getUserFeelingsEntries = async (req, res) => {
  const db = req.app.get("db")
  let { id } = req.session.user
  if (id) {
    db.feelingsEntries.get_user_feelings_entries([id])
    .then((entry) => res.status(200).send(entry))
  } else {
    return res.status(403).send("Only logged in users can review their entries");
  }
}

const createUserFeelingsEntry = (req, res) => {
  const db = req.app.get("db");
  const { id } = req.session.user
  const { emoji_id } = req.body
  const date = new Date()
  if (id) {
    db.feelingsEntries
      .create_feelings_entry([id, date, emoji_id])
      .then(() => res.sendStatus(200))
      .catch((err) => console.log(`Error creating entry: ${err}`));
  } else {
    return res.status(403).send("Only logged in users can create entries");
  }
}

const deleteUserFeelingsEntry = (req, res) => {
  req.app.get('db').feelingsEntries.delete_feelings_entry(req.params.id).then(() => res.sendStatus(200))
}


module.exports = {
  getFeelingsEmojis,
  getUserFeelingsEntries,
  createUserFeelingsEntry,
  deleteUserFeelingsEntry
};