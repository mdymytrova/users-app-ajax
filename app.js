const express = require('express');

const app = express();

const routes = require('./routes/routes');

const bodyParser = require('body-parser');

const methodOverride = require('method-override');

app.set('view engine', 'ejs');

app.use(methodOverride('_method'));

app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
})); 

app.use(routes);

app.listen(process.env.PORT, process.env.IP, () => console.log('Server is running...'));

