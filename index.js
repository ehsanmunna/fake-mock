var express = require('express');
var cors = require('cors');
const industryAccociation = require('./mock-data/industry-association');
var app = express();
app.use(cors())
app.get('/', function (req, res) {
    res.send('API working!')
})

app.get('/test', function (req, res) {
    res.send({
        data: industryAccociation,
        response: {
            "success": true,
            "code": 200,
            "query_time": 0
        }
    })
})

// start the server in the port 9000 !
const port = 9000;
app.listen(port, function () {
    console.log('Example app listening on port 9000. url is: http://localhost:' + port);
});