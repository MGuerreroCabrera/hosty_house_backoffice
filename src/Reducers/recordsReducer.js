import { initialState } from "../utils/initialState";
  
export const recordsReducer = (state, action) => {
switch (action.type) {
    case "SET_DATA":
    return {
        ...state,
        data: action.payload.data,
        totalPages: action.payload.totalPages,
        loading: false,
    };
    case "LOADING":
    return {
        ...state,
        loading: true,
    };
    case "PREVIOUS_PAGE":
    return {
        ...state,
        currentPage: state.currentPage - 1,
    };
    case "NEXT_PAGE":
    return {
        ...state,
        currentPage: state.currentPage + 1,
    };
    default:
    return state;
}
};
  