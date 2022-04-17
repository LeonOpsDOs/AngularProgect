import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  title = "Leon"
  @Input()
  name: string

  @Output()
  buttonClick = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  public onClick(){
    this.buttonClick.emit("button oooo")
  }
}
