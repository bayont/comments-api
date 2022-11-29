import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Importing routes from dir ./routes
app.use('/', routes);
console.log(`Listening: http://localhost:${process.env.APP_PORT || '3000'}/`);

module.exports = app;
