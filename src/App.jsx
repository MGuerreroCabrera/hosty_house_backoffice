import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/404/404";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App