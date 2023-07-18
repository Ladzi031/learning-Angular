import { Component } from '@angular/core';

@Component({
  selector: 'app-dempartment-list',
  templateUrl: './dempartment-list.component.html',
  styleUrls: ['./dempartment-list.component.css']
})
export class DempartmentListComponent {
  public departments = [
    {id: 1, name: "angular"},
    {id: 2, name: "mongoDB"},
    {id: 3, name: "python"},
    {id: 5, name: "java"},
    {id: 6, name: "node"}
  ]

}
