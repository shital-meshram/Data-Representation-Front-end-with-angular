import { Component, OnInit } from '@angular/core';
import * as moment from '../../../node_modules/moment/moment';
import { FirSearchByDateService } from './fir-search-by-date.service';
const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
declare const $: any;

@Component({
  selector: 'app-fir-search-by-date',
  templateUrl: './fir-search-by-date.component.html',
  styleUrls: ['./fir-search-by-date.component.css']
})
export class FirSearchByDateComponent implements OnInit {

  startdate: any;
  enddate: any;
  userdata: any;
  dtOptions: any;
  table: any;
  constructor(private firService: FirSearchByDateService) { }

  ngOnInit(): void {
  }

  SearchProcess() {

    console.log('start Date : ', this.startdate);
    console.log('end Date : ', this.enddate);
    this.firService.getFirByDate(this.startdate, this.enddate).subscribe(data => {
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
}
