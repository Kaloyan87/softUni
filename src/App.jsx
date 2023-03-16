import './App.css';
import {Navigate, Route, Routes} from "react-router";
import LoginPage from "./pages/public/LoginPage";
import RegisterPage from "./pages/public/RegisterPage";
import HomePage from "./pages/protected/HomePage";

function App() {
    return (
        <>
          {/*<Navbar isLoginStatus={isLogin} userName={userName} />*/}

          {/*{isLogin ? (*/}
          {/*    <Routes>*/}
          {/*      <Route path="/" element={<Navigate to="/home" replace={true} />} />*/}
          {/*      /!*<Route path="/home" element={<HomePage />} />*!/*/}
          {/*      /!*<Route path="/account" element={<Account />} />*!/*/}
          {/*      <Route*/}
          {/*          path="/login"*/}
          {/*          element={<Navigate to="/home" replace={true} />}*/}
          {/*      />*/}
          {/*      <Route*/}
          {/*          path="/registration"*/}
          {/*          element={<Navigate to="/home" replace={true} />}*/}
          {/*      />*/}
          {/*      <Route path="*" element={<h1>You found page 404 (:</h1>} />*/}
          {/*    </Routes>*/}
          {/*) : (*/}
              <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/home" element={<HomePage />}/>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/registration" element={<RegisterPage />} />
                <Route path="/user" element={<Navigate to="/login" replace={true} />}/>
                <Route path="*" element={<h1>You found page 404 (:</h1>} />
              </Routes>
          {/*)}*/}
        </>
    );
}

export default App;
