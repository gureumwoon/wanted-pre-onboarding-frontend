import { Routes, Route } from 'react-router-dom';
import './App.css';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
