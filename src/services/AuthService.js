import http from "../Util/Http"

class AuthService{

    static isLoggedIn() {
        if(localStorage.getItem('token')){
            return true
        }else{
            return false
        }
        
    }

    static async login(email,password){
        
        try {
            let response = await http.post('/api/auth/login', {email:email, password:password});

            localStorage.setItem('token', response.data.access_token);
            localStorage.setItem('userId', response.data.user.id);
            localStorage.setItem('userEmail', response.data.user.email);

            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    static getLogedUser(){
        
        return {
            userId: localStorage.getItem('userId'),
            userEmail: localStorage.getItem('userEmail'),
        }
    }

    static logout(){
        localStorage.removeItem('token');
    }

}

export default AuthService
