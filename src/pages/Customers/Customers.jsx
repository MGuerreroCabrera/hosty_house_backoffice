import AddRecordRow from "../../components/AddRecordRow/AddRecordRow";
import PageTitle from "../../components/PageTitle/PageTitle";
import Records from "../../components/Records/Records";
import "./Customers.css";

const Customers = () => {
  return (
    <>
      <PageTitle title="Clientes"/>
      <AddRecordRow/>
      <Records apiEndpoint={"http://localhost:3000/api/v1/customers"}/>
    </>
  )
}

export default Customers