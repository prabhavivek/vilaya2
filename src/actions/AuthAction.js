import AuthActionType from '../actionTypes/AuthActionType';
import { BASE_URL } from '../global'
import store from '../store/Store'

var myHeaders = {"Content-Type": "application/json"}

const request = input =>({
    method: 'POST',
    headers: myHeaders, 
    body: input,
    redirect: 'follow'   
})

export function handleChangeAction(e) {
    return { type: AuthActionType.HANDLE_CHANGE, payload: { name: e.target.name, value: e.target.value } }
}

export function signUpRequest() {
    return {
        type: AuthActionType.SIGN_UP_REQUEST
    }
}

export function signUpSuccess(input) {
    return {
        type: AuthActionType.SIGN_UP_SUCCESS,
        payload: input
    }
}
export function signUpFail(error) {
    return {
        type: AuthActionType.SIGN_UP_FAIL,
        payload: error
    }
}

export function signUp() {
    

    var raw = JSON.stringify({ "first_name": "Prabhakaran", "last_name": "Vivekanandan", "user_name": "prabhavivek+03", "email_id": "prabhavivekece+3@gmail.com", "role_id": 1 });

    fetch("http://localhost:1337/user/sign/up", request(raw))
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}