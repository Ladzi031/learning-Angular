import { Component, OnInit } from '@angular/core';
import { TestserviceService } from '../testservice.service';
import { StrangePeople } from '../../interfaces/StrangePeople';


@Component({
  selector: 'testing',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
  
public people: any = [];
public errorVariable = "";
public isDisabled: boolean = true;

public testTheButton = "testButton2";
public buttonColor: boolean = true;
public hello = "";

classObejct = {
  testButton1: true
}

constructor(private testService: TestserviceService){

}

 ngOnInit(): void {
  this.testService.getPeople().subscribe( (data) => this.people = data, (error) => this.errorVariable = error);
 }



 sayHello(){
  this.hello = "hello, there how are you?";  
 }

}
