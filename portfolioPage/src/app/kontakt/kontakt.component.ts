import { Component } from '@angular/core';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    // Hier können Sie die Logik für das Absenden des Formulars implementieren
    console.log('Formulardaten:', this.formData);
  }
}