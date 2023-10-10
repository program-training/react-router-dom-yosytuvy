import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return <>
    <button onClick={()=>navigate('/yosy/users')}>Users</button>
    <button onClick={()=>navigate('/yosy/products')}>Products</button>
    </>
}

export default Home;