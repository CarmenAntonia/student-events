import { Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { TasksComponent } from './tasks/tasks.component';
import { EventsListComponent } from './events-list/events-list.component';

export const routes: Routes = [
   {path: 'events', component: EventsComponent},
   {path: 'tasks', component: TasksComponent},
   {path: '', redirectTo: '/events', pathMatch: 'full'},
   {path: 'eventsList', component: EventsListComponent}
];
