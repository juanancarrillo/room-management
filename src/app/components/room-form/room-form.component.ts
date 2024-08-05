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
  styles: [`
    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    input, button {
      padding: 10px;
      border-radius: 12px;
      border: 1px solid #ccc;
    }

    button {
      background-color: #2E344D;
      color: white;
      cursor: pointer;
    }

    button:hover {
      background-color: #1C1F33;
    }
  `]
})
export class RoomFormComponent {
  @Input() room: Room = { id: 0, name: '', capacity: 0, occupancy: 0, floor: 1 };
  @Output() roomSaved = new EventEmitter<void>();

  constructor(private roomService: RoomService) {}

  saveRoom() {
    if (this.room.id) {
      this.roomService.updateRoom(this.room).subscribe(() => {
        this.roomSaved.emit();
      });
    } else {
      this.roomService.addRoom(this.room).subscribe(newRoom => {
        this.room = newRoom;
        this.roomSaved.emit();
      });
    }
  }
}
