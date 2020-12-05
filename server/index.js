var express = require('express');
var helmet = require('helmet');
var morgan = require('morgan');
var path = require('path')

const app = express();

const port = 1234

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

app.listen(port, () => {
  console.log(`🍕 API Listen on http://localhost:${port}`);
})

// eslint-disable-next-line
app.get('/', (req, res) => {
  res.json({
    "message": "API Of tuchat ! WORKING !"
  })
})

// eslint-disable-next-line
app.get('/assets/:id', (req, res) => {
  // eslint-disable-next-line
  const { id } = req.params;
  var options = { 
    root: path.join(__dirname) 
  };
  var file = `./assets/${id}.png`
  res.sendFile(file, options, function (err) { 
    if (err) { 
      res.statusCode = 500;
      res.json({
        "error": err
      });
      console.log(err);
    } else { 
        console.log('Sent:', file); 
    } 
}); 
})
// eslint-disable-next-line
app.get('/assets', (req, res) => {
  res.statusCode = 400;
  res.json({
    "error": 400,
    "type": "Bad Request"
  })
})