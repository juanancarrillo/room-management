// floor-selector.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-floor-selector',
  templateUrl: './floor-selector.component.html',
  styleUrls: ['./floor-selector.component.scss']
})
export class FloorSelectorComponent {
  floors = [1, 2]; // Plantas disponibles

  @Output() floorChanged = new EventEmitter<number>();

  onFloorChange(event: any) {
    this.floorChanged.emit(event.target.value);
  }
}
