// Estado inicial de la página
export const initialState = {
    data: [],
    loading: true,
    error: null,
    page: 1,
    totalRecords: 0
}

// Crear el reducer
export const ListRecordReducer = (state, action) => {
    // Comprobar la acción y actualizar el estado
    switch(action.type){
        case "FETCH_INIT":
            return {...state, loading: true, error: null};
        case "FETCH_SUCCESS":
            return {
                ...state,
                data: action.payload.data,
                totalRecords: action.payload.totalRecords,
                loading: false
            };
        case "FETCH_FAILURE":
            return {...state, loading: false, error: action.payload.error};
        case "SET_PAGE":
            return {...state, page: action.payload.page};
        case 'DELETE_RECORD':
            return {
                ...state,
                data: state.data.filter(item => item.id !== action.payload.id),
                totalRecords: state.totalRecords - 1,
            };
        default:
            throw new Error("Tipo de operación no soportada");            
    }
}