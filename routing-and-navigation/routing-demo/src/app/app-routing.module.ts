import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DempartmentListComponent } from './dempartment-list/dempartment-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
const routes: Routes = [
  {path: '', redirectTo: '/departments', pathMatch: 'full'},
  {path: 'departments', component: DempartmentListComponent},
  {path: 'departments/:id', component: DepartmentDetailComponent,
   children: [
    {path: 'overview', component: DepartmentOverviewComponent}, 
    {path: 'contact', component: DepartmentContactComponent}]},
  {path: 'employees', component: EmployeeListComponent},
  {path: "**", component: PageNotFoundComponent}
];
// path specifies the path in the url (e.g localhost:4200/departments) and this should render the respective component
// the added children components are only available once we have accessed the department/:id path!  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  DempartmentListComponent,
  EmployeeListComponent,
  PageNotFoundComponent,
  DepartmentDetailComponent, 
  DepartmentContactComponent,
  DepartmentOverviewComponent
];
// for cleaner code,  when importing in the app.module.ts file 
