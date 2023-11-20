import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private beforeUnloadHandler(event: BeforeUnloadEvent): string | undefined {
    const confirmationMessage = '¡Adiós! ¿Estás seguro de que quieres salir?';
    event.returnValue = confirmationMessage; // Para navegadores Gecko e IE
    return confirmationMessage; // Para navegadores Webkit, Safari, Chrome
  }
  title = 'testing';

  increase() {}
}
