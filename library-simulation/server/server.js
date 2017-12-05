const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config() ;
const checkForSession = require('./middlewares/checkForSession');

const auth_controller = require('./controllers/auth_controller');
const book_controller = require('./controllers/book_controller');

const app = express ();
massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: 'asdfjkl;',
    resave: false,
    saveUninitialized: false
}));
app.use(checkForSession)
// app.use(express.static(`${__dirname}/../public/build`));

// auth endpoints no auth0
app.post('/api/auth/login', auth_controller.login);
app.post('/api/auth/register', auth_controller.register);
app.post('/api/auth/logout', auth_controller.logout);

const port = 3001;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );