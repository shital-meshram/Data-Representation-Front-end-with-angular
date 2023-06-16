import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { DistrictEntity } from './dictrictentity';
import { FiltersService } from './filters.service';
import { PsEntity } from './psentity';
import { StateEntity } from './stateentity';
import { end, start } from '@popperjs/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import * as moment from '../../../node_modules/moment/moment';
import { EmitFilterEvent } from './emitEmitDataFilter';
import { FirChartComponent } from '../fir-chart/fir-chart.component';
import { SharedService } from '../shared.service';
import { FirChartResponse } from '../firdetails/firChartResponse';
import { User } from '../UserModel';


const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
declare const $: any;
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  startdate: any;
  enddate: any;
  langCd=99;
  stateList: any[];
  districtList: any[];
  psList: any[];

  @Output()
  state: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  dist: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  ps: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  startDt: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  endDt: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  callFirChartFuntion: EventEmitter<any> = new EventEmitter<any>();
 
  firChartComponent : FirChartComponent;

  selectedState: any;
  selectedDistrict: any;
  selectedPs: any;
  butDisabled: boolean = true;
  selectedData : EmitFilterEvent ;
  casUserDetails  : User
 
  constructor( private filterService : FiltersService, private sharedServices :SharedService) { }
  public firChartData :EmitFilterEvent = new EmitFilterEvent();
  ngOnInit(): void {
    //this.selectedState =11;
    this.getStateList(); 
    //this.getDistrictList(this.selectedState);
    this.sharedServices.getCasUserDetails().subscribe(result=>{
      this.casUserDetails = result as User;
      this.selectedState = this.casUserDetails.stateCd;

      if(this.casUserDetails.districtCd == 99999 && this.casUserDetails.psCd==99999999){
        alert("IG Login..!!");

      }else if(this.casUserDetails.psCd==99999999){
        alert("SP Login..!!");
        
      }else{
        alert("SHO Login..!!")
      }
      console.log(this.casUserDetails);
      this.getDistrictList(this.selectedState);
    })
    
    
  }

  getStateList() {
    this.filterService.getState(99).subscribe((data) => {
      this.stateList = data as StateEntity[];
    })
  }

  getDistrictList(stateCode) {
    this.filterService.getDistrict(stateCode, 99).subscribe(data => {
      this.districtList = data as DistrictEntity[];
    })
  }

  getPsList(stateCode, districtCode) {
    this.filterService.getPs(stateCode, districtCode, 99).subscribe(data => {
      this.psList = data as PsEntity[];
      console.log(this.psList);
    })
  }

  getDistrictCode(districtCode) {
    this.selectedDistrict = districtCode;
    this.getDistrictList(districtCode);
    console.log("district code selected is :: " + this.selectedDistrict);
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

 

  emitEvent(){
    this.state.emit(this.selectedState);
    this.dist.emit(this.selectedDistrict);
    this.ps.emit(this.selectedPs);
    this.startDt.emit(this.startdate);
    this.endDt.emit(this.enddate);
  }

  clickEvent(){
    
    this.firChartData.state = this.selectedState;
    this.firChartData.dist = this.selectedDistrict;
    this.firChartData.ps= this.selectedPs;
    this.firChartData.startDt = this.startdate;
    this.firChartData.endDt = this.enddate;
    this.sharedServices.sendClickEvent(this.firChartData);
  }



}
