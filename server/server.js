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

app.get('/api/user/:id/shishaCount', async (req, res) => {
    const {id} = req.params

    try {
        const result = await client.query('SELECT shisha_count FROM users WHERE tg_id = $1', [id]); // Запрос к базе данных
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.post('/api/user/:id/shishaCount', async (req, res) => {
    const {id} = req.params

    try {
        const result = await client.query('UPDATE users SET shisha_count = shisha_count + 1 WHERE tg_id = $1 RETURNING shisha_count', [id]); // Запрос к базе данных
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.get('/api/user/:id/dailyRewardDay', async (req, res) => {
    const {id} = req.params

    try {
        const result = await client.query('SELECT daily_reward_day FROM users WHERE tg_id = $1', [id]); // Запрос к базе данных
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.get('/api/user/:id/isDailyRewardCollected', async (req, res) => {
    const {id} = req.params
    try {
        const result = await client.query('SELECT is_daily_reward_collected FROM users WHERE tg_id = $1', [id]); // Запрос к базе данных
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.post('/api/user/:id/isDailyRewardCollected', async (req, res) => {
    const {id} = req.params

    try {
        const result = await client.query('UPDATE users SET is_daily_reward_collected = true WHERE tg_id = $1 RETURNING is_daily_reward_collected', [id]); // Запрос к базе данных
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.post('/api/user/:id/addMoney/:moneyCount', async (req, res) => {
    const {id, moneyCount} = req.params
    const token = req.headers.authorization;

    if(token !== process.env.REQ_TOKEN) {
        res.status(401).send('Token Incorrect');
        return
    }

    try {
        const result = await client.query('UPDATE users SET money = money + $1 WHERE tg_id = $2 RETURNING money', [moneyCount, id]); // Запрос к базе данных
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.post('/api/user/:id/changeAva/:avaName', async (req, res) => {
    const {id, avaName} = req.params

    try {
        const result = await client.query('UPDATE users SET avatar_name = $1 WHERE tg_id = $2 RETURNING avatar_name', [avaName, id]); // Запрос к базе данных
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.get('/api/user/:id/ava', async (req, res) => {
    const {id} = req.params

    try {
        const result = await client.query('SELECT avatar_name FROM users WHERE tg_id = $1', [id]); // Запрос к базе данных
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

