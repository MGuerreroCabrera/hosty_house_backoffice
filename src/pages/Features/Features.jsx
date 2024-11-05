import "./Features.css";
import ListRecordsTemplate from "../../components/ListRecordsTemplate/ListRecordsTemplate";

const Features = () => {
  return (
    <ListRecordsTemplate title="Caracterísiticas de viviendas" apiEndpoint={"http://localhost:3000/api/v1/features"}/>
  )
}

export default Features