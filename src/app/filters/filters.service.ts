import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor(private http: HttpClient) { }
  baseurl: string ="http://localhost:8088/fir/"

  getState(langCd){
    return this.http.get(this.baseurl+"getStateList?langCd="+langCd);
  }

  getDistrict(stateCd, langCd){
    return this.http.get(this.baseurl+"getDistrict?stateCd="+stateCd+"&langCd="+langCd);
  }

  getPs(stateCd, districtCd, langCd){
    return this.http.get(this.baseurl+"getPsList?stateCd="+stateCd+"&districtCd="+districtCd+"&langCd="+langCd);
  }
}
