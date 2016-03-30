var express = require('express'),
    bodyParser = require('body-parser'),
    jsonParser = bodyParser.json(),
    http = require('http'),
    storage = require('./models.js');

var app = express();
app.use(express.static('public'));
app.set('port', process.env.PORT || 8080);

//REST ROUTES:
app.get('/items', function(req, res) {
    res.json(storage.items);
});

app.post('/items', jsonParser, function(req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }

    var item = storage.add(req.body.name);
    res.status(201).json(item);
});

app.put('/items/:id', jsonParser, function(req, res) {
    // if (!req.body) {
    //     return res.sendStatus(400);
    // }
    var item_id = req.params.id;
    console.log(req.body.name);
    var item_name = req.body.name;
    storage.put(item_id, item_name);
    res.status(201).json(item_id);
});

app.delete('/items/:id', function (req, res) {
  console.log(req.params.id);
  storage.delete(req.params.id);
  res.status(201).json("success");
});


var server = http.createServer(app);

server.listen(app.get('port'), function(){
    console.log("Web server listening on port " + app.get('port'));
});

exports.app = app;
exports.storage = storage;
