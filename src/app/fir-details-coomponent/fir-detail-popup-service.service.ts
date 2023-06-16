import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FirDetailPopupServiceService {

  constructor(private http: HttpClient) { }
  baseurl: string ="http://localhost:8088/fir/"

  getFirDetailPopup(firRegNum){
    return this.http.get(this.baseurl+"getfirdetaileddesc?firRegNum="+firRegNum);
  }

  getIfIIf2Filled(firRegNum){
    return this.http.get(this.baseurl+"isIIF2Filled?firRegNum="+firRegNum);
  }

  getIfIIf3Filled(firRegNum){
    return this.http.get(this.baseurl+"isIIF3Filled?firRegNum="+firRegNum);
  }

  getIfIIf4Filled(firRegNum){
    return this.http.get(this.baseurl+"isIIF4Filled?firRegNum="+firRegNum);
  }
}
