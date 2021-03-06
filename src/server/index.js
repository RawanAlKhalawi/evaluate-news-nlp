var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var aylien = require("aylien_textapi");
const bodyParser = require('body-parser');


const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const dotenv = require('dotenv');
dotenv.config();

var textapi = new aylien({
    application_id: `${process.env.API_ID}`,
    application_key: ` ${process.env.API_KEY}`
});

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})
app.post('/api', async (req, res, next) => {
    try {
        textapi.sentiment({
            'text': req.body.theText,
            // url: req.body.url,
            mode: 'document'
        }, function (error, response) {
            if (error === null) {
                console.log(response);
                res.send(response);
            }
        });
    } catch (error) {
        return next(error)
    }
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
