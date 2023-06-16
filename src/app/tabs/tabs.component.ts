import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute, Route } from '@angular/router';
import { Tabs } from './Tabs';
import { Router } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Output() toggleSideNavForMe : EventEmitter<any> = new EventEmitter()

  tabIndex: Tabs;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.setTab(Tabs.home);
  }

  toogleSideBar(){
    this.toggleSideNavForMe.emit();
  }

  setTab(tab: Tabs) {
    this.tabIndex = tab;
  }

  onTabChanged(event: MatTabChangeEvent): void {
    switch (event.index) {
      case 0: // index of the tab
        // this is our stub tab for link
        this.router.navigate(['/home']);

        break;
      case 1:
        this.router.navigate(['/reg']);
        break;
      case 2:
        this.router.navigate(['/inv']);
        break;
      case 3:
        this.router.navigate(['/logout']);
        break;
    }
  }

}
