import "./Features.css";
import PageTemplate from "../../components/PageTemplate/PageTemplate";

const Features = () => {
  return (
    <PageTemplate title="Características de viviendas" apiEndpoint="http://localhost:3000/api/v1/features" />
  )
}

export default Features