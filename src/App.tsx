import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Todo from './pages/Todo';
import Home from './pages/Home';

function App() {
  const token = localStorage.getItem("access_token");
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={token ? <Navigate to="/todo" /> : <SignUp />} />
        <Route path='/signin' element={token ? <Navigate to="/todo" /> : <SignIn />} />
        <Route path='/todo' element={token ? <Todo /> : <Navigate to="/signin" />} />
      </Routes>
    </div>
  );
}

export default App;
