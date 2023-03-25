import AllUsers from '../Admin/AllUsers'
import CreateUser from '../Admin/CreateUser';
import EditUser from './Component/EditUser';
import NavBar from './Component/NavBar';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
       
        <Route path="all" element={<AllUsers /> } />
        <Route path="/add" element={<CreateUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;