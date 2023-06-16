import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  authUrl = "http://localhost:8081/api/auth";
  isLogin: any;
  constructor(private http: HttpClient) { }

  login(data): Observable<any> {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.post<any>(this.authUrl + "/signin", data, config).pipe(map(res => {
      console.log(res);
      sessionStorage.setItem('user', 'logedIn');
      if(res && res.token){
        sessionStorage.setItem('currentUser', JSON.stringify(res));
        this.isLogin=true;
      }
      alert("user login successfull...!!!")
      
      
      
      return res;
    }, err => {
      alert("please enter valid credentials...!!!")
      
      console.log(err);
      return err;
    }));
    
  }

  getAuthStatus(){
    if(sessionStorage.getItem('user')=="logedIn"){
      console.log(this.isLogin);
      return true;
    }else{
      return false;
    }
  }

  logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem('currentUser');
    this.isLogin = false;
  }

  // isLoggedIn() {

  //   if (JSON.parse(localStorage.getItem('currentUser')).auth_token == null) {
  //     this.isLogin = false;
  //     return this.isLogin;
  //   }
  //   else {
  //     return true;
  //   }
  // }

  
}
