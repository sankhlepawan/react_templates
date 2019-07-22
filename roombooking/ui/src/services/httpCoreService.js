import{ history } from 'store/history';
import { toastService,tokenService  } from 'services' ;


const options = {
    method: 'GET',
    headers: { 'Content-Type':'application/json' },
    body: '',
}

class HttpCore {
    
    constructor(url,params) {
      
       this.url = url;
       this.method = params.method;
       this.body = params.body;
       this.dispatch = params.dispatch;
       this.action = params.action;
       this.onSuccess = params.onSuccess;
       this.onFailure = params.onFailure;
       this.customFetch();
    }

    
    customFetch() {
        options.method = this.method && this.method.toUpperCase();
        options.body = this.body && this.body;
        let token = tokenService.getToken();
        if(token){
            options.headers.Authorization = "Bearer " + token;
        }
        if(options.method === "GET"){
            delete options.body;
        }
        try {
            fetch(this.url,options)
            .then(response => Promise.all([response, response.json()]))
            .then(([response, json]) => {
                this.successHandler([response, json])
            },([response, json]) => {
                console.log(response, json)
            })
            .catch( err => console.log(err));
        }
        catch(error){
            console.log(error);
        }
    }

    successHandler = ([response, json]) => {
        let status = response.status;
        if((status === 204 && this.method !== "DELETE") || (status && status.toString().indexOf('4') === 0) || status === 500) {
            toastService.error(json.message)
            this.errorRedirectHandler(status)
            this.onFailure && this.onFailure(json);
            // return Promise.reject([response, json]);  
        }
        else if(response.status === 200 || status === 201 || status === 204) {
            if(json.message){
                toastService.success(json.message);
            }
            if(this.onSuccess){
                this.onSuccess([json, this.dispatch]);
                
            }

            if(this.dispatch && this.action){
                this.dispatch && this.dispatch(this.action(json.entity || json));
                
            }
           
        }
        
          
    };
    
    errorRedirectHandler = (status) => {
        switch(status) {
            case 400:
                history.push('/400')
                break;
            case 401:
                history.push('/login');
                break;
            case 404:
                history.push('/404')
                break;
            case 500:
                history.push('/500')
                break;
        }
    }
}

export default HttpCore;