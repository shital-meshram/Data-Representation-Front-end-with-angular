import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms';
import { end, start } from '@popperjs/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import * as moment from '../../../node_modules/moment/moment';
import { Chart, registerables, BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip, ChartComponent } from 'chart.js';
import { StateEntity } from './stateentity';
import { DistrictEntity } from './dictrictentity';
import { PsEntity } from './psentity';
import { FirdetailsService } from './firdetails.service';
import { FirEntity } from './firentity';
import highcharts3D from 'highcharts/highcharts-3d.src';

import * as HighCharts from 'highcharts';
//import * as $ from '../../../node_modules/jquery';
import HC_exporting from 'highcharts/modules/exporting';
import { I, i } from 'chart.js/dist/chunks/helpers.core';
import { ThisReceiver } from '@angular/compiler';
import { ConnectableObservable } from 'rxjs';
import { FirChartResponse } from './firChartResponse';
import { FirChartComponent } from '../fir-chart/fir-chart.component';
import { MajorHeadChartResp } from './majorHeadChartResp';
import {parse, stringify} from 'flatted';
import { MatDialog } from '@angular/material/dialog';
import { FirDetailsCoomponentComponent } from '../fir-details-coomponent/fir-details-coomponent.component';





const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
declare const $: any;
declare var google: any;

@Component({
  selector: 'app-firdetails',
  templateUrl: './firdetails.component.html',
  styleUrls: ['./firdetails.component.css']
})


export class FirdetailsComponent implements OnInit {

  // @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;
  //@ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
  chartOptions: {};
  majorChartOptions:{};
  pieOptions: {};
  HighCharts = HighCharts;
  public highChartRealData: any[] = [];
  public firrealData: any[] = [];
  public hisghChartLabelData: any[] = [];
  public firlabelData: any[] = [];
  public highChartRow: any[] = [];
  public majorlabeldata : any[] =[];
  public majorrealdata : any[]=[];
  firEntity: FirEntity[];
  startdate: any;
  enddate: any;
  userdata: any;
  dtOptions: any;
  table: any;
  data: any;
  chartData: FirChartResponse[]=[];
  langCd=99;



  stateList: any[];
  districtList: any[];
  psList: any[];
  selectedState: any;
  selectedDistrict: any;
  selectedPs: any;
  butDisabled: boolean = true;
  chartdata: any;
  highchartdata: any;
  highchartrealdata2: any;
  fircount: any;
  fircountlist: any;
  innercount: any;
  chartlabeldata: any[] = [];
  chartrealdata: any[] = [];
  colordata: any[] = [];
  highChartNewArray: any[] = [];
  majorHeadChartData : MajorHeadChartResp[]=[];
  majorChart :MajorHeadChartResp;
  majorHeadCode:any;
  majorHeadFirData : any;
  a = 0;
  list: any[] = [];
  add: any[] = [];
  newarr: any[] = [];


  @ViewChild(FirChartComponent) child :FirChartComponent; 

  constructor(private firService: FirdetailsService, private dialog: MatDialog) {
    Chart.register(BarElement, ...registerables, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip);
  }

  ngAfterViewInit(): void {


  }

  ngOnInit(): void {
    this.selectedState = 11;
    this.getStateList();

    this.getDistrictList(this.selectedState);

    HC_exporting(HighCharts);
    //highcharts3D(HighCharts);

  }
  


