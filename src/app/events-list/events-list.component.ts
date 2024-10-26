
import { Component, NgModule, OnInit } from '@angular/core';
import { EventService } from '../../services/EventService';
import { Events } from '../../types/Events';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-events-list',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: Events[] = [];

  constructor(private eventService: EventService, NGModule : NgModule) {}

  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents(): void {
    this.eventService.getEvents().subscribe({
      next: (data) => {
        this.events = data;
      },
      error: (error) => {
        console.error('Error fetching events:', error);
      }
    });
  }
}

