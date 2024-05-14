const express = require('express')
const app = express()

const port = 3000

const products = [{name: "product1", price: 1}, {name: "product2", price: 2}]

app.get('/', (req, res)=> {
  res.send("Hola server")
})

app.get('/nuevaRuta', (req, res) => {
  res.json({"ip": "090234823"})
})

app.get('/products/:id', (req, res) => {
  let product = products.find(p => p.name == req.params.id)
  res.json(product)
})

app.listen(port, () => {
  console.log("App iniciada en el puerto: " +port)
})

