import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

public styleH1Element: boolean = true;
public getColor:string = "orange";
public styleObject = {
  color: "lightgrey", 
  fontStyle: "italic"
 }

 shouldGreetUser = false;


 public twoWaybinding = "";

 public testSwitch = "";
 public testSwitch2 = "red";

 
// component interaction, get value from App-Component!
@Input() public parentData: string = "";

@Output() public childData = new EventEmitter();


 // dependency injection... with typescript shortcut
constructor(private testService: TestserviceService){

}

 ngOnInit(): void {
  // subscribing this component to the data returned by the service!
  this.testService.getPeople().subscribe( (data) => this.people = data, (error) => this.errorVariable = error);
 }


 // basic event handling...
 sayHello(){
  this.hello = "hello, there how are you?";  
 }

 trigger() {
  this.childData.emit("sending data from child to Parent component!");
 }

}

