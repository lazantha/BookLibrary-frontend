
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Header/NavBar';
import BookPage from './Pages/BookPage';
import BorrowPage from './Pages/BorrowPage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import ProfilePage from './Pages/ProfilePage';



function App() {
  return (
    <Router>

    <div className="App">
    <NavBar />
      <Routes>

          <Route path='/'  exact element={<HomePage/>} />
          <Route path='/books' element={<BookPage/>} />
          <Route path='/borrow' element={<BorrowPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/profile' element={<ProfilePage/>} />

          
          

      </Routes> 

    </div>
    

    </Router> 

  );
}

export default App;
