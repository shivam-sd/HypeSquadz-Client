import React from 'react'
import {Route , Routes} from "react-router-dom";
// import Hero from './pages/Hero/Hero';
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact"; 
import Services from './pages/Services/Services';
import ErrorPage from './Components/ErrorPage';
import Work from './pages/Work/Work';
import Home from "./pages/Home";
import Master from './Components/Master';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import AddWorkForm from './pages/AdminDashboard/AddWorkForm';
import EditWorkForm from './pages/AdminDashboard/EditWorkForm';
import AddImageForm from './pages/AdminDashboard/AddImageFrom';
import AdminLogin from './pages/AdminDashboard/AdminLogin';
import ProtectedRoute from './helper/ProtectedRoute';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Master />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/work' element={<Work />} />
        <Route path='/contact' element={<Contact />} />
        </Route>
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/admindashboard' element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path='/admin-work-create' element={<ProtectedRoute><AddWorkForm /></ProtectedRoute>} />
        <Route path='/admin-work-update/:id' element={<ProtectedRoute><EditWorkForm /></ProtectedRoute>} />
        <Route path='/admin-image-upload' element={<ProtectedRoute><AddImageForm /></ProtectedRoute>} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
