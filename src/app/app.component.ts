import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  someValue: string ="";
  someValues:Array<string> = new Array<string>();
  Callsomelogic(){
    this.someValues.push(this.someValue);
    this.someValue="";

  }



}
