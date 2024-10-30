import PageTemplate from "../../components/PageTemplate/PageTemplate";
import "./Housings.css";

const Housings = () => {
  return (
    <PageTemplate title="Viviendas" apiEndpoint="http://localhost:3000/api/v1/housings" />
  )
}

export default Housings