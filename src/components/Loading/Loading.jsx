import "./Loading.css";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="loading-container">
      <FaSpinner className="spinner" />
      <p>Loading...</p>
    </div>
  )
}

export default Loading