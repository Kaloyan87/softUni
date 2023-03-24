import './App.css';
import {Navigate, Route, Routes, useNavigate} from "react-router";
import LoginPage from "./pages/public/LoginPage";
import RegisterPage from "./pages/public/RegisterPage";
import HomePage from "./pages/protected/HomePage";
import RecipesList from "./pages/protected/RecipesList";
import {useEffect} from "react";
import Header from "./components/organisms/layout/Header";

function App() {

    const navigate = useNavigate()
    const token = JSON.parse(window.localStorage.getItem('token') || 'null')


    //get token
    useEffect(() => {
        if(token && (window.location.href = '/login')) {
            navigate(`/home`)
        }
    }, [token,navigate])

    return (
        <>
            {token && <Header/>}
            <main>
                <Routes>
                    <Route path="/" element={<Navigate to="/login"/>}/>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/registration" element={<RegisterPage/>}/>
                    <Route path="/recipes" element={<RecipesList  />}/>
                    <Route path="*" element={<h1>You found page 404 (:</h1>}/>
                </Routes>
            </main>
        </>
    );
}

export default App;
