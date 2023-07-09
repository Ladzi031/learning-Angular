import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DempartmentListComponent } from './dempartment-list/dempartment-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
const routes: Routes = [
  { path: 'departments', component: DempartmentListComponent},
  {path: 'employees', component: EmployeeListComponent}
];
// path specifies the path in the url (e.g localhost:4200/departments) and this should render the respective component


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DempartmentListComponent, EmployeeListComponent];
// for cleaner code, for when importing in the app.module.ts file 
