import { Route, Routes } from 'react-router-dom';
import './App.css';
import ForgotPassword from './components/Auth/ForgotPassword';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import AddStudent from './components/Dashbord/AddStudent';
import ManageStudents from './components/Dashbord/ManageStudents';
import Home from './components/Home';
import RequireAuth from './shared/RequireAuth';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }>
          <Route index element={<AddStudent />} />
          <Route path="manage-students" element={<ManageStudents />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
