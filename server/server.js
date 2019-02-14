const path = require('path');
const express = require('express');
var expressStaticGzip = require('express-static-gzip');
const app = express();
const publicPath = path.join(__dirname, '..', '/dist');
const port = process.env.PORT || 3000;

// serve all assets from dist folder
app.use('/', expressStaticGzip(publicPath));


app.listen(port, () => {
  console.log('server is running');
});
