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
          this.displayText = ""; // Zurücksetzen, wenn das Wort vollständig angezeigt wurde
        }
        loop();
      }, 500); // Verzögerung zwischen Buchstaben
    };

    loop();
  }
}
