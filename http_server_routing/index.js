const http = require('http');
const url = require('url');
const qs = require('query-string')

const server = http.createServer((req,res) => {
  const {pathname , query} = url.parse(req.url,true)

  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  })
  req.on('end',() => {
    req.body = qs.parse(body);
    const resourse = `${req.method} ${pathname}`
    res.writeHead(200,{'content-type':'text/html'});
    let calcNum = 0;
    if(req.body.operator === '-') {
      calcNum = parseInt(req.body.firstNo) - parseInt(req.body.secondNo);
    }
    if(req.body.operator === '+') {
      calcNum = parseInt(req.body.firstNo) + parseInt(req.body.secondNo);
    }
    if(req.body.operator === '/') {
      calcNum = parseInt(req.body.firstNo) / parseInt(req.body.secondNo);
    }
    if(req.body.operator === '*') {
      calcNum = parseInt(req.body.firstNo) * parseInt(req.body.secondNo);
    }
    res.write(`
      <html>
        <head>
          <link rel="stylesheet" type='text/css' href="style.css">
        </head>
        <main>
          <h1> Calculator App</h1>
          <form action="/view_image" method='POST'>
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
            <label for='imageLink'> Provide Link for Image</label>
            <input type='text' name='imageLink'>
            <br>
            <input type='submit' value='submit'/>
          </form>
          <h2>Answer : ${calcNum}</h2>
        </main>
      </html>
    `)
    if (resourse === 'POST /view_image') {
      res.write(`<main><h1 style="color:gray">You Got the Correct Anser </h1><img src="${req.body.imageLink}"></main>`)
    }
    res.end();
  })
})

const PORT = 4000;
const DOMAIN = 'localhost'

server.listen(PORT,DOMAIN,() => {
  console.log(`Server Running on ${DOMAIN}:${PORT}`);
})