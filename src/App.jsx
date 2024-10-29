import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/404/404";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Features from "./pages/Features/Features";
import Housings from "./pages/Housings/Housings";
import Reservations from "./pages/Reservations/Reservations";
import Customers from "./pages/Customers/Customers";
import Users from "./pages/Users/Users";
import DashboardHome from "./pages/DashboardHome/DashboardHome";

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}>
          <Route path="features" element={<Features/>}/>
          <Route path="housings" element={<Housings/>}/>
          <Route path="reservations" element={<Reservations/>}/>
          <Route path="customers" element={<Customers/>}/>
          <Route path="users" element={<Users/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App