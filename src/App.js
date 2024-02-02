import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Users from './pages/Users';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import CreateUser from './pages/CreateUser';
import SampleContextProvider from './context/SampleContext';

function App() {

  return (
    <BrowserRouter>
      <SampleContextProvider>
        <div className='flex-between p-3 bg-gray-500 text-white'>
          <p>CRUD</p>
          <Navbar />
        </div>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/users' element={<Users />} ></Route>
          <Route path='/users/add' element={<CreateUser />} ></Route>
          <Route path='/users/:userId' element={<CreateUser />} ></Route>
          <Route path="/home" element={<Navigate to="/" />} />

        </Routes>
      </SampleContextProvider>
    </BrowserRouter>

  );
}

export default App;
