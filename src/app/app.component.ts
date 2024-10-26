import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { TasksComponent } from './tasks/tasks.component';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './events-list/events-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EventsComponent, TasksComponent, CommonModule, EventsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-events';
}
