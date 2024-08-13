import { Component } from '@angular/core';

@Component({
  selector: 'app-assign-event-list',
  templateUrl: './assign-event-list.component.html',
  styleUrl: './assign-event-list.component.css'
})
export class AssignEventListComponent {
  events = [
    {
      image:         "https://cdn-gfmpn.nitrocdn.com/abNxfFokLJpCUCJuKcOdzZamuyKtSvkP/assets/images/source/rev-60b2a26/www.oneplanevents.com/wp-content/uploads/elementor/thumbs/Screenshot-2023-07-25-at-14.13.30-q9xo29f2ds5pjhcg0xr1gmjbpdm2pv4ex0mdj1cjxs.png"
      ,
      title: 'Day in the sun!',
      date: 'Sunday, 9 March 2022 - 10:00 am',
      description: 'Lorem ipsum dolor sit amet consectetur...'
    },
    {
      image:         "https://cdn-gfmpn.nitrocdn.com/abNxfFokLJpCUCJuKcOdzZamuyKtSvkP/assets/images/source/rev-60b2a26/www.oneplanevents.com/wp-content/uploads/elementor/thumbs/Screenshot-2023-07-25-at-14.13.30-q9xo29f2ds5pjhcg0xr1gmjbpdm2pv4ex0mdj1cjxs.png"
      ,
      title: 'Day in the sun!',
      date: 'Sunday, 9 March 2022 - 10:00 am',
      description: 'Lorem ipsum dolor sit amet consectetur...'
    },
    {
      image:        "https://cdn-gfmpn.nitrocdn.com/abNxfFokLJpCUCJuKcOdzZamuyKtSvkP/assets/images/source/rev-60b2a26/www.oneplanevents.com/wp-content/uploads/elementor/thumbs/Screenshot-2023-07-25-at-14.13.30-q9xo29f2ds5pjhcg0xr1gmjbpdm2pv4ex0mdj1cjxs.png"
      ,
      title: 'Day in the sun!',
      date: 'Sunday, 9 March 2022 - 10:00 am',
      description: 'Lorem ipsum dolor sit amet consectetur...'
    },
    {
      image:   "https://cdn-gfmpn.nitrocdn.com/abNxfFokLJpCUCJuKcOdzZamuyKtSvkP/assets/images/source/rev-60b2a26/www.oneplanevents.com/wp-content/uploads/elementor/thumbs/Screenshot-2023-07-25-at-14.13.30-q9xo29f2ds5pjhcg0xr1gmjbpdm2pv4ex0mdj1cjxs.png" ,
      title: 'Day in the sun!',
      date: 'Sunday, 9 March 2022 - 10:00 am',
      description: 'Lorem ipsum dolor sit amet consectetur...'
    },
    // Add more event objects as needed
  ];
  isSidebarOpen: boolean = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
