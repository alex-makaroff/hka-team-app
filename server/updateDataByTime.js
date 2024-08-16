const cron = require('node-cron');
const {Client} = require("pg");
require('dotenv').config()

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


// Запускаем задачу каждый день в 00:00
cron.schedule('0 0 * * *', async () => {
    console.log('Запуск обновления данных...');

    await updateDatabase();

    console.log('Обновление данных завершено.');
});



async function updateDatabase() {


    try {
        const { rows: users } = await client.query('SELECT tg_id, daily_reward_day, is_daily_reward_collected FROM users');

        for (const user of users) {
            let newDailyRewardDay;

            if (user.is_daily_reward_collected) {
                // Если награда была получена, увеличиваем поле daily_reward_day на 1
                newDailyRewardDay = user.daily_reward_day + 1;
                console.log('+1');
            } else {
                // Если награда не была получена, сбрасываем поле daily_reward_day в 1
                newDailyRewardDay = 1;
            }

            await client.query(
                'UPDATE users SET daily_reward_day = $1, is_daily_reward_collected = false WHERE tg_id = $2',
                [newDailyRewardDay, user.tg_id]
            );

            console.log(`Пользователь с tg_id ${user.tg_id} обновлен: daily_reward_day = ${newDailyRewardDay}`);

        }

    } catch (err) {
        console.error('Ошибка при обновлении данных: daily_reward_day', err);
    }

    try {
        // Выполняем SQL-запрос для обновления поля
        const res = await client.query('UPDATE users SET is_daily_reward_collected = false');
        console.log(`Обновлено строк: ${res.rowCount}`);
    } catch (err) {
        console.error('Ошибка при обновлении данных:', err);
    }



}
