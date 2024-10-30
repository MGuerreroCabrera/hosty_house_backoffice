import { FaHouse } from "react-icons/fa6";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { BsHousesFill } from "react-icons/bs";
import { FaFolderOpen, FaUsers, FaUserShield } from "react-icons/fa";

export const SidebarData = [
    {
        title: "Home",
        path: "",
        icon: <FaHouse />,
        cName: "nav-text",
        admin: false
    },
    {
        title: "Características vivienda",
        path: "features",
        icon: <MdOutlineFeaturedPlayList />,
        cName: "nav-text",
        admin: false
    },
    {
        title: "Viviendas",
        path: "housings",
        icon: <BsHousesFill />,
        cName: "nav-text",
        admin: false
    },
    {
        title: "Reservas",
        path: "reservations",
        icon: <FaFolderOpen />,
        cName: "nav-text",
        admin: false
    },
    {
        title: "Clientes",
        path: "customers",
        icon:  <FaUsers />,
        cName: "nav-text",
        admin: false
    },    
    {
        title: "Usuarios",
        path: "users",
        icon: <FaUserShield />,
        cName: "nav-text",
        admin: true
    }
]