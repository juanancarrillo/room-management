// room.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

interface Room {
  id: number;
  name: string;
  capacity: number;
  occupancy: number;
  floor: number;
}

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private rooms = new BehaviorSubject<Room[]>([
    { id: 1, name: 'Room A', capacity: 10, occupancy: 5, floor: 1 },
    { id: 2, name: 'Room B', capacity: 20, occupancy: 15, floor: 1 },
    { id: 3, name: 'Room C', capacity: 15, occupancy: 10, floor: 2 },
  ]);

  rooms$ = this.rooms.asObservable();

  getRoomsByFloor(floor: number) {
    return this.rooms$.pipe(
      map(rooms => rooms.filter(room => room.floor === floor))
    );
  }

  addRoom(room: Room) {
    const currentRooms = this.rooms.value;
    this.rooms.next([...currentRooms, room]);
  }

  updateRoom(updatedRoom: Room) {
    const currentRooms = this.rooms.value.map(room => 
      room.id === updatedRoom.id ? updatedRoom : room
    );
    this.rooms.next(currentRooms);
  }

  deleteRoom(roomId: number) {
    const currentRooms = this.rooms.value.filter(room => room.id !== roomId);
    this.rooms.next(currentRooms);
  }
}
