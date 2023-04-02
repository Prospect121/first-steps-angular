import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componets',
  templateUrl: './componets.component.html',
  styleUrls: ['./componets.component.scss'],
})
export class ComponetsComponent {
  @Input() nameButton: string = 'search';
  @Output() emitEvent: EventEmitter<void> = new EventEmitter();
}
