import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllUsers = () => {
    const [users, setUsers] = useState<UserInterface[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data as UserInterface[]))
        .catch((err) => console.log(err));
    }, [])

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/yosy/user/${user.id}`}>{user.username}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllUsers;
