require("dotenv").config(); 

const pool = require('./db');

const port = process.env.PORT;

const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: "Funcionando!!!"
    })
})

// Rota para listar um cliente
app.get('/clientes/:id', async (req, res) => {
    const cliente = await db.selectCustomer(req.params.id);

    res.json(cliente);
})

// Rota para listar todos os clientes
app.get('/Clientes', async (req, res) => {
    const clientes = await db.selectCustomers();

    res.json(clientes);
})

app.post('/api/cadastro', async (req, res) => {
  const { nome, email, senha } = req.body;
  console.log(req.body);
  try {
    await pool.query(
      'INSERT INTO "Clientes" (nome, email, senha) VALUES ($1, $2, $3)',
      [nome, email, senha]
    );
    res.status(201).json({ mensagem: 'Cadastro realizado!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao cadastrar.' });
  }
});

// Rota para editar/atualizar clientes
app.patch("/clientes/:id", async (req, res) => {
    await db.updateCustomer(req.params.id, req.body)
    res.sendStatus(200) // 200 é o código de atualização
})

// Rota para excluir cliente
app.delete("/clientes/:id", async (req, res) => {
    await db.deleteCustomer(req.params.id)
    res.sendStatus(204) // 204 é o código para exclusão
})

app.listen(port);

console.log("Backend is running")