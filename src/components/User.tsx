import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState<UserInterface>();

    fetch(`https://jsonplaceholder.typicode.com/users/${id as string}`)
        .then((response) => response.json())
        .then((data) => setUser(data as UserInterface))
        .catch((err) => console.log(err));

    return (
        <div>
            <h2>User Information</h2>

            <p>
                <b>{user?.username}</b>
            </p>

            <p>
                <b>Email:</b> {user?.email}
            </p>

            <p>
                <b>City:</b>{user?.address.city}
                <br/>
                <b>Street:</b>{user?.address.street}
            </p>

            <p>
                <b>Phone:</b> {user?.phone}
            </p>

            <Link to={`/yosy/assignment/${user?.id as number}`}>User assignment</Link>
        </div>
    );
};

export default User;
