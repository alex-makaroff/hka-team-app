import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Запрос к API для получения данных
        axios.get('http://89.223.126.50:5000/api/users')
            .then(response => {
                setUsers(response.data); // Обновление состояния с данными
                setLoading(false); // Снимаем состояние загрузки
            })
            .catch(error => {
                setError(error.message); // Обработка ошибок
                setLoading(false); // Снимаем состояние загрузки
            });
    }, []); // Пустой массив зависимостей, чтобы запрос выполнился только один раз при монтировании компонента

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.tg_id}>{user.user_name} (ID: {user.tg_id})</li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;
