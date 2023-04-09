import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' //as Router
import AdminLayout from './components/layouts/AdminLayout';
import AddCategory from './components/AddCategory';
import Register from './pages/Register';
import Login from './pages/Login';
import { ChakraProvider } from '@chakra-ui/react'
import { Toaster } from 'react-hot-toast';
import GlobalProvider from './GlobalContext';
import InventoryDashboard from './pages/InventoryDashboard';
import AllCategory from './pages/AllCategory';




function App() {
  return (

    <ChakraProvider><BrowserRouter>
      <GlobalProvider>


        <Routes>
       
        <Route path="/" element={<AdminLayout>
            <InventoryDashboard />
          </AdminLayout>} />
          <Route path="/add_product" element={<AdminLayout>
            <AddCategory />
          </AdminLayout>} />
          <Route path="/add_product/:id" element={<AdminLayout>
            <AddCategory />
          </AdminLayout>} />
          <Route path="/c_list" element={<AdminLayout>
            <AllCategory />
          </AdminLayout>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />


        </Routes>
      </GlobalProvider>  </BrowserRouter>  <Toaster position="bottom-center"
        reverseOrder={false} />   </ChakraProvider>



  );
}

export default App;
