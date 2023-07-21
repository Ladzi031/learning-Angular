import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  
  public departmentId: number = 0;


  constructor(private route: ActivatedRoute, private router: Router){
    // this service will provide the instance of the url directly
  }

  ngOnInit() {
    // get the current url and get the id param!
    /*
    let id = this.route.snapshot.paramMap.get('id') as string;
    this.departmentId = parseInt(id);
    */


    // this way is a little better, as the param gets updated, we also get the updated value! unlike the previous one
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.departmentId = parseInt(param.get('id') as string);
    })
  }

  onPrevious(){
    this.router.navigate(["/departments", this.departmentId - 1]);
  }
  onNext(){
    this.router.navigate(["/departments", this.departmentId + 1]);
  }

}
