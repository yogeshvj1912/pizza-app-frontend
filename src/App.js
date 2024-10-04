import './App.css';
import "./sb-admin-2.min.css"

import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './sb-admin-site/Login';
import Portal from './sb-admin-site/Portal';
import Userlist from './sb-admin-site/dashboard/Userlist';
import UserCreate from './sb-admin-site/dashboard/UserCreate';
import SignUp from './sb-admin-site/SignUp';

import { AddProvider } from './AddContext';
import Card from './sb-admin-site/dashboard/cardItems/Card';
import Address from './sb-admin-site/dashboard/cardItems/Address';
import Payment from './sb-admin-site/dashboard/cardItems/Payment';
import DeliveryStatus from './sb-admin-site/dashboard/cardItems/DeliveryStatus';








function App() {
  return (
    <BrowserRouter>
   <AddProvider>
   <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      
      <Route path="/portal" element={<Portal/>}>
      <Route path="user-list" element={<Userlist/>}/>
      <Route path="user-create" element={<UserCreate/>}/>
      <Route path="add-to-cart" element={<Card/>}/>
      <Route path="address" element={<Address/>} />
      <Route path="payment" element={<Payment/>} />
      <Route path="deliver-status" element={<DeliveryStatus/>} />
      </Route> 
     
    </Routes>
   </AddProvider>
    </BrowserRouter>
 
  );
}

export default App;
