import { Component, OnInit } from '@angular/core';
import { FirStatusChartService } from './fir-status-chart.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-fir-status-chart',
  templateUrl: './fir-status-chart.component.html',
  styleUrls: ['./fir-status-chart.component.css']
})
export class FirStatusChartComponent implements OnInit {

  constructor(private firChartStatusService: FirStatusChartService) { }


    langCd: number = 99;
    districtCd: number = 11193;
    chardata: any;
    fircount: any;
    labeldata: any[] = [];
    realdata: any[] = [];
    colordata: any[] = [];


    ngOnInit(): void {
        this.getChartFirStatusLabel();
        this.renderChart(this.labeldata, this.realdata);
    }

    renderChart(labeldata: any, realdata: any) {
        const myChart = new Chart("firStatus", {
            type: 'bar',
            data: {
                labels: labeldata,
                datasets: [{
                    label: 'Fir Status',
                    data: realdata,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    getChartFirStatusLabel() {
        this.firChartStatusService.getFirStatus(this.langCd).subscribe(data => {
            this.chardata = data;
            if (this.chardata != null) {
                for (let i = 0; i < this.chardata.length; i++) {
                    this.labeldata.push(this.chardata[i].firStatus);
                    this.firChartStatusService.getFirCountByFirStatus(this.districtCd, this.langCd, this.chardata[i].firStatusCd).subscribe(result => {
                        console.log("Count" + result)
                        this.realdata.push(result);
                    })
                }

            }
        });

    }


}
