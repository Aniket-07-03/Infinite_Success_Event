import { Component } from '@angular/core';
import { EventService } from '../../../core/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrl: './user-manage.component.css'
})
export class UserManageComponent {
  events = [
    { order: 2001, name: 'My Team Mega Workshop', date: '20 Oct 2022', location: 'Chennai' },
    { order: 2001, name: 'My Team Mega Workshop', date: '20 Oct 2022', location: 'Chennai' },
    { order: 2001, name: 'My Team Mega Workshop', date: '20 Oct 2022', location: 'Chennai' },
    { order: 2001, name: 'My Team Mega Workshop', date: '20 Oct 2022', location: 'Chennai' },
    { order: 2001, name: 'My Team Mega Workshop', date: '20 Oct 2022', location: 'Chennai' },
    { order: 2001, name: 'My Team Mega Workshop', date: '20 Oct 2022', location: 'Chennai' },
    { order: 2001, name: 'My Team Mega Workshop', date: '20 Oct 2022', location: 'Chennai' },
    { order: 2001, name: 'My Team Mega Workshop', date: '20 Oct 2022', location: 'Chennai' },
    { order: 2001, name: 'My Team Mega Workshop', date: '20 Oct 2022', location: 'Chennai' },
    { order: 2001, name: 'My Team Mega Workshop', date: '20 Oct 2022', location: 'Chennai' },
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
  viewDetails(id: number): void {
    this.router.navigate(['/event', id]);

  }


  isModalOpen = false;

  // Sample user data
  users = [
    { id: '#2001', name: 'A.Jadhav', location: 'Chennai', pinLevel: 'Manager' },
    { id: '#2002', name: 'A.Jadhav', location: 'Chennai', pinLevel: 'Manager' },
    { id: '#2003', name: 'A.Jadhav', location: 'Chennai', pinLevel: 'Manager' },
    { id: '#2004', name: 'A.Jadhav', location: 'Chennai', pinLevel: 'Manager' },
    { id: '#2005', name: 'A.Jadhav', location: 'Chennai', pinLevel: 'Manager' },
    // Add more users as needed
  ];

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
