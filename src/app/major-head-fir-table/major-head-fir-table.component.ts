import { Component, OnInit } from '@angular/core';
import { FirdetailsService } from '../firdetails/firdetails.service';
import { MajorHeadDataEvent } from '../major-head-chart/EmitMajorHeadData';
import { SharedService } from '../shared.service';
import { Subscription} from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { FirDetailsCoomponentComponent } from '../fir-details-coomponent/fir-details-coomponent.component';


declare const $: any;
@Component({
  selector: 'app-major-head-fir-table',
  templateUrl: './major-head-fir-table.component.html',
  styleUrls: ['./major-head-fir-table.component.css']
})
export class MajorHeadFirTableComponent implements OnInit {

  majorHeadFirData : any;
  clickEventSubsription : Subscription;
  firChartDataReceived : MajorHeadDataEvent;
  constructor(private firService: FirdetailsService, private sharedService : SharedService, private dialog: MatDialog) { 

    this.clickEventSubsription = this.sharedService.getMajorHeadChartClickEvent().subscribe(result=>{
      this.firChartDataReceived = result as MajorHeadDataEvent;
      console.log("received data :: "+ JSON.stringify(this.firChartDataReceived));
      this.getTheCall(this.firChartDataReceived);
    })
  }

  ngOnInit(): void {
  }

  getTheCall(input){
  
  
  

    for(let i=0; i< input.majorHeadChartData.length; i++){
      if(input.category== input.majorHeadChartData[i].majorHead){
        input.majorHeadCode = input.majorHeadChartData[i].majorHeadCd
      }
    }
  
    this.MajorHeadFirSearch(input);
  
    
   }

   MajorHeadFirSearch(input : MajorHeadDataEvent) {

    console.log("inside major head fir search call"+JSON.stringify(input));
     
    this.firService.getFirByMajorHeadDetails(input.state, input.dist, input.ps, input.majorHeadCode).subscribe(data => {
      this.majorHeadFirData = data;
      setTimeout(() => {   
  
        $('#firSearchByMajorHead2').DataTable({
          destroy: true,
          pagingType: 'full_numbers',
          pageLength: 5,
          processing: true,
          lengthMenu: [5, 10, 25],
          dom: 'Bfrtip',
        //   buttons: [
        //     'copy', 'csv', 'excel', 'pdf', 'print'
        // ],
        buttons:[
          {extend: 'copyHtml5', footer:true, title :"FIR List"},
          {extend: 'excelHtml5', footer:true, title :"FIR List"},
          {extend: 'csvHtml5', footer:true, title :"FIR List"},
          {extend: 'pdfHtml5', footer:true, title :"FIR List", orientation:'landscape', pageSize:'A4'},
        ]
        });
        
      
      }, 1);
    }, error => console.error(error));
  
    
  
  }

  openDialog(fir){
    // alert("Hello "+fir);
  
    const dialogRef = this.dialog.open(FirDetailsCoomponentComponent,{
      data : {fir}
    });
  
    dialogRef.afterClosed().subscribe(result =>{
      console.log(result);
    }
      
    )
  
  
  }

  

}
