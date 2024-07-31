// room-list.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Room } from '../../models/room.model';

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
export class RoomListComponent {
  @Input() floor!: number;
  @Input() rooms: Room[] = [];
  @Output() editRoomEvent = new EventEmitter<Room>();

  constructor() {}

  editRoom(room: Room) {
    this.editRoomEvent.emit(room);
  }

  deleteRoom(roomId: number) {
    // No necesitamos hacer nada aquí ya que el padre manejará la eliminación
  }
}
