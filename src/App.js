import './App.css';
import "./sb-admin-2.min.css"

import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './sb-admin-site/Login';
import Portal from './sb-admin-site/Portal';
import Userlist from './sb-admin-site/dashboard/Userlist';
import UserCreate from './sb-admin-site/dashboard/UserCreate';
import UserView from './sb-admin-site/dashboard/UserView';
import UserEdit from './sb-admin-site/dashboard/UserEdit';
import SignUp from './sb-admin-site/SignUp';






function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/portal" element={<Portal/>}>
      <Route path="user-list" element={<Userlist/>}/>
      <Route path="user-create" element={<UserCreate/>}/>
      <Route path="user-view/:id" element={<UserView/>}/>
      <Route path="user-edit/:id" element={<UserEdit/>}/>
      </Route> 
    </Routes>
    </BrowserRouter>
 
  );
}

export default App;
