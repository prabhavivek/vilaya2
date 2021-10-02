import { BASE_URL } from '../global'

export function header() {
    return { "Content-Type": "application/json" }
}
export function request(input) {
    return {
        method: 'POST',
        headers: header(),
        body: JSON.stringify(input),
        redirect: 'follow'
    }
}
export function signUp(input) {
    return fetch(BASE_URL + "/user/sign/up", request(input))
        .then(response => response.text())
        .then(result => result)
        .catch(error => console.log('@Api @AuthApi @signUp', error));
}
export function signIn(input) {
    return fetch(BASE_URL + "/user/sign/in", request(input))
        .then(response => response.text())
        .then(result => result)
        .catch(error => console.log('@Api @AuthApi @signIn', error));
}
export function setPassword(input) {
    return fetch(BASE_URL + "/user/setpassword", request(input))
        .then(response => response.text())
        .then(result => result)
        .catch(error => console.log('@Api @AuthApi @setPassword', error));
}