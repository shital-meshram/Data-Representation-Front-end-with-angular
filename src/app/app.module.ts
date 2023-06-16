import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TabsComponent } from './tabs/tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,  ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './home/home.component';
//import { RegistrationComponent } from './registration/registration.component';
//import { InvestigationComponent } from './investigation/investigation.component';
import { FooterComponent } from './footer/footer.component';
//import { CarousalComponent } from './carousal/carousal.component';
import { FirChartComponent } from './fir-chart/fir-chart.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { FirStatusChartComponent } from './fir-status-chart/fir-status-chart.component';
//import { MatCarouselModule } from 'ng-mat-carousel';
import { FirSearchByDateComponent } from './fir-search-by-date/fir-search-by-date.component';
//import { MenuComponent } from './menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
//import { NavComponent } from './nav/nav.component';
import {MatSelectModule} from '@angular/material/select';
import { HomecontentComponent } from './homecontent/homecontent.component';
import { FirdetailsComponent } from './firdetails/firdetails.component';
import { RegistrationComponent } from './registration/registration.component';
import { InvestigationComponent } from './investigation/investigation.component';
import {MatDividerModule} from '@angular/material/divider';
import { HighchartsChartModule } from 'highcharts-angular';
import { DashboardChipsComponent } from './dashboard-chips/dashboard-chips.component';
import { FiltersComponent } from './filters/filters.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FirDetailsCoomponentComponent } from './fir-details-coomponent/fir-details-coomponent.component';
import { TotalFirTableComponent } from './total-fir-table/total-fir-table.component';
import { MajorHeadChartComponent } from './major-head-chart/major-head-chart.component';
import { MajorHeadFirTableComponent } from './major-head-fir-table/major-head-fir-table.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavbarComponent,
    TabsComponent,
    HomecontentComponent,
    HomeComponent,
    FooterComponent,
    FirdetailsComponent,
    DashboardComponent,
    FirSearchByDateComponent,
    FirChartComponent,
    FirStatusChartComponent,
    RegistrationComponent,
    InvestigationComponent,
    DashboardChipsComponent,
    FiltersComponent,
    FirDetailsCoomponentComponent,
    TotalFirTableComponent,
    MajorHeadChartComponent,
    MajorHeadFirTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    NgbModule,
    MatSidenavModule,
    MatListModule,
    MatNativeDateModule,
    MatDatepickerModule,
    //MatCarouselModule,
    MatMenuModule,
    MatGridListModule,
    LayoutModule,
    MatSelectModule,
    MatDividerModule,
    HighchartsChartModule,
    MatDialogModule,
    MatProgressBarModule,
    MatSliderModule
    //ChartModule,
    //CheckBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
