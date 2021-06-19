const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const routes = require('./routes/routes');
const app = express();

app.use(bodyParser.json());
app.use(cors({origin:"*"}));
app.use(express.static('Frontend'));
//for creating server--
const port = 3000;
app.listen(port,()=>
    console.log('Server started at port '+  port)
);

app.use('/employees',routes);
