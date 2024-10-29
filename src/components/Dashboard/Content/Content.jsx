import { Outlet } from "react-router-dom";
import "./Content.css";

const Content = () => {
  return (
    <main className="content-container">
        <Outlet/>
    </main>
  )
}

export default Content