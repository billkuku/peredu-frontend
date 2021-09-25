// deployment file for heroku, work with "postinstall": "npm run build" and "start": "node server.js" in package.json file
const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 3000;
app.listen(port);