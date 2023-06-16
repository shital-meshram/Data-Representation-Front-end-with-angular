import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FirChartComponent } from './fir-chart/fir-chart.component';
import { FirSearchByDateComponent } from './fir-search-by-date/fir-search-by-date.component';
import { FirStatusChartComponent } from './fir-status-chart/fir-status-chart.component';
import { FirdetailsComponent } from './firdetails/firdetails.component';
import { HomeComponent } from './home/home.component';
import { InvestigationComponent } from './investigation/investigation.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthguardGuard } from './Services/authguard.guard';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';

const routes: Routes = [
{path:'', component:HomeComponent},
{path:'home', component:HomeComponent},
{path:'reg', component:RegistrationComponent},
{path:'inv', component:InvestigationComponent},
// {path:'fir', component:DashboardComponent,canActivate: [AuthguardGuard]},
{path:'fir/{name}', component:DashboardComponent},
//{path:'fir', component:DashboardComponent},
// {path:'firChart', component: FirChartComponent, canActivate: [AuthguardGuard]},
{path:'firChart', component: FirChartComponent},
{path:'firStatusChart', component: FirStatusChartComponent},
{path:'firSearchBydate', component:FirSearchByDateComponent},
{path:'navbar', component:SidenavbarComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
