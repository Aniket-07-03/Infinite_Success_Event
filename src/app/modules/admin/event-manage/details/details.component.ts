import { Component } from '@angular/core';
import { EventService } from '../../../../core/event.service';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  eventData: any;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.eventService.getEventById(id).subscribe((data) => {
      this.eventData = data;
    });
  }

  // Function to confirm export
  confirmExportPdf(): void {
    const confirmation = confirm('Do you want to download the PDF?');
    if (confirmation) {
      this.exportPdf();
    }
  }

  // PDF export function
  exportPdf(): void {
    const element = document.querySelector('.export-section') as HTMLElement; // Select only the specific section

    html2canvas(element).then((canvas) => {
      const pdf = new jsPDF('p', 'mm', 'a4');

      // PDF page configuration
      const imgWidth = 210; // Width in mm
      const pageHeight = 297; // Height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      const imgData = canvas.toDataURL('image/png');

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add more pages if needed
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('event-details.pdf');
    });
  }


  showMoreImages = false;

  get visibleImages() {
    // Show first 4 images
    return this.eventData?.images.slice(0, 4) || [];
  }

  get hiddenImages() {
    // Show images beyond the first 4
    return this.eventData?.images.slice(4) || [];
  }

  toggleMoreImages() {
    this.showMoreImages = !this.showMoreImages;
  }
}
