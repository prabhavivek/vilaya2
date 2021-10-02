import AuthActionType from '../actionTypes/AuthActionType'
const INITIAL_STATE = {
    emailId: "",
    firstName: "",
    lastName: "",
    userName: ""
};
export function authReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case AuthActionType.HANDLE_CHANGE:
            return { ...state, [action.payload.name]:action.payload.value}
        default: return state;
    }
}
