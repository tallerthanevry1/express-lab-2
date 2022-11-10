const express = require('express')
const app = express()
const port = 8000

app.get('/', function(req, res) {
    res.send('Hello World')
})

app.get('/tip', function(req, res) {
    res.send('total or tip percentage')
})

app.get('/magic', function(req, res){
    res.send('Question')
})

app.get('greeting', function(req, res){
    res.send('Hello Stranger')
})

app.get('/tip/:total/:tip', function(req, res){
    res.send('${parseInt(req.params.total) * parseInt(req.params.tip)) /100')
})

app.get('/greeting/:name', function(req, res){
    res.send('Hello, ' + (re.params.name) + " its so great to see you!")
})

app.get('magic/:question', function(req, res){
    res.send((req.params.question) + " " + eightBallResponse[Math.random()*eightb])
})


const eightBallResponse = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]


app.listen(3000)