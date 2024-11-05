import "./Features.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import AddRecordRow from "../../components/AddRecordRow/AddRecordRow";
import Records from "../../components/Records/Records";

const Features = () => {
  return (
    <>
      <PageTitle title="Características de las viviendas"/>
      <AddRecordRow/>
      <Records apiEndpoint={"http://localhost:3000/api/v1/features"}/>
    </>
  )
}

export default Features