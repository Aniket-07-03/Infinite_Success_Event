import { Component } from '@angular/core';
interface bill {
  InvoiceID:number;
  EventName: string
  Date:string
  TicketType:string
  Amount:number

}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  events: bill[] = [
    { InvoiceID: 1234, EventName: 'UIUX Workshop', Date: '25/03/22', TicketType: 'single', Amount: 1500 },
    // Additional data...
  ];

  selectedInvoice: bill | null = null;

  printInvoice(event: bill): void {
    this.selectedInvoice = event; // Assign the clicked event to selectedInvoice
    setTimeout(() => {
      window.print(); // Print the page
    }, 100); // Slight delay to ensure DOM updates before print
  }



}
