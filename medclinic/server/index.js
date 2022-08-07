const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

const db = mysql.createPool({
    host: 'mysqlserver.cfe3iex6wkfl.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'arima1995',
    database: 'dbmedclinic'
})

app.use(cors())
app.use(express.json())

app.post('/register', (req, res) => {
    const {nome} = req.body;
    const {data_nascimento} = req.body;
    const {email} = req.body;
    const {cep} = req.body;
    const {rua} = req.body;
    const {numero} = req.body;
    const {bairro} = req.body;
    const {cidade} = req.body;

    let SQL = "INSERT INTO pacientes (nome, data_nascimento, email, cep, rua, numero, bairro, cidade) VALUES (?,?,?,?,?,?,?,?)";

    db.query(SQL, [nome, data_nascimento, email, cep, rua, numero, bairro, cidade], (err, result)  => {
        console.log(err);  
    })

})

app.get('/getCard', (req, res) => {
    let SQL = "SELECT * FROM pacientes";

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
})

app.listen(3001, () =>{
    console.log('Server running at http://localhost:3001')
})

