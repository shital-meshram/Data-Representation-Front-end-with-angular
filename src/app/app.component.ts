import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CCTNSDataRepresentation';  opened=false;
  isLogedIn : any;
  isvisible : any;
  typesOfShoes: string[] = ['General Diary', 'Complaint', 'FIR', 'Investigation', 'Final Form'];

  checkIfLogin(){
    this.isLogedIn =sessionStorage.getItem("isLoggedIn");

    if(this.isLogedIn == true)
    {
      this.isvisible=true;
    }

  }

  isLoggedIn() {
    

    if (sessionStorage.getItem('currentUser')==null){
      this.isLogedIn = false;
      return this.isLogedIn;
    }
    else {
      return true;
    }
  }
}
