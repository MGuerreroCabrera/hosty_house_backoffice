// Estado inicial de la página
export const initialState = {
    data: [],
    loading: true,
    error: null,
    page: 1,
    totalRecords: 0
}

// Crear el reducer
export const PageTemplateReducer = (state, action) => {
    // Comprobar la acción y actualizar el estado
    switch(action.type){
        case "FETCH_INIT":
            return {...state, loading: true, error: null};
        break;
        case "FETCH_SUCCESS":
            return {
                ...state,
                data: action.payload.data,
                totalRecords: action.payload.totalRecords,
                loading: false
            }
        break;
        case "FETCH_FAILURE":
            return {...state, loading: false, error: action.payload.error};
        break;
        case "SET_PAGE":
            return {...state, page: action.payload.page};
        default:
            throw new Error("Tipo de operación no soportada");
            
    }
}