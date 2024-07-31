// app.component.ts
import { Component } from '@angular/core';
import { RoomService } from './services/room.service';
import { Room } from './models/room.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFloor: number = 1;
  rooms: Room[] = [];
  selectedRoom: Room = { id: 0, name: '', capacity: 0, occupancy: 0, floor: 1 };

  constructor(private roomService: RoomService) {}

  ngOnInit() {
    this.loadRooms();
  }

  onFloorChanged(floor: number) {
    this.selectedFloor = floor;
    this.loadRooms();
    this.resetSelectedRoom();
  }

  onEditRoom(room: Room) {
    this.selectedRoom = { ...room };
  }

  onRoomSaved() {
    this.loadRooms();
    this.resetSelectedRoom();
  }

  resetSelectedRoom() {
    this.selectedRoom = { id: 0, name: '', capacity: 0, occupancy: 0, floor: this.selectedFloor };
  }

  private loadRooms() {
    this.roomService.getRoomsByFloor(this.selectedFloor).subscribe(rooms => {
      this.rooms = rooms;
    });
  }
}
