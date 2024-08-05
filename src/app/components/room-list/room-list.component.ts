import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnChanges {
  @Input() floor: number = 1;
  @Input() rooms: Room[] = [];
  @Output() editRoomEvent = new EventEmitter<Room>();
  @Output() roomDeleted = new EventEmitter<void>();

  constructor(private roomService: RoomService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['floor']) {
      this.loadRooms();
    }
  }

  private loadRooms() {
    this.roomService.getRoomsByFloor(this.floor).subscribe(rooms => {
      this.rooms = rooms;
    });
  }

  editRoom(room: Room) {
    this.editRoomEvent.emit(room);
  }

  deleteRoom(roomId: number) {
    this.roomService.deleteRoom(roomId).subscribe(() => {
      this.roomDeleted.emit();
      this.loadRooms();
    });
  }
}
