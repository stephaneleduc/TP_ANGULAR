import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MyEvent } from '../models/MyEvent';
import { Link } from '../models/Link';

@Component({
  selector: 'app-myevent',
  templateUrl: './myevent.component.html',
  styleUrls: ['./myevent.component.css']
})
export class MyeventComponent {

  public btnparticipation: string = "Participer";
  public participer: boolean = false;

  @Input() public usedEvent: MyEvent;

  @Input() public usedposition: number;

  @Output() public onDelete: EventEmitter<number> = new EventEmitter();

  @Output() public onParticipation: EventEmitter<number> = new EventEmitter();

  @Output() public onChangeBtn: EventEmitter<string> = new EventEmitter();

  changeParticipation() {

    this.changebtn();
    this.participation();


  }

  changebtn() {

    this.onChangeBtn.emit (this.btnparticipation);
  }

  delete() {

    this.onDelete.emit (this.usedposition);

  }

  participation() {

    this.switchTxtBtn();
    this.onParticipation.emit(this.usedposition);
  }

  switchTxtBtn() {

    this.participer = !this.participer;
    this.btnparticipation = this.participer ? "Ne plus participer" : "Participer";
  }


}
