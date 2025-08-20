async function connect() {
    const { Pool } = require("pg");
    require('dotenv').config();
    
    const pool = new Pool({
        user: process.env.USER_NAME,
        host: process.env.HOST_NAME,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.PORT_NUMBER
    })
    
    module.exports = pool;

    const client = await pool.connect(); // Conectandooo
    console.log("Connection pool created successfully!")

    const resdb = await client.query("SELECT now()");
    console.log(resdb.rows[0]); // Tomando a primeira posição do array de onde virá o tempo do banco de dados.
    client.release()

  // Podemos salvar nosso pool em uma conexão global. Então podemos executar o "if" como no início deste arquivo
    global.connection = pool;

    return pool.connect()
}

connect(); // Lembrando/Lembrete: temos que carregar/importar o arquivo db.js no nosso back-end index.js.


// Função para listar clientes
async function selectCustomers() {
    // Estabelecer conexão
    const client = await connect();

    // Enviar comando sql para o banco de dados
    const res = await client.query("SELECT * FROM clientes");

    return res.rows;
}

// Função para listar um cliente
async function selectCustomer(id) {
    // Estabelecer conexão
    const client = await connect();

    // Envia comando sql para o banco de dados
    // const res = await client.query("SELECT * FROM clientes WHERE ID=" +id); // Isso pode causar injeção de SQL
    const res = await client.query("SELECT * FROM clientes WHERE ID=$1", [id]); // Declaração preparada ou consulta preparada

    return res.rows;
}

// Função para inserir clientes
async function insertCustomer(customer) {
   // Estabelecer conexão
    const client = await connect();
    // query
    // Obs.: O "id" é incremental. Não precisa ser passado
    const sql = "INSERT INTO Clientes(nome, email, senha) VALUES ($1, $2, $3)";
    // parâmetros que devem ser injetados na consulta
    const values = [customer.nome, customer.email, customer.senha];
    // não tem retorno
    await client.query(sql, values)
}

// Função para editar/atualizar clientes
async function updateCustomer(id, customer) {
    // Estabelecer conexão
    const client = await connect();
    // query
    const sql = "UPDATE clientes SET nome=$1, idade=$2, uf=$3 WHERE id=$4";
    // parâmetros que devem ser injetados na consulta
    const values = [customer.nome, customer.idade, customer.uf, id];
    // não tem retorno
    await client.query(sql, values);
}

// Função para excluir clientes
async function deleteCustomer(id) {
   // Estabelecer conexão
    const client = await connect();
    // parâmetros que devem ser injetados na consulta
    const sql = "DELETE FROM clientes WHERE id=$1";
    const values = [id];
    // não tem retorno
    await client.query(sql, values)
}

// Exportando cada função para que a gente consiga as usar no nosso backend!!!
module.exports = {
    selectCustomers,
    selectCustomer,
    insertCustomer,
    updateCustomer,
    deleteCustomer
}