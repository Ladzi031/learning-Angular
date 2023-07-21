import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  
  public departmentId: number = 0;
  public selectedId = 0;

  constructor(private route: ActivatedRoute, private router: Router){
    // this service will provide the instance of the url directly
  }

  ngOnInit() {
    // get the current url and get the id param!
    
    
    
    /*
    let id = this.route.snapshot.paramMap.get('id') as string;
    this.departmentId = parseInt(id);
    */

    //  snapshot vs. paramMap

    // this way is a little better, as the param gets updated, we also get the updated value! unlike the previous one
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.departmentId = parseInt(param.get('id') as string);
    })
    this.selectedId = this.departmentId;
  }

  onPrevious(){
    this.router.navigate(["/departments", this.departmentId - 1]);
  }
  onNext(){
    this.router.navigate(["/departments", this.departmentId + 1]);
  }

  gotoDepartments(){
    
    // this.router.navigate(["/departments", {id: selectedId}]);
    
    //note the Object being passed here!... this signifies an Optional route parameter!
    // it route the the department component with the selectId as an optional... it does not affect the actual url route!
    // we might want to use this selectId in the departments component, probably perform some logic with it


    // Relative Navigation for much flexible routes with Optional route parameters!
    this.router.navigate(['../', {id: this.selectedId}], {relativeTo: this.route});
  }


  // render the children routes/components relative to the current route!
  // you can also add wild-card routes to handle errors in child routes

  renderOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route});
  }
  renderContact(){
    this.router.navigate(['contact'], {relativeTo: this.route});
  }

}
