const http = require('http');
const url = require('url');
const cssFile = JSON.stringify(require('./style.css'));

const server = http.createServer((req,res) => {
  const {pathname , query} = url.parse(req.url,true)

  res.writeHead(200,{'content-type':'text/html'});

  let calcNum = 0;
  if(query.operator === '-') {
    calcNum = parseInt(query.firstNo) - parseInt(query.secondNo);
  }
  if(query.operator === '+') {
    calcNum = parseInt(query.firstNo) + parseInt(query.secondNo);
  }
  if(query.operator === '/') {
    calcNum = parseInt(query.firstNo) / parseInt(query.secondNo);
  }
  if(query.operator === '*') {
    calcNum = parseInt(query.firstNo) * parseInt(query.secondNo);
  }
  res.write(`
    <html>
      <head>
        <link rel="stylesheet" type='text/css' href="style.css">
      </head>
      <main>
        <h1> Calculator App</h1>
        <form>
          <label for='firstNo'> 1st No</label>
          <input type='number' name='firstNo'/>
          <br>
          <label for='operator'> 1st No</label>
          <select name='operator'>
          <option value='+'>+</option>
          <option value='-'>-</option>
          <option value='/'>/</option>
          <option value='*'>*</option>
          </select>
          <br>
          <label for='secondNo'> 2nd No</label>
          <input type='number' name='secondNo'/>
          <br>
          <input type='submit' value='submit'/>
        </form>
        <h2>Answer : ${calcNum}</h2>
      </main>
    </html>
  `)
  res.end();
})

const PORT = 4000;
const DOMAIN = 'localhost'

server.listen(PORT,DOMAIN,() => {
  console.log(`Server Running on ${DOMAIN}:${PORT}`);
})