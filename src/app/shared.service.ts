import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { EmitFilterEvent } from './filters/emitEmitDataFilter';
import { FirChartResponse } from './firdetails/firChartResponse';
import { MajorHeadDataEvent } from './major-head-chart/EmitMajorHeadData';
import { HttpClient } from '@angular/common/http';
import { User } from './UserModel';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }
  private subject = new Subject<EmitFilterEvent>();
  private subjectMajor = new Subject<MajorHeadDataEvent>();
  baseurl: string ="http://localhost:8088/fir/";

  sendClickEvent(data : EmitFilterEvent){
    console.log("inside send click event");
        this.subject.next(data);
  }

  getClickedEvent():Observable<EmitFilterEvent>{
  return this.subject.asObservable();
  }

  sendMajorHeadChartClickEvent(data : MajorHeadDataEvent){
    this.subjectMajor.next(data);
  }

  getMajorHeadChartClickEvent():Observable<MajorHeadDataEvent>{
    return this.subjectMajor.asObservable();
  }

  getCasUserDetails(){
    return this.http.get(this.baseurl+"getLoggedInUserDetails");
  }

  
}
