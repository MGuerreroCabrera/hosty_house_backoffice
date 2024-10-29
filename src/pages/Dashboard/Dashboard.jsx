import "./Dashboard.css";
import Header from "../../components/Dashboard/Header/Header";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import DashboardHome from "../DashboardHome/DashboardHome";

const Dashboard = () => {
  return (
    <>
      <Header/>
      <div className="dashboard">
        <Sidebar/>
        <DashboardHome />
        <Outlet/>
      </div>
    </>
  )
}

export default Dashboard