import { Component } from '@angular/core';

@Component({
  selector: 'app-full-page',
  templateUrl: './full-page.component.html',
  styleUrl: './full-page.component.css'
})
export class FullPageComponent {
  uploadedFile: File | null = null;

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      this.uploadedFile = event.dataTransfer.files[0];
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.uploadedFile = input.files[0];
    }
  }

  removeFile() {
    this.uploadedFile = null;
  }

  saveFile() {
    if (this.uploadedFile) {
      // Handle file upload logic here
      this.closeModal();
      this.openSuccessModal();
    }
  }

  closeModal() {
    const modal = document.getElementById('uploadModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  openModal() {
    const modal = document.getElementById('uploadModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  openSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }
}
