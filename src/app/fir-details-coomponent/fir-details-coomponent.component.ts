import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FirDetailPopupServiceService } from './fir-detail-popup-service.service';
import { FirEntityPopUp } from './firDetailPopUp';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-fir-details-coomponent',
  templateUrl: './fir-details-coomponent.component.html',
  styleUrls: ['./fir-details-coomponent.component.css']
})
export class FirDetailsCoomponentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data , private firService : FirDetailPopupServiceService) { }
  firPopUp : FirEntityPopUp;
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  iif2 :any;
  iif3: any;
  iif4: any;
  iif5: any;
  iif6: any;
  iif7: any;
  bufferValue = 45;

  ngOnInit(): void {
    this.firService.getFirDetailPopup(this.data.fir).subscribe(result=>{
      this.firPopUp = result as FirEntityPopUp;
      console.log(this.firPopUp);
    });

    this.firService.getIfIIf2Filled(this.data.fir).subscribe(result =>{
      this.iif2 = result;
    });

    this.firService.getIfIIf3Filled(this.data.fir).subscribe(result =>{
      this.iif3 = result;
    });

    this.firService.getIfIIf4Filled(this.data.fir).subscribe(result =>{
      this.iif4 = result;
    });
  }

}
