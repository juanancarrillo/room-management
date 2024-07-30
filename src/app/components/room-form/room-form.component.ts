/*import { Component } from '@angular/core';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.scss']
})
export class RoomFormComponent {

}
*/
// room-form.component.ts
import { Component, Input } from '@angular/core';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-room-form',
  template: `
    <form (ngSubmit)="saveRoom()">
      <input type="text" [(ngModel)]="room.name" name="name" placeholder="Nombre de la sala">
      <input type="number" [(ngModel)]="room.capacity" name="capacity" placeholder="Capacidad">
      <input type="number" [(ngModel)]="room.occupancy" name="occupancy" placeholder="Ocupación">
      <button type="submit">Guardar</button>
    </form>
  `,
  styles: []
})
export class RoomFormComponent {
  @Input() room = { id: 0, name: '', capacity: 0, occupancy: 0, floor: 1 };

  constructor(private roomService: RoomService) {}

  saveRoom() {
    if (this.room.id) {
      this.roomService.updateRoom(this.room);
    } else {
      this.roomService.addRoom(this.room);
    }
  }
}
