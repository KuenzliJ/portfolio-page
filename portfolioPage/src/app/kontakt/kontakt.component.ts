import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  fact: string = '';
  status: boolean = false;
  constructor(private http: HttpClient) {}

  submitForm() {
    if (this.validateForm()) {
console.log('Formulardaten:', this.formData);

      const apiUrl = 'https://catfact.ninja/fact';

      this.http.get(apiUrl).subscribe(
        (response: any) => {
          console.log('API Response:', response);

          // Update the fact variable with the received fact
          this.fact = response.fact;
        },
        (error: any) => {
          console.error('API Error:', error);
        }
      );
    } else {
      // Nicht alle erforderlichen Felder sind ausgefüllt oder die Validierung ist fehlgeschlagen, Alert anzeigen
      alert('Please fill in all required fields correctly.');
    }
  }

  validateForm(): boolean {
    // Überprüfen, ob alle erforderlichen Felder ausgefüllt sind
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      return false;
    }

    // Überprüfen, ob die E-Mail-Adresse gültig ist
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(this.formData.email)) {
      return false;
    }

    // Wenn alle Validierungen erfolgreich sind
    console.log('Formulardaten:', this.formData);
    this.status = true;
    return true;
  }
}
