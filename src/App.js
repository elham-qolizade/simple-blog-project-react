
import './App.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from "./pages/Home"
import Login from './pages/Login';
import CreatePost from './pages/createPost';
import { useState } from 'react';

function App() {

  const [isAuth, setIsAuth] = useState(false);


  return (
    <div className="App">

      <Router>

        <nav>
          <Link to="/" > Home</Link>
          <Link to="/createPost">CreatePost</Link>
          <Link to="/Login" >login</Link>


        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
          <Route path='/createPost' element={<CreatePost />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
