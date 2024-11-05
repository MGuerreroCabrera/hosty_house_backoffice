import "./Housings.css";
import AddRecordRow from "../../components/AddRecordRow/AddRecordRow";
import PageTitle from "../../components/PageTitle/PageTitle";
import Records from "../../components/Records/Records";

const Housings = () => {
  return (
    <>
      <PageTitle title="Viviendas"/>
      <AddRecordRow/>
      <Records apiEndpoint={"http://localhost:3000/api/v1/housings"}/>
    </>
  )
}

export default Housings