import { Component, OnInit } from '@angular/core';
import { DashboardChipsService } from './dashboard-service.service';

@Component({
  selector: 'app-dashboard-chips',
  templateUrl: './dashboard-chips.component.html',
  styleUrls: ['./dashboard-chips.component.css']
})
export class DashboardChipsComponent implements OnInit {

  totalFir : any ; 

  constructor(private dashboarChipsService : DashboardChipsService) { }


  ngOnInit(): void {
    this.getTotalFirCount();
  }

  getTotalFirCount(){
    this.dashboarChipsService.getTotalFirCount().subscribe(data =>{
      this.totalFir = data;
      console.log("total fir"+data);
    })
  }

}
