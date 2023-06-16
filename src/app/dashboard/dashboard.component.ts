import { Component, OnInit  } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { FirSearchByDateService } from '../fir-search-by-date/fir-search-by-date.service';
import * as moment from '../../../node_modules/moment/moment';
import { DashboardService } from './dashboard.service';
import { ActivatedRoute } from '@angular/router';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
declare const $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

   /** Based on the screen size, switch from standard to one column per row */
   startdate: any;
   enddate: any;
   userdata: any;
   dtOptions: any;
   table: any;
   selectedState:any;
   selectedDistrict:any;
   selectedPs:any;
   selectedMajorHeadName :any;
   receivedUsername :any;
  //  hideShowFirTable : boolean = false;
  //  hideShowFirMajorHeadTable : boolean = false;
   cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
     map(({ matches }) => {
       if (matches) {
         return [
           { title: 'List of FIR', cols: 1, rows: 1 },
           { title: 'card 2', cols: 1, rows: 1 },
           { title: 'Card 3', cols: 1, rows: 1 },
           { title: 'Card 4', cols: 1, rows: 1 }
         ];
       }
 
       return [
         { title: 'Card 1', cols: 2, rows: 1 },
         { title: 'Card 2', cols: 1, rows: 1 },
         { title: 'Card 3', cols: 1, rows: 2 },
         { title: 'Card 4', cols: 1, rows: 1 }
       ];
     })
   );
 
   constructor(private breakpointObserver: BreakpointObserver, private firService: DashboardService, private route : ActivatedRoute) {}

   ngOnInit() {
    this.route.queryParams.subscribe(params => {
        console.log("Received Parameter"+ params); 
        console.log(this.receivedUsername); 
      }
    );
  }
 
   SearchProcess() {
 
     console.log('start Date : ', this.startdate);
     console.log('end Date : ', this.enddate);
     this.firService.getFirByDateDetails(this.selectedState, this.selectedDistrict, this.selectedPs, this.startdate, this.enddate).subscribe(data => {
       this.userdata = data;
       setTimeout(() => {   // here I am rendering web api data
 
         $('#firSearchBydate').DataTable({
           destroy: true,
           pagingType: 'full_numbers',
           pageLength: 5,
           processing: true,
           lengthMenu: [5, 10, 25]
         });
       }, 1);
     }, error => console.error(error));
   }
 
   updateStartDate(dateObject) {
     var date = moment(dateObject.value);
     this.startdate = date.format('DD/MM/YYYY');
     console.log(this.startdate);
     return this.startdate;
   }
 
   updateEndDate(dateObject) {
     var date = moment(dateObject.value);
     this.enddate = date.format('DD/MM/YYYY');
     console.log(this.enddate);
     return this.enddate;
   }


   getStateFilter(data){
    this.selectedState = data;
   }

   getDistrictFilter(data){
    this.selectedDistrict = data;
   }

   getPsFilter(data){
    this.selectedPs = data;
   }
   getStartDateFilter(data){
    this.startdate = data;
   }

   getEndDateFiler(data){
    this.enddate = data;
   }


   setSelectedMajorHeadName(data){
    this.selectedMajorHeadName = data;
    console.log("selected major head :: "+this.selectedMajorHeadName);
   }
   

   
   
}
