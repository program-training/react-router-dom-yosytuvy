import { Outlet, useNavigate } from "react-router-dom";

const HomeButton = () => {
    const navigate = useNavigate();

    return (
        <>
            <button onClick={() => navigate("/")}>Home</button>
            <Outlet />
        </>
    );
};

export default HomeButton;
