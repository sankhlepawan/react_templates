import decode from 'jwt-decode';

const tokenService =
    {
        signOut,
        saveToken,
        getToken,
        getProfile,
        getRoles
    };


function signOut() {
    window.sessionStorage.clear();
 localStorage.removeItem('token');
 }

 function saveToken(token) {
    localStorage.setItem('token', token)
 }

 function getToken() {
   return localStorage.getItem('token')
 }
    
 function getProfile() {
        return decode(this.getToken());
    }

function getRoles() {
    let decodedToken = decode(this.getToken());
    if(decodedToken !== undefined && decodedToken !== null){
        return decodedToken.roles;
    }
    return [];
    
}

export default tokenService;



    