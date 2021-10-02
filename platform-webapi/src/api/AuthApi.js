module.exports = {
    header : function () {
        return { "Content-Type": "application/json" }
    },
    request : function (input) {
        return {
            method: 'POST', 
            headers: AuthApi.header(),
            body: JSON.stringify(input),
            redirect: 'follow'
        }
    },
    signUp : function (input) {
        return fetch(global.BASE_URL+"/user/sign/up", AuthApi.request(input))
            .then(response => response.text())
            .then(result =>{return result} )
            .catch(error => console.log('@Api @AuthApi @signUp', error));
    },
    signIn: function(input){
        return fetch(global.BASE_URL+"/user/sign/in", AuthApi.request(input))
            .then(response => response.text())
            .then(result =>{return result} )
            .catch(error => console.log('@Api @AuthApi @signIn', error));
    },
    setPassword: function(input){
        return fetch(global.BASE_URL+"/user/setpassword", AuthApi.request(input))
            .then(response => response.text())
            .then(result =>{return result} )
            .catch(error => console.log('@Api @AuthApi @setPassword', error));
    }
}




