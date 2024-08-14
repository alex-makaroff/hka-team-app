const express = require('express');
const { Client } = require('pg'); // для PostgreSQL, замените на подходящую библиотеку, если используете другую БД
require('dotenv').config()
const cors = require('cors');

const app = express();
const port = 5000;

// const corsOptions = {
//     origin: 'http://localhost:3000', // URL твоего React-приложения
//     optionsSuccessStatus: 200
// };

// app.use(cors(corsOptions));
app.use(cors());


// Настройка подключения к базе данных
const client = new Client({
    host: process.env.DB_HOST,
    user: 'postgres',
    password: process.env.DB_PASSWORD,
    database: 'hkateam',
    port: 5432,
});

client.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(err => console.error('Connection error', err.stack));

// Пример API для получения данных из базы данных
app.get('/api/users', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.get('/api/user/:id', async (req, res) => {
    const { id } = req.params
    try {
        const result = await client.query('SELECT * FROM users WHERE tg_id = $1', [id]); // Запрос к базе данных
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.get('/api/user/:id/friends', async (req, res) => {
    const { id } = req.params
    try {
        const result = await client.query('SELECT * FROM users WHERE ref_code = $1', [id]); // Запрос к базе данных
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.get('/api/leaderboard', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM users  ORDER BY money DESC'); // Запрос к базе данных
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


//
// export const getUserName = (tg_id=1072604443) => {
//     let userName
//
//     client.query(`SELECT user_name FROM users where tg_id = ${tg_id}`, (err, res) => {
//         if (err) {
//             console.error('err:', err);
//             return;
//         }
//         userName = res.rows[0].user_name;
//     });
//     return userName;
// }

