import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirdetailsService {

  constructor (private http: HttpClient) { }
  baseurl: string ="http://localhost:8088/fir/"
  getFirByYear(){
    return this.http.get(this.baseurl+"firfetch");
  }

  getFirByDate(startdate, enddate){
    return this.http.get(this.baseurl+"getfirbydate?startDate="+startdate+"&endDate="+enddate);
  }

  getState(langCd){
    return this.http.get(this.baseurl+"getStateList?langCd="+langCd);
  }

  getDistrict(stateCd, langCd){
    return this.http.get(this.baseurl+"getDistrict?stateCd="+stateCd+"&langCd="+langCd);
  }

  getPs(stateCd, districtCd, langCd){
    return this.http.get(this.baseurl+"getPsList?stateCd="+stateCd+"&districtCd="+districtCd+"&langCd="+langCd);
  }

  getFirByDateDetails(stateCd, districtCd, psCd, startdate, enddate){
    return this.http.get(this.baseurl+"getfirbydate?stateCd="+stateCd+"&districtCd="+districtCd+"&psCd="+psCd+"&startDate="+startdate+"&endDate="+enddate);
  }


  getFirCountByDateDetails(stateCd,districtCd, psCd, startDate, endDate){
  
    return this.http.get(this.baseurl+"getfircountbydate?stateCd="+stateCd+"&districtCd="+districtCd+"&psCd="+psCd+"&startDate="+startDate+"&endDate="+endDate);
  }

  getFirChartByDateDetails(stateCd,districtCd, psCd, startDate, endDate){
  
    return this.http.get(this.baseurl+"getfirchartbydate?stateCd="+stateCd+"&districtCd="+districtCd+"&psCd="+psCd+"&startDate="+startDate+"&endDate="+endDate);
  }

  getFirChartMajorHead(langCd){
    return this.http.get(this.baseurl+"getChartByMajorHead?langCd="+langCd);
  }

  getFirByMajorHeadDetails(stateCd, districtCd, psCd, majorHeadCd){
    return this.http.get(this.baseurl+"getfirbymajorhead?stateCd="+stateCd+"&districtCd="+districtCd+"&psCd="+psCd+"&majorHeadCd="+majorHeadCd);
  }

  getFirDetailPopup(firRegNum){
    return this.http.get(this.baseurl+"getfirdetaileddesc?firRegNum="+firRegNum);
  }

  
}
