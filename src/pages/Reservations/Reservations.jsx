import PageTemplate from "../../components/PageTemplate/PageTemplate";
import "./Reservations.css";

const Reservations = () => {
  return (
    <PageTemplate title="Reservas" apiEndpoint="http://localhost:3000/api/v1/reservations" />
  )
}

export default Reservations