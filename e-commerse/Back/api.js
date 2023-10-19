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
    console.log('Successful connection to the database of PRODUCTS 🛒');
  }
})
const connectionUsers = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'bd_proyecto_tienda_users'
  });
  connectionUsers.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
  } else {
    console.log('Successful connection to the database of USERS 🙎‍♂️');
  }
})

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

app.get('/validate', (req, res) => {
  let emails = "SELECT email FROM users"
  connectionUsers.query(emails, (err, email) => {
    if(!err){
      res.json(email)
    } else {
      console.log(err);
    }
  })
})
app.get('/pass', (req, res) => {
  let password = "SELECT password FROM users"
  connectionUsers.query(password, (err, password) => {
    if(!err){
      res.json(password)
    } else {
      console.log(err);
    }
  })
})

app.post('/signIn', (req, res) => {
  let valuesJSON = (req.body);
  let id = 0
  let full_name = valuesJSON.fullName
  let email = valuesJSON.email
  let password = valuesJSON.password
  for (let i = 0; i = id; i++) {
    return id = i
  }
  let values = [ id, full_name, email, password]
  
  //DATA VALIDATE
  let buscar = "SELECT * FROM users WHERE email = '"+email+"' "
  connectionUsers.query(buscar, (err, user) => {
    if (err){
      throw err
    } else {
      if(user.length > 0 || password === ""){
        console.log("No se puede registrar, usuario ya existe");
      } else {
        const sql = "INSERT INTO users (id, full_name, email, password) VALUES (?, ?, ?, ?)"
        connectionUsers.query(sql, values, (err, user) => {
          if(!err){
              res.send(user)
          } else {
              console.log(err);
          }
        })
      }
    }
  })

})
const port = process.env.port || 5173
app.listen(port, () => console.log(`Listening port ${port}...`))