import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardChipsService {

  constructor(private http: HttpClient) { }
  baseurl: string ="http://localhost:8088/fir/"


  getTotalFirCount(){
    return this.http.get(this.baseurl+"gettotalfircount");
  }
}
