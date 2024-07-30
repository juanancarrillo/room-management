import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloorSelectorComponent } from './components/floor-selector/floor-selector.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { RoomFormComponent } from './components/room-form/room-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FloorSelectorComponent,
    RoomListComponent,
    RoomFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
