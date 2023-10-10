import { useState } from "react";
import { useParams } from "react-router-dom";

const AssignmentDetails = () => {
    const { id } = useParams();
    const [assignment, setAssignment] = useState<AssignmentIterface>();

    fetch(`https://jsonplaceholder.typicode.com/todos/${id as string}`)
        .then((response) => response.json())
        .then((data) => {
            setAssignment(data as AssignmentIterface);
        })
        .catch((err) => console.log(err));
    return (
        <div>
            <h2>Assignment Information</h2>

            <p>
                <b>User ID:</b>{assignment?.userId}
            </p>

            <p>
                <b>Assignment:</b> {assignment?.title}
            </p>

            <p>
                {assignment?.completed ? 'Complete' : 'Not complete'}
            </p>
        </div>
    );
};

export default AssignmentDetails;
