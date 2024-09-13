import { Component } from '@angular/core';
import { EventService } from '../../core/event.service';
import { format, parseISO } from 'date-fns'; // Import date-fns functions

@Component({
  selector: 'app-dash-examp',
  templateUrl: './dash-examp.component.html',
  styleUrl: './dash-examp.component.css'
})
export class DashExampComponent {
  eventData: any;

  constructor(private eventService: EventService) { }

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
}

