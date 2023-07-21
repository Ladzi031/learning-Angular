import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

 interface Test {
  "id": number,
  "name": string
 }
@Component({
  selector: 'app-dempartment-list',
  templateUrl: './dempartment-list.component.html',
  styleUrls: ['./dempartment-list.component.css']
})
export class DempartmentListComponent implements OnInit{

public selectedId: number = 0;

  public departments: Test[] = [
    {"id": 1, "name": "angular"},
    {"id": 2, "name": "mongoDB"},
    {"id": 3, "name": "python"},
    {"id": 5, "name": "java"},
    {"id": 6, "name": "node"}
  ]


constructor(private router: Router, private route: ActivatedRoute){
}
ngOnInit(): void {
  this.route.paramMap.subscribe((param: ParamMap) => {
    this.selectedId = parseInt(param.get('id') as string);
  })
}
  // goal is to display the selected item in a different view component!
  public onSelect(department: Test) {
    // get the routing service first (import it)
    // provide navigate method with all the info it needs to construct the URL!
    this.router.navigate(['/departments', department["id"]]);
  }

  isSelected(dempartment: Test){
    return dempartment.id === this.selectedId;
  }
}
