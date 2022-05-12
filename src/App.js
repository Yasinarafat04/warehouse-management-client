
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/User/Login'
import Register from './Components/User/Register';
import { ToastContainer } from 'react-toastify';
import useUser from './Hook/useUser';
import Inventory from './Components/Inventory/Inventory';
import RequireAuth from './Components/RequireAuth'
import ManageInventory from './Components/Inventory/ManageInventory';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Admin from './Components/AdminPage/Admin';
import Loading from './Components/loading/Loading';
import { useState } from 'react';
import Contact from './Components/Contact/Contact'
// import Notfound404 from './Components/Notfound404';

function App() {
  const user = useUser()

  const [loading, setloading] = useState(true);
  const loadingHandler = () => {
    setTimeout(() => {
      setloading(false)
    }, 2000)
  }
  loadingHandler()
  if (loading) {
    return <Loading />
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='*' element={<Notfound404 />} /> */}
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/inventory' element={<RequireAuth>
          <Inventory />
        </RequireAuth>
        } />
        <Route path='/inventory/:id' element={<RequireAuth>
          <ManageInventory />
        </RequireAuth>
        } />
        <Route path='/about' element={<div className='page-about'>
          <About />
        </div>} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/profile' element={<RequireAuth>
          <Admin />
        </RequireAuth>} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <ToastContainer />

      <Footer />
    </div>
  );
}

export default App;
