import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import routes from './routes';

let app = express();

// parser la data (.config>index.js))
app.use(bodyParser.json({
  limit: config.bodyLimit
}));

// aller chercher les routes (.routes>index.js)
app.use('/app', routes);

// écoute sur le port du server (.config>index.js)
app.listen(config.port, () => {
  console.log( 'Started on port: ' + config.port )
});

export default app;
