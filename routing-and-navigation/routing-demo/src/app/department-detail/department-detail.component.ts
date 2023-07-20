import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {


  public departmentId: number = 0;
  constructor(private route: ActivatedRoute){
    // this service will provide the instance of the url directly
  }

  ngOnInit() {
    // get the current url and get the id param!
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.departmentId;
  }

}
