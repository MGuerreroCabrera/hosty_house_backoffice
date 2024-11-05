import ListRecordsTemplate from "../../components/ListRecordsTemplate/ListRecordsTemplate";
import "./Customers.css";

const Customers = () => {
  return (
    <ListRecordsTemplate title="Clientes" apiEndpoint={"http://localhost:3000/api/v1/customers"}/>
  )
}

export default Customers