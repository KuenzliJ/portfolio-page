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
    if (this.validateForm()) {
      // Alle erforderlichen Felder sind ausgefüllt und die Validierung ist erfolgreich
      console.log('Formulardaten:', this.formData);
    } else {
      // Nicht alle erforderlichen Felder sind ausgefüllt oder die Validierung ist fehlgeschlagen, Alert anzeigen
      alert('Bitte füllen Sie alle erforderlichen Felder korrekt aus.');
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

    // Fügen Sie hier weitere Validierungen für das Kommentarfeld hinzu, falls erforderlich

    // Wenn alle Validierungen erfolgreich sind
    return true;
  }
}
