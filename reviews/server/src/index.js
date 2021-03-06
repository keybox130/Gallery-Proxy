const express = require('express');
const db = require('./db.js');
const path = require('path');

const app = express();
const port = 3003;

// send app and js bundle
app.use(express.static(path.join(__dirname, '/../../client/dist')));

// return a stay matching the provided roomId
app.get('/reviews/stays/:roomId', (req, res) => {
  const { roomId } = req.params;
  console.log("Reviews server roomID: ", roomId);
  db.Room.find({ room_id: roomId.slice(1) }).exec()
    .then((room) => {
      res.status(200).send(room[0]); //
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});