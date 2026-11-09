const express = require('express');
const cors = require('cors');

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 5001;

router.get('/', cors(), (req, res) => {
  res.json({ message: 'Hello Reviewer! This is the Final Cupstone Project' });
});

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} `);
});

module.exports = app;
