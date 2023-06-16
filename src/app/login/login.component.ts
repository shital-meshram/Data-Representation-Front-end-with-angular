import { Component, OnInit,NgZone } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup | any;
  hide = true;
  alpha:string[];
  a:string;
  b:string;
  c:string;
  d:string;
  e:string;
  f:string;
  final:string;
  string1:string;
  string2:string;
  isLogin: any;
  constructor(private authService: AuthServiceService, private route : Router, private zone: NgZone) { }


  ngOnInit(){
    this.initForm();
    this.generateCaptcha();
  }

  initForm(){
    this.formGroup = new FormGroup({
      username : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required])
    });

  }

  loginProcess(){
    if(this.formGroup.valid && this.validcaptcha()){
      this.authService.login(this.formGroup.value).subscribe(res=>{
          this.isLogin= true;
          this.zone.run(() => {
            this.route.navigate(['/home']);
          });
        });
    }
  }

  

  generateCaptcha(){
    this.alpha=['A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q',
    'R','S','T','U','V','W','X','Y','Z',
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','10',
    '!','@','#','$','%','^','&','*'];
    this.a=this.alpha[Math.floor(Math.random()*71)];
    this.b=this.alpha[Math.floor(Math.random()*71)];
    this.c=this.alpha[Math.floor(Math.random()*71)];
    this.d=this.alpha[Math.floor(Math.random()*71)];
    this.e=this.alpha[Math.floor(Math.random()*71)];
    this.f=this.alpha[Math.floor(Math.random()*71)];

    this.final= this.a + this.b + this.c + this.d + this.e + this.f ;
    
  }

  validcaptcha(){
    this.string1=(<HTMLInputElement>document.getElementById("capt")).value;
    this.string2=(<HTMLInputElement>document.getElementById("textinput")).value;

    if(this.string1==this.string2){
      //alert("captcha validated successfully..!!");
      return true;
    }else{
      alert("please enter correct captcha");
      return false;
    }

  }

}
