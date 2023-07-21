import { Component } from '@angular/core';
import { Router } from '@angular/router';

 interface Test {
  "id": number,
  "name": string
 }
@Component({
  selector: 'app-dempartment-list',
  templateUrl: './dempartment-list.component.html',
  styleUrls: ['./dempartment-list.component.css']
})
export class DempartmentListComponent {
  public departments: Test[] = [
    {"id": 1, "name": "angular"},
    {"id": 2, "name": "mongoDB"},
    {"id": 3, "name": "python"},
    {"id": 5, "name": "java"},
    {"id": 6, "name": "node"}
  ]


constructor(private router: Router){
}

  // goal is to display the selected item in a different view component!
  public onSelect(department: Test) {
    // get the routing service first (import it)
    // provide navigate method with all the info it needs to construct the URL!
    this.router.navigate(['/departments', department["id"]]);
  }

}
