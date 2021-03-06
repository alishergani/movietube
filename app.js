const express = require('express');
const path = require('path');
const cors = require('cors');
const routes = require('./routes.js');

// create our Express app
const app = express();

app.use(express.static(path.join(__dirname, 'src')));

app.use(cors());
// After allllll that above middleware, we finally handle our own routes!
app.use('/', routes);


app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`App running → PORT ${server.address().port}`);
});