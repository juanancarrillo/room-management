/*import { Component } from '@angular/core';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent {

}
*/

// room-list.component.ts
import { Component, Input, OnChanges } from '@angular/core';
import { RoomService } from '../../services/room.service';

interface Room {
  id: number;
  name: string;
  capacity: number;
  occupancy: number;
  floor: number;
}

@Component({
  selector: 'app-room-list',
  template: `
    <div *ngIf="rooms">
      <div *ngFor="let room of rooms">
        {{ room.name }} - Capacidad: {{ room.capacity }} - Ocupación: {{ room.occupancy }}
        <button (click)="editRoom(room)">Editar</button>
        <button (click)="deleteRoom(room.id)">Eliminar</button>
      </div>
    </div>
  `,
  styles: []
})
export class RoomListComponent implements OnChanges {
  @Input() floor!: number;
  rooms: Room[] = [];

  constructor(private roomService: RoomService) {}

  ngOnChanges() {
    if (this.floor) {
      this.roomService.getRoomsByFloor(this.floor).subscribe(rooms => this.rooms = rooms);
    }
  }

  editRoom(room: Room) {
    // Lógica para editar sala
  }

  deleteRoom(roomId: number) {
    this.roomService.deleteRoom(roomId);
  }
}


