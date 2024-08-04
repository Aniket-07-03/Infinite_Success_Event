import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  upcomingEvents = [
    {
      image: 'assets/event1.jpg',
      title: 'Day in the sun!',
      date: 'Sunday, 8 March 2022 – 10:00 am',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      price: '1000/-'
    },
    // Add more events as needed
  ];

  recommendedEvents = [
    {
      image: 'assets/event2.jpg',
      title: 'Day in the sun!',
      date: 'Sunday, 8 March 2022 – 10:00 am',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      price: '1000/-'
    },
    // Add more events as needed
  ];
}
