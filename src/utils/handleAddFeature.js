import loadData from "./loadData";

const handleAddFeature = async (formData, dispatch, apiEndpoint, currentPage, limit) => {
    
    try {
        // Llamada a la api
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                "Authorization": "Bearer ${localStorage.getItem('hostyHouseToken')}"
            },
            body: formData
        });   
        
        // Comprobar respuesta
        if(response.ok) {
            // Llamar a la función loadData para recargar los datos
            loadData(dispatch, apiEndpoint, currentPage, limit);
        } else {
            console.log("Error al agregar la característica");
        }
    } catch (error) {
        console.error("Error al agregar la característica", error);
    }
};

export default handleAddFeature;