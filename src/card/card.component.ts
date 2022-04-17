import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  public name

  @Input()
  public number:string;

  @Input()
  public amount

  @Input()
  public expirationDate

  @Input()
  public paymentSystem: "visa"|"mastercard" = "visa"

  constructor() {

  }

  ngOnInit(): void {
  }

}
