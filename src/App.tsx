import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Todo from './pages/Todo';
import Home from './pages/Home';

function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    if (token) {
      navigate("/todo");
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path="/todo" element={!token ? <Navigate to="/signin" /> : <Todo />} />
      </Routes>
    </div>
  );
}

export default App;
