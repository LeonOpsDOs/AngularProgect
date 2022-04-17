import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['base.css','./app.component.scss']
})
export class AppComponent {
  title = "Hello"
  public attrbutes = { id: 'hello' };
  someClass: any;
  constructor() {}
  public onClick() {
    this.attrbutes = { id: 'paragraph' };
  }
  public onClickUserUpdateButton(){
    console.log('1')
  }
}
