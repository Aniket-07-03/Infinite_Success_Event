import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../../../core/event.service';

@Component({
  selector: 'app-event-sidebar',
  templateUrl: './event-sidebar.component.html',
  styleUrl: './event-sidebar.component.css'
})
export class EventSidebarComponent {
  eventData: any;

  constructor(private eventService: EventService, private router:Router) { }

  ngOnInit(): void {
    this.eventService.getEvent().subscribe(
      data => {
        this.eventData = data;
        console.log(this.eventData);
      },
      error => {
        console.error('Error fetching event data', error);
      }
    );
  }

  viewDetails(id: number): void {
    this.router.navigate(['/member-event', id]);

  }

 
}
