import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {

  sideBarOpen=true;
  current_selected:string;
  typesOfMenu: string[] = ['General Diary', 'Complaint', 'FIR', 'Investigation', 'Final '];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectedMenu(){
    console.log(this.typesOfMenu);
  }

  sideBarToggler(event){
    this.sideBarOpen=!this.sideBarOpen;
  }

  

 getValue(event){
  this.current_selected = event.target.parentNode.innerText;
  console.log(this.current_selected);
  if(this.current_selected=='FIR')
  {
    this.router.navigate(['/fir']);
  }
}

}
