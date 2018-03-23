import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MyEvent } from '../models/MyEvent';

@Component({
  selector: 'app-myevent',
  templateUrl: './myevent.component.html',
  styleUrls: ['./myevent.component.css']
})
export class MyeventComponent {

  @Input() public usedEvent: MyEvent;

  @Input() public usedposition: number;

  @Output() public onDelete: EventEmitter<number> = new EventEmitter();

  @Output() public onParticipation: EventEmitter<number> = new EventEmitter();

  delete() {

    this.onDelete.emit (this.usedposition);

  }

  participation() {

    this.onParticipation.emit(this.usedEvent.getId());
  }


}
