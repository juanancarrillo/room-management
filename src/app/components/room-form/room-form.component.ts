// room-form.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-room-form',
  template: `
    <form (ngSubmit)="saveRoom()">
      <input type="text" [(ngModel)]="room.name" name="name" placeholder="Nombre de la sala" required>
      <input type="number" [(ngModel)]="room.capacity" name="capacity" placeholder="Capacidad" required>
      <input type="number" [(ngModel)]="room.occupancy" name="occupancy" placeholder="Ocupación" required>
      <button type="submit">Guardar</button>
    </form>
  `,
  styles: []
})
export class RoomFormComponent {
  @Input() room: Room = { id: 0, name: '', capacity: 0, occupancy: 0, floor: 1 };
  @Output() roomSaved = new EventEmitter<void>();

  constructor(private roomService: RoomService) {}

  saveRoom() {
    if (this.room.id) {
      this.roomService.updateRoom(this.room).subscribe(updatedRoom => {
        this.roomSaved.emit();
      });
    } else {
      this.roomService.addRoom({ ...this.room, id: Date.now() }).subscribe(newRoom => {
        this.roomSaved.emit();
      });
    }
  }
}
