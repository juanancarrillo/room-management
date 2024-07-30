// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFloor: number = 1;
  selectedRoom = { id: 0, name: '', capacity: 0, occupancy: 0, floor: 1 };

  onFloorChanged(floor: number) {
    this.selectedFloor = floor;
  }
}
