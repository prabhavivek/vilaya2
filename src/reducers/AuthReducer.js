import AuthActionType from '../actionTypes/AuthActionType'
const INITIAL_STATE = {
    emailId: "",
    firstName: "",
    lastName: "",
    userName: "",
    signUpSpinner:false,
    signUpResponse:{}
};
export function authReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case AuthActionType.HANDLE_CHANGE:
            return { ...state, [action.payload.name]:action.payload.value}
        case AuthActionType.SIGN_UP_REQUEST:
            return {...state,signUpSpinner:true}
        case AuthActionType.SIGN_UP_SUCCESS:
            return {...state,signUpResponse:action.payload,signUpSpinner:false}
        case AuthActionType.SIGN_UP_SUCCESS:
            return {...state,signUpResponse:action.payload,signUpSpinner:false}
        default: return state;
    }
}
