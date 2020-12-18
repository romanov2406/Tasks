import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { Forms } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { HomeComponent } from './layouts/home/home.component';
import { WorksComponent } from './layouts/works/works.component';
import { CenzorComponent } from './layouts/works/cenzor/cenzor.component';
import { UsersListComponent } from './layouts/works/users-list/users-list.component';
import { TaskListComponent } from './layouts/works/task-list/task-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WorksComponent,
    CenzorComponent,
    UsersListComponent,
    TaskListComponent
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
