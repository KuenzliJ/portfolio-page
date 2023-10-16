import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  displayText = ""; // Starte mit einem leeren Text

  ngOnInit(): void {
    this.startTextLoop();
  }

  startTextLoop() {
    const text = "Joël Künzli ";
    let index = 0;

    const loop = () => {
      setTimeout(() => {
        this.displayText += text[index];
        index = (index + 1) % text.length;

        if (index === 0) {
          setTimeout(() => {
            this.displayText = ""; // Zurücksetzen nach 5 Sekunden
            loop(); // Starte den Loop erneut
          }, 5000); // 5000 Millisekunden = 5 Sekunden
        } else {
          loop();
        }
      }, 500); // Verzögerung zwischen Buchstaben
    };

    loop();
  }
}
