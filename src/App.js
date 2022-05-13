import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Home/Shared/Navbar/Navbar';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App max-w-7xl px-12 justify-center">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
   
    
    </div>
  );
}

export default App;
