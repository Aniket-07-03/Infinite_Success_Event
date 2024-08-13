import { Component } from '@angular/core';
import { EventService } from '../../../../core/event.service';
import { format, parseISO } from 'date-fns';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; // Import ToastrService

@Component({
  selector: 'app-dash-detail',
  templateUrl: './dash-detail.component.html',
  styleUrls: ['./dash-detail.component.css'] // Fixed typo from 'styleUrl' to 'styleUrls'
})
export class DashDetailComponent {
  eventData: any;
  username: string = '';

  constructor(
    private eventService: EventService,
    private router: Router,
    private toastr: ToastrService // Inject ToastrService
  ) { }
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

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
    this.user();
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

  user() {
    const userString = localStorage.getItem('loggedInUser');
    const loggedInUser = userString ? JSON.parse(userString) : null;

    if (loggedInUser) {
      this.username = loggedInUser.username;
    }
  }

  onLogout() {
    localStorage.removeItem('loggedInUser');
    this.toastr.success('You have been logged out successfully!', 'Logout', {
      timeOut: 3000,
      closeButton: true,
      progressBar: true,
      positionClass: 'toast-top-right',
    });
    this.router.navigate(['/member-login']);
  }
}
