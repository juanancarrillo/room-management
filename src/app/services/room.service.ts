// room.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl = 'http://localhost:3000/rooms'; // URL base de la API

  constructor(private http: HttpClient) {}

  getRoomsByFloor(floor: number): Observable<Room[]> {
    return this.http.get<Room[]>(this.apiUrl).pipe(
      map(rooms => rooms.filter(room => room.floor === floor))
    );
  }

  addRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(this.apiUrl, room);
  }

  updateRoom(room: Room): Observable<Room> {
    return this.http.put<Room>(`${this.apiUrl}/${room.id}`, room);
  }

  deleteRoom(roomId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${roomId}`);
  }
}
