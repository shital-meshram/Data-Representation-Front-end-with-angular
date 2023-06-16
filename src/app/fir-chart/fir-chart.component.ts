import { Component, OnInit, Input } from '@angular/core';

import {Chart,registerables, BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip} from 'chart.js';
import { FirChartResponse } from '../firdetails/firChartResponse';
import { FirChartService } from './fir-chart.service';
import HC_exporting from 'highcharts/modules/exporting';
import * as HighCharts from 'highcharts';
import { SharedService } from '../shared.service';
import { Subscription} from 'rxjs';
import { EmitFilterEvent } from '../filters/emitEmitDataFilter';
@Component({
  selector: 'app-fir-chart',
  templateUrl: './fir-chart.component.html',
  styleUrls: ['./fir-chart.component.css']
})
export class FirChartComponent implements OnInit {

  @Input() stateCd : any;
  @Input() distCd : any;
  @Input() psCd : any;
  @Input() startDt : any;
  @Input() endDt : any;


  firChartDataReceived : EmitFilterEvent;
  constructor(private firChartService :FirChartService, private sharedService : SharedService) { 
    Chart.register(BarElement,...registerables, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip);
    this.clickEventSubsription = this.sharedService.getClickedEvent().subscribe(result=>{
      this.firChartDataReceived = result as EmitFilterEvent;
      console.log("received data :: "+ JSON.stringify(this.firChartDataReceived));
      this.getNoOfFirRegistered(this.firChartDataReceived);
    })
    };
  
     clickEventSubsription : Subscription;
    langCd:number=99;
    chardata: any;
    fircount:any;
    public firlabelData: any[] = [];
    public firrealData: any[] = [];
    colordata:any[]=[];
    chartOptions: {};
    HighCharts = HighCharts;
    chartData: FirChartResponse[]=[];
    
  ngOnInit() {
    
    HC_exporting(HighCharts);
    console.log(this.startDt);
  }

  ngAfterViewInit(){
   
  }


  public getNoOfFirRegistered(inputData : EmitFilterEvent) {
    
    console.log("Inside get FIR");
    this.firChartService.getFirChartByDateDetails(inputData.state, inputData.dist, inputData.ps, inputData.startDt, inputData.endDt).subscribe(result => {

      this.chartData = result as FirChartResponse[];

       for(let i=0; i<this.chartData.length; i++){
        this.firlabelData.push(this.chartData[i].districtName);
        this.firrealData.push(this.chartData[i].firCount);
       }
        
       
       this.getNoOfFirRegister(this.firlabelData, this.firrealData);
    
    }

    );
    
  }

  public getNoOfFirRegister(labeldata, realdata) {

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
        pointFormat: 'Total Number of FIR: <b>{point.y:.1f} millions</b>',
        followPointer: true
      },
      series: [{
        data: [realdata]
      }


      ],
    }
  }

  

 

}
