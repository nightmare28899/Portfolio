const initialState = {
    changeLanguage: false,
}

const globalReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case "CHANGE_LANGUAGE":
            return {
                ...state,
                changeLanguage: action.payload,
            };
        default:
            return state;
    }
};

export default globalReducer;
