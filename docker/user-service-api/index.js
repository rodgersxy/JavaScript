const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json({
  name: 'John Doe',
  age: 30,
  email: 'jdoe@me.com'
}))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})