import { Component } from '@angular/core';
import { EventService } from '../../../core/event.service';
import { format, parseISO } from 'date-fns';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-dashboard',
  templateUrl: './member-dashboard.component.html',
  styleUrl: './member-dashboard.component.css'
})
export class MemberDashboardComponent {
  events = [
    { title: 'Max Meet-up', location: 'Chennai Trade Centre', date: '2nd March 2023', time: '10:00 AM' },
    { title: 'Max Meet-up', location: 'Chennai Trade Centre', date: '2nd March 2023', time: '10:00 AM' },
    { title: 'Max Meet-up', location: 'Chennai Trade Centre', date: '2nd March 2023', time: '10:00 AM' },
    { title: 'Max Meet-up', location: 'Chennai Trade Centre', date: '2nd March 2023', time: '10:00 AM' },
    { title: 'Max Meet-up', location: 'Chennai Trade Centre', date: '2nd March 2023', time: '10:00 AM' },
  ];



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

 // Function to format the date string using date-fns
 formatEventDate(dateString: string): string {
  try {
    const date = parseISO(dateString); // Parse the ISO string
    return format(date, 'do MMMM yyyy'); // Format the date to '2nd March 2023'
  } catch (error) {
    console.error('Invalid date format', error);
    return dateString; // Return the original string if there's an error
  }
}


viewDetails(id: number): void {
  this.router.navigate(['/member-event', id]);

}
}
