express = require('express');
app = express();
PORT = 3000;


app.get('/', function(req, res) {
    res.send('<h1>Hello World</h1')
});
app.listen(3000);