  getNoOfFirRegister(labeldata, realdata) {

    console.log("label data : " + labeldata);
    this.chartOptions = {
      chart: {
        type: 'bar',
        zoomType: 'xy'
      },
      title: {
        text: 'Registered FIR per district'
      },
      xAxis: {
        type: 'category',
        categories : [labeldata],

        accessibility: "enabled",
        labels: {
          rotation: -45,
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }

       
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of FIR Registered'
        }
      },
      legend: {
        enabled: false,
        floating: true,
        borderWidth: 1,
        shadow: true
      },
      credits: {
        enabled: false
      },
      tooltip: {
        pointFormat: 'Population in 2021: <b>{point.y:.1f} millions</b>',
        followPointer: true
      },
      series: [{
        data: [realdata]
      }


      ],
    }
  }


 
  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  }
  );

  SearchProcess() {

   
    this.firService.getFirByDateDetails(this.selectedState, this.selectedDistrict, this.selectedPs, this.startdate, this.enddate).subscribe(data => {
      this.userdata = data;
      setTimeout(() => {   

        $('#firSearchByFilter').DataTable({
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

  getStateList() {
    this.firService.getState(99).subscribe((data) => {
      this.stateList = data as StateEntity[];
    })
  }

 
  getDistrictList(stateCode) {
    this.firService.getDistrict(stateCode, 99).subscribe(data => {
      this.districtList = data as DistrictEntity[];
    })
  }

  printValues() {
    console.log("state code" + this.selectedState);
    console.log("district code" + this.selectedDistrict);
    console.log("ps code" + this.selectedPs);
  }



  getPsList(stateCode, districtCode) {
    this.firService.getPs(stateCode, districtCode, 99).subscribe(data => {
      this.psList = data as PsEntity[];
      console.log(this.psList);
    })
  }

  getDistrictCode(districtCode) {
    this.selectedDistrict = districtCode;
    this.getDistrictList(districtCode);
    console.log("district code selected is :: " + this.selectedDistrict);
  }



  getSelectedValues() {
    console.log(this.selectedState);
  }

  getNoOfFirRegistered() {
    

    this.firService.getFirChartByDateDetails(this.selectedState, this.selectedDistrict, this.selectedPs, this.startdate, this.enddate).subscribe(result => {

      this.chartData = result as FirChartResponse[];

       for(let i=0; i<this.chartData.length; i++){
        this.firlabelData.push(this.chartData[i].districtName);
        this.firrealData.push(this.chartData[i].firCount);
       }
        
       
       this.getNoOfFirRegister(this.firlabelData, this.firrealData);
    
    }

    );
    
  }

 getFirChartBasedOnMajorHead(){

  this.firService.getFirChartMajorHead(this.langCd).subscribe(result =>{
    this.majorHeadChartData = result as MajorHeadChartResp[];

    console.log("major head chart data :: "+this.majorHeadChartData);
    for(let i=0; i< this.majorHeadChartData.length; i++){
      this.majorlabeldata.push(this.majorHeadChartData[i].majorHead);
      this.majorrealdata.push(this.majorHeadChartData[i].firCount);
    }

    this.getMajorHeadFirChart(this.majorlabeldata, this.majorrealdata);

  })
 }

 getMajorHeadFirChart(majorlabeldata,majorrealdata){
  this.majorChartOptions = {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Registered FIR Based on Major Head'
    },
    xAxis: {
        categories: majorlabeldata,
        crosshair: true
    },
    colors:['#B7FF7F', '#337DFF', '#42FF33', '#42FF33', '#42FF33', '#069119'],
    yAxis: {
        alternateGridColor: '#F4FAF5',
        min: 0,
        title: {
            text: 'No. of FIR Registered'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
            colorByPoint: true
        },
        series: {
          cursor: 'pointer',
          point :{
            events: {
              click:  (event) =>{
                
                  this.getTheCall(event.point.category);

              }
          
           }
          }
          
       }
      
    },
    series: [{
        name: 'Major Head',
        data: majorrealdata

    }]
}



  
 }

 getTheCall(category){
  
  
  

  for(let i=0; i< this.majorHeadChartData.length; i++){
    if(category== this.majorHeadChartData[i].majorHead){
      this.majorHeadCode = this.majorHeadChartData[i].majorHeadCd
    }
  }

  this.MajorHeadFirSearch();

  
 }


 MajorHeadFirSearch() {

  console.log("inside major head fir search call");
   
  this.firService.getFirByMajorHeadDetails(this.selectedState, this.selectedDistrict, this.selectedPs, this.majorHeadCode).subscribe(data => {
    this.majorHeadFirData = data;
    setTimeout(() => {   

      $('#firSearchByMajorHead').DataTable({
        destroy: true,
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true,
        lengthMenu: [5, 10, 25]
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
