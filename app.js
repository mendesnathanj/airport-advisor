const express = require('express');
const app = express();
const db = require("./config/keys").mongoURI;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err)); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('frontend/build'));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
})
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

const users = require("./routes/api/users");
const airports = require("./routes/api/airports");

app.use("/api/users", users);
app.use("/api/airports", airports);

const reviews = require('./routes/api/reviews');
app.use('/api/reviews', reviews);

const passport = require('passport');

app.use(passport.initialize());
require('./config/passport')(passport);