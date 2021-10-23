const express = require('express')
const app = express()

app.get('/xxx', function (request,response){
  response.send('Hello World!你好');
})

const port = 4000
app.listen(port, function (){
  console.log(`Example app listening on port ${port}!`);
})
