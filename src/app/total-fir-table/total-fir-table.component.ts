import { Component, OnInit } from '@angular/core';
import { FirdetailsService } from '../firdetails/firdetails.service';
import { SharedService } from '../shared.service';
import { Subscription} from 'rxjs';
import { EmitFilterEvent } from '../filters/emitEmitDataFilter';
declare const $: any;
@Component({
  selector: 'app-total-fir-table',
  templateUrl: './total-fir-table.component.html',
  styleUrls: ['./total-fir-table.component.css']
})
export class TotalFirTableComponent implements OnInit {

 
  userdata: any;
  filteredInput : EmitFilterEvent;
  clickEventSubsription : Subscription;
  constructor(private firService: FirdetailsService, private sharedService : SharedService) { 
    this.clickEventSubsription = this.sharedService.getClickedEvent().subscribe(result=>{
      this.filteredInput = result as EmitFilterEvent;
      console.log("received data :: "+ JSON.stringify(this.filteredInput));
      this.SearchProcess(this.filteredInput);
    })
  }

  ngOnInit(): void {
  }

  SearchProcess(input : EmitFilterEvent) {

   
    this.firService.getFirByDateDetails(input.state, input.dist, input.ps, input.startDt, input.endDt).subscribe(data => {
      this.userdata = data;
      setTimeout(() => {   

        $('#firSearchByFilter2').DataTable({
          destroy: true,
          pagingType: 'full_numbers',
          pageLength: 5,
          processing: true,
          lengthMenu: [5, 10, 25],
          dom: 'Bfrtip',
          buttons: [
              'copy', 'csv', 'excel', 'pdf', 'print'
          ]
        });
      }, 1);
    }, error => console.error(error));


  }

}
