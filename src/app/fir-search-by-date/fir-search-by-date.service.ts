import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirSearchByDateService {

  constructor(private http: HttpClient) { }
  baseurl: string ="http://localhost:8088/fir/";
  getFirByDate(startdate, enddate){
    return this.http.get(this.baseurl+"getfirbydate?startDate="+startdate+"&endDate="+enddate);
  }
}
