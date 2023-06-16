import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Chart,registerables, BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip} from 'chart.js';
@Injectable({
  providedIn: 'root'
})
export class FirStatusChartService {

  constructor(private http: HttpClient) { 
    Chart.register(BarElement,...registerables, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip);
  }
  baseurl: string ="http://localhost:8088/fir/"

  getFirStatus(langCd){
    return this.http.get(this.baseurl+"getfirstatus?langCd="+langCd);
  }

  getFirCountByFirStatus(districtCd, langCd, firStatusCd){
    return this.http.get(this.baseurl+"getfircountbystatus?districtCd="+districtCd+"&langCd="+langCd+"&firStatusCd="+firStatusCd);
  }
}
