import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.css']
})
export class App1Component {

  toggle : boolean = false;
  srcPath : String = "assets/myimage.png"

  public method1() : void {
    if(this.toggle===false){
      this.srcPath="assets/yahoo.png";
      this.toggle=!this.toggle;
    }
    else
    {
      this.srcPath="assets/myimage.png";
      this.toggle=!this.toggle;
    }
  }

}
