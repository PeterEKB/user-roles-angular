import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.html',
  styleUrls: ['./card.scss'],
})
export class Card {
  @Input() info: any;
  @Output() editUserEvent = new EventEmitter();

  editUser(index) {
    this.editUserEvent.emit(index);
  }
}
