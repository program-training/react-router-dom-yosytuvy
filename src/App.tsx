import "./App.css";
import AllUsers from "./components/AllUsers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./components/User";
import UserAssignment from "./components/UserAssignment";
import AssignmentDetails from "./components/AssignmentDetails";
import Home from "./components/Home";
import ProductsComp from "./components/ProductsComp";
import HomeButton from "./components/HomeButton";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/yosy" element={<HomeButton />}>
                        <Route path="/yosy/products" element={<ProductsComp />} />
                        <Route path="/yosy/users" element={<AllUsers />} />
                        <Route path="/yosy/user/:id" element={<User />} />
                        <Route path="/yosy/assignment/:id" element={<UserAssignment />}/>
                        <Route path="/yosy/user_assignment/:id" element={<AssignmentDetails />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
