/*
const http = require('http')

const server = http.createServer((req, res) =>{
    console.log('request event')
    res.end('Hello world')
})

server.listen(5000, () =>{
    console.log('Server listening on port : 5000...')
})

*/
const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Home page')
    }
    if(req.url === '/about'){
      //Blocking code!!! waiting time till the page loads
      for(let i = 0; i < 50; i++) {
        for(let j =0; j < 50; j++){
            console.log(`${i} ${j}`)
        }
      } 
      res.end('About Page')
    }
})

server.listen(5000, ()=>{
    console.log('Server listening on port 5000...')
})