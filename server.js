const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 5000;


const whitelist = ['https://hcphotography.netlify.app', 'http://localhost:3000']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {        
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}


app.use(express.static(path.join('assets', 'images', 'abstract')));
app.use(express.static(path.join('assets', 'images',  'portrait')));
app.use(express.static(path.join('assets', 'images', 'landscape')));
app.use(express.static(path.join('assets', 'images', 'film')));
app.use(express.static(path.join('assets', 'images', 'events')));

app.use('/api/images', cors(corsOptions), require('./imagesRoutes'))

app.listen(PORT, () => console.log('Server is listening on port ' + PORT));