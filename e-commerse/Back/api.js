const express = require("express")
const cors = require('cors');
const mysql = require('mysql');
const app = express()
app.use(express.json({type: "*/*"})) // Para JSON
app.use(express.urlencoded({ extended: true })); // Para datos de formulario
app.use(cors())
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'bd_proyecto_tienda'
  });
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
  } else {
    console.log('Conexión exitosa a la base de datos MySQL');
  }
})
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// app.get('/', (req, res) => {
//   res.send("HOME")
// })
app.get('/', (req, res) => {
    connection.query("SELECT * FROM products", (err, product) => {
    if(!err){
      res.json(product)
    } else {
      console.log(err);
    }
  })
})
app.get('/classic', (req, res) => {
  const category = 'classic'
  connection.query('SELECT * FROM products WHERE category = ?', [category], (err, user) => {
  if(!err){
    res.json(user)
  } else {
    console.log(err);
  }
})
})
app.get('/elegant', (req, res) => {
  const category = 'elegant'
  connection.query('SELECT * FROM products WHERE category = ?', [category], (err, user) => {
  if(!err){
    res.json(user)
  } else {
    console.log(err);
  }
})
})
app.get('/folkloric', (req, res) => {
  const category = 'folkloric'
  connection.query('SELECT * FROM products WHERE category = ?', [category], (err, user) => {
  if(!err){
    res.json(user)
  } else {
    console.log(err);
  }
})
})
app.get('/bussines', (req, res) => {
  const category = 'bussines'
  connection.query('SELECT * FROM products WHERE category = ?', [category], (err, user) => {
  if(!err){
    res.json(user)
  } else {
    console.log(err);
  }
})
})
app.get('/formal', (req, res) => {
  const category = 'formal'
  connection.query('SELECT * FROM products WHERE category = ?', [category], (err, user) => {
  if(!err){
    res.json(user)
  } else {
    console.log(err);
  }
})
})
app.get('/sport', (req, res) => {
  const category = 'sport'
  connection.query('SELECT * FROM products WHERE category = ?', [category], (err, user) => {
  if(!err){
    res.json(user)
  } else {
    console.log(err);
  }
})
})
// app.post('/data', (req, res) => {
//   let dataUserJSON = (req.body);
//   let id = 0
//   let title_product = dataUserJSON.title
//   let img_product = dataUserJSON.product
//   let price = dataUserJSON.price
//   let description = dataUserJSON.description
//   let quantity = parseInt(dataUserJSON.quantity)
//   for (let i = 0; i = id; i++) {
//     return id = i
//   }
//   let values = [ id, title_product, img_product, price, description, quantity]
//   const sql = "INSERT INTO products (id, title_product, img_product, price, description, quantity) VALUES (?, ?, ?, ?, ?, ?)"
//     connection.query(sql, values, (err, rows) => {
//         if(!err){
//             res.send(rows)
//         } else {
//             console.log(err);
//         }
//     })
// })
const port = process.env.port || 5173
app.listen(port, () => console.log(`Listening port ${port}...`))