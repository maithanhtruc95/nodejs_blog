//https://expressjs.com/en/starter/hello-world.html

const express = require('express')

const port = 3000
var morgan = require('morgan')

//fs dùng để ghi file
var fs = require('fs')
var path = require('path')

const app = express()

//Log to terminal
//app.use(morgan('combined'))

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

app.get('/', (req, res) => {
  var a = 1;
  var b = 2;
  var c = a + b;
  res.send(`
    <html>
      <body>
        <h1>Hello World!</h1>
        <p>The result of c is ${c}</p>
      </body>
    </html>
  `);
})

const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Complex HTML Page</title>
    </head>
    <body>
        <h1>Welcome to My Website - Thong Thai</h1>
        <h2>About Us</h2>
        <p>This is a <b>bold</b> paragraph. It also includes <i>italic</i> text and <u>underlined</u> text.</p>
        <h2>Our Services</h2>
        <p>We provide a variety of services to meet your needs.</p>
        <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
        </ul>
        <h2>Contact Us</h2>
        <p>You can reach us at <a href="mailto:info@example.com">info@example.com</a></p>
    </body>
    </html>
`;

app.get('/trang-chu', (req, res) => {
    res.send(htmlContent)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})