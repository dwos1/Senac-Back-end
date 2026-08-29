import express from 'express'

const app = express()

//função callbck
app.get('/busca', (req, res) => {
    console.log(req)
  res.send('Hello World')
})

app.get('/busca/:id', (req, res) => {
    const numero = req.params.id
    console.log(numero)
    const mensagem = `O número requisitado é: ${numero}`
  res.send(mensagem)
})

app.listen(3000, () => {
  console.log('Server is running on http://127.0.0.1:3000')
})