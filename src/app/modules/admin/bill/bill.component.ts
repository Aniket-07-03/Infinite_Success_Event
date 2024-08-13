import { Component } from '@angular/core';
interface bill {
  InvoiceID:number;
  EventName: string
  Date:string
  TicketType:string
  Amount:number

}

interface Meal {
  pinLevel: string;
  veg: number;
  nonVeg: number;
  shake: number;
  total: number;
}
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrl: './bill.component.css'
})
export class BillComponent {
  events: bill[] = [
    { InvoiceID:1234,EventName:'UIUX Workshop',Date:'25/03/22',TicketType:'single',Amount:1500},
    { InvoiceID:1234,EventName:'UIUX Workshop',Date:'25/03/22',TicketType:'single',Amount:1500},
    { InvoiceID:1234,EventName:'UIUX Workshop',Date:'25/03/22',TicketType:'single',Amount:1500},
    { InvoiceID:1234,EventName:'UIUX Workshop',Date:'25/03/22',TicketType:'single',Amount:1500},
    { InvoiceID:1234,EventName:'UIUX Workshop',Date:'25/03/22',TicketType:'single',Amount:1500},
    { InvoiceID:1234,EventName:'UIUX Workshop',Date:'25/03/22',TicketType:'single',Amount:1500},
    { InvoiceID:1234,EventName:'UIUX Workshop',Date:'25/03/22',TicketType:'single',Amount:1500},
    { InvoiceID:1234,EventName:'UIUX Workshop',Date:'25/03/22',TicketType:'single',Amount:1500},
    // More data...
  ];

  meals: Meal[] = [
    { pinLevel: 'World Team', veg: 100, nonVeg: 200, shake: 130, total: 430 },
    { pinLevel: 'World Team', veg: 200, nonVeg: 200, shake: 150, total: 550 },
    { pinLevel: 'World Team', veg: 100, nonVeg: 200, shake: 130, total: 430 },
    { pinLevel: 'World Team', veg: 100, nonVeg: 200, shake: 130, total: 430 },
    { pinLevel: 'World Team', veg: 100, nonVeg: 200, shake: 130, total: 430 },
    { pinLevel: 'World Team', veg: 100, nonVeg: 200, shake: 130, total: 430 },
    { pinLevel: 'World Team', veg: 100, nonVeg: 200, shake: 130, total: 430 },
    { pinLevel: 'World Team', veg: 100, nonVeg: 200, shake: 130, total: 430 },
    // More data...
  ];

  selectedTab: 'master' | 'meal' = 'master';

  selectTab(tab: 'master' | 'meal'): void {
    this.selectedTab = tab;
  }

  exportCSV(): void {
    const data = this.selectedTab === 'master' ? this.events : this.meals;
    const csvContent = this.convertToCSV(data);
    this.downloadCSV(csvContent, `${this.selectedTab}-report.csv`);
  }

  private convertToCSV(data: any[]): string {
    if (data.length === 0) return '';

    const keys = Object.keys(data[0]);
    const header = keys.join(',');
    const rows = data.map(row => keys.map(key => this.escapeCSVValue(row[key])).join(',')).join('\n');

    return `${header}\n${rows}`;
  }

  private escapeCSVValue(value: any): string {
    if (typeof value === 'string') {
      return `"${value.replace(/"/g, '""')}"`; // Escape double quotes
    }
    return value;
  }

  private downloadCSV(csvContent: string, fileName: string): void {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', fileName);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  selectedInvoice: bill | null = null;

  printInvoice(event: bill): void {
    this.selectedInvoice = event; // Assign the clicked event to selectedInvoice
    setTimeout(() => {
      window.print(); // Print the page
    }, 100); // Slight delay to ensure DOM updates before print
  }

}
