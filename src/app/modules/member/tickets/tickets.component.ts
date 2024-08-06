import { Component } from '@angular/core';
interface Event {
  id: number;
  event_Name: string;
  status: string;
  date: number;
  ticket_Type: string;
  amount: string;
  action: string;
  share: string;
  SpouseName: string;
  TeamName: string;
}

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  events: Event[] = [
    { id: 1, event_Name: 'UIUX Workshop', status:'A.Ayaan', date: 2, ticket_Type: 'Non-Veg', amount: 'Non-veg', action: 'W11346578', share: 'Manager', SpouseName: 'Kavita.M', TeamName: 'Infinite' },
    { id: 2, event_Name: 'UIUX Workshop', status: 'A.Ayaan', date: 2, ticket_Type: 'Non-Veg', amount: 'Non-veg', action: 'W11346578', share: 'Manager', SpouseName: 'Kavita.M', TeamName: 'Infinite' },
    { id: 3, event_Name: 'UIUX Workshop', status: 'A.Ayaan', date: 2, ticket_Type: 'Non-Veg', amount: 'Non-veg', action: 'W11346578', share: 'Manager', SpouseName: 'Kavita.M', TeamName: 'Infinite' },
    { id: 4, event_Name: 'UIUX Workshop', status: 'A.Ayaan', date: 2, ticket_Type: 'Non-Veg', amount: 'Non-veg', action: 'W11346578', share: 'Manager', SpouseName: 'Kavita.M', TeamName: 'Infinite' },
    { id: 5, event_Name: 'UIUX Workshop', status: 'A.Ayaan', date: 2, ticket_Type: 'Non-Veg', amount: 'Non-veg', action: 'W11346578', share: 'Manager', SpouseName: 'Kavita.M', TeamName: 'Infinite' },
    { id: 6, event_Name: 'UIUX Workshop', status: 'A.Ayaan', date: 2, ticket_Type: 'Non-Veg', amount: 'Non-veg', action: 'W11346578', share: 'Manager', SpouseName: 'Kavita.M', TeamName: 'Infinite' },
    { id: 7, event_Name: 'UIUX Workshop', status: 'A.Ayaan', date: 2, ticket_Type: 'Non-Veg', amount: 'Non-veg', action: 'W11346578', share: 'Manager', SpouseName: 'Kavita.M', TeamName: 'Infinite' },
    { id: 8, event_Name: 'UIUX Workshop', status: 'A.Ayaan', date: 2, ticket_Type: 'Non-Veg', amount: 'Non-veg', action: 'W11346578', share: 'Manager', SpouseName: 'Kavita.M', TeamName: 'Infinite' },
    // More data...
  ];

}
