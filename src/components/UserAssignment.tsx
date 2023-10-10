import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const UserAssignment = () => {
    const { id } = useParams();
    const [assignments, setAssignments] = useState<AssignmentIterface[]>([]);

    fetch(`https://jsonplaceholder.typicode.com/user/${id as unknown as string}/todos`)
    .then(res => res.json())
    .then(data => setAssignments(data as AssignmentIterface[]))
    .catch(err => console.log(err))

    return (
        <div>
            <h1>Assignments</h1>
            <ul>
                {assignments.map((assignment) => (
                    <li key={assignment.id}>
                        <Link to={`/yosy/user_assignment/${assignment.id}`}>{assignment.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserAssignment;
