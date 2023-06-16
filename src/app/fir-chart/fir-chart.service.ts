import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirChartService {

  constructor(private http: HttpClient) { }
  baseurl: string ="http://localhost:8088/fir/"
  

  getDistrict(stateCd, langCd){
    return this.http.get(this.baseurl+"getDistrict?stateCd="+stateCd+"&langCd="+langCd);
  }

  getFirCountByDistrict(districtCd, langCd){
    return this.http.get(this.baseurl+"getfircountbydistrict?districtCd="+districtCd+"&langCd="+langCd);
  }

  getFirChartByDateDetails(stateCd,districtCd, psCd, startDate, endDate){
  
    return this.http.get(this.baseurl+"getfirchartbydate?stateCd="+stateCd+"&districtCd="+districtCd+"&psCd="+psCd+"&startDate="+startDate+"&endDate="+endDate);
  }

  
}
