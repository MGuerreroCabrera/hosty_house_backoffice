import "./Reservations.css";
import AddRecordRow from "../../components/AddRecordRow/AddRecordRow";
import PageTitle from "../../components/PageTitle/PageTitle";
import Records from "../../components/Records/Records";


const Reservations = () => {
  return (
    <>
      <PageTitle title="Reservas" />
      <AddRecordRow />
      <Records apiEndpoint={"http://localhost:3000/api/v1/reservations"}/>
    </>
  )
}

export default Reservations