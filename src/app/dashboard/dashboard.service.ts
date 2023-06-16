import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseurl: string ="http://localhost:8088/fir/";
  constructor(private http: HttpClient) { }

  
  getFirByDateDetails(stateCd, districtCd, psCd, startdate, enddate){
    return this.http.get(this.baseurl+"getfirbydate?stateCd="+stateCd+"&districtCd="+districtCd+"&psCd="+psCd+"&startDate="+startdate+"&endDate="+enddate);
  }
}
