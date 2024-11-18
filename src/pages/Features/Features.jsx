import "./Features.css";
import PageTitle from "../../components/PageTitle/PageTitle";
import AddRecordRow from "../../components/AddRecordRow/AddRecordRow";
import Records from "../../components/Records/Records";
import FeatureForm from "../../components/FeatureForm/FeatureForm";
import { useReducer } from "react";
import { recordsReducer } from "../../Reducers/recordsReducer";
import { initialState } from "../../utils/initialState";
import handleAddFeature from "../../utils/handleAddFeature";

const Features = () => {
  const [state, dispatch] = useReducer(recordsReducer, initialState);

  const { currentPage, limit } = state;

  const apiEndpoint = "http://localhost:3000/api/v1/features";

  return (
    <>
      <PageTitle title="Características de las viviendas" />
      <AddRecordRow 
        FormComponent={FeatureForm}
        onSubmit={(formData) => handleAddFeature(formData, dispatch, apiEndpoint, currentPage, limit)} 
      />
      <Records apiEndpoint={apiEndpoint} state={state} dispatch={dispatch} />
    </>
  );
};

export default Features;