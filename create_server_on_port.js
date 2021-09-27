const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();


app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// http://localhost:3001/test

app.use((req, res, next) => {
    console.log('URL = ', req.url);
    console.log('Original_URL = ', req.originalUrl);
    console.log('METHOD = ', req.method);
    console.log('HOST = ', req.headers.host);
    console.log('InSecure = ', req.secure);
    console.log('BODY = ', req.body);
    console.log('QUERY = ', req.query);

    next();
});
app.all('/test', (req, res) => {
    res.status(200).json({ message: 'OK'});
})

http.createServer(app).listen(3000, () => {
    console.log('Server is working on port 3000');
})


let massive = [];

function addStr(){
    curr = prompt("Enter the string");
    massive.push(curr);
};

app.post('/test/strings', (req, res) => {
    massive.push(req.body.str);
    res.status(200).json({ message: 'OK'});
});
app.get('/test/strings', (req, res) => {
    res.status(200).json(massive);
});
app.delete('/test/strings', (req, res) => {
    if(req.query.index !== undefined){
        massive.splice(req.query.index, 1)
    } else{
        massive.splice(0, massive.length)
    }
    res.status(200).json(massive);
});

// сохранение в файл сразу после добавления записи и чтение по запросу GET из файла
// fs или localstorage