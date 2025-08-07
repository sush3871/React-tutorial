import { useState, useEffect } from "react";

const userList = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("failed to fetch Data");
                }
                return response.json();
            })
            .then((data) => {
                setUsers(data)
            })
            .then((error) => {
                setError(error)
            })
    }, []);

    return (

        <div>
            <h1>Users list </h1>

            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default userList