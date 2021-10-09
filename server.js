// deployment file for heroku, work with "postinstall": "npm run build" and "start": "node server.js" in package.json file
const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
const history = require('connect-history-api-fallback');
const staticFileMiddleware = express.static(path.join(__dirname + '/dist'));

app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
app.use(staticFileMiddleware);
app.use(history({
    disableDotRule: true,
    verbose: true
  }));
app.get('/', function (req, res) {
    res.render(path.join(__dirname + '/dist/index.html'));
});
const port = process.env.PORT || 3000;
app.listen(port);