import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { SidebarData } from "../../../data/SidebarData";

const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <div className="navbar">
            <Link to="#" className="menu-bars">
                <FaBars onClick={showSidebar}/>
            </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items">
                <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                        <IoClose onClick={showSidebar}/>
                    </Link>
                </li>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path} onClick={showSidebar}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav> 
        </>
    )
}

export default Sidebar