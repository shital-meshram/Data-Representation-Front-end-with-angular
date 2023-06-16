import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirdetailsService } from '../firdetails/firdetails.service';
import { MajorHeadChartResp } from '../firdetails/majorHeadChartResp';
import * as HighCharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { SharedService } from '../shared.service';
import { EmitFilterEvent } from '../filters/emitEmitDataFilter';
import { Subscription } from 'rxjs';
import { MajorHeadDataEvent } from './EmitMajorHeadData';
import { ThisReceiver } from '@angular/compiler';

declare const $: any;
@Component({
  selector: 'app-major-head-chart',
  templateUrl: './major-head-chart.component.html',
  styleUrls: ['./major-head-chart.component.css']
})
export class MajorHeadChartComponent implements OnInit {


  public majorlabeldata : any[] =[];
  public majorrealdata : any[]=[];
  @Output()
  majorHeadName: EventEmitter<any> = new EventEmitter<any>();
  langCd=99;
  majorHeadChartData : MajorHeadChartResp[]=[];
  majorChartOptions:{};
  HighCharts = HighCharts;
  majorHeadCode:any;
  majorHeadFirData : any;
  clickEventSubsription : Subscription;
  firChartDataReceived : EmitFilterEvent;
  selectedMajorHeadName : any;



  constructor(private firService: FirdetailsService, private sharedService : SharedService) { 
    this.clickEventSubsription = this.sharedService.getClickedEvent().subscribe(result=>{
      this.firChartDataReceived = result as EmitFilterEvent;
      console.log("received data :: "+ JSON.stringify(this.firChartDataReceived));
      this.getFirChartBasedOnMajorHead(this.firChartDataReceived);
    })
  }

  ngOnInit(): void {

    HC_exporting(HighCharts);
  }


  getFirChartBasedOnMajorHead(input ){

    this.firService.getFirChartMajorHead(this.langCd).subscribe(result =>{
      this.majorHeadChartData = result as MajorHeadChartResp[];
      
      console.log("major head chart data :: "+this.majorHeadChartData);
      for(let i=0; i< this.majorHeadChartData.length; i++){
        this.majorlabeldata.push(this.majorHeadChartData[i].majorHead);
        this.majorrealdata.push(this.majorHeadChartData[i].firCount);
      }
  
      this.getMajorHeadFirChart(this.majorlabeldata, this.majorrealdata, input);
  
    })
   }

   getMajorHeadFirChart(majorlabeldata,majorrealdata, input : MajorHeadDataEvent){
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
                  
                    input.category = event.point.category;
                    this.selectedMajorHeadName = event.point.category;
                    input.majorHeadChartData = this.majorHeadChartData;
                    this.emitEventOnBarClick();
                    this.sharedService.sendMajorHeadChartClickEvent(input);
                    //this.getTheCall(input);
  
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

   emitEventOnBarClick(){
    this.majorHeadName.emit(this.selectedMajorHeadName);
   }

   
  
}
