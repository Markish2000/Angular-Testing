// Angular
import { Component } from '@angular/core';

// Interfaces
import { Client } from '../interfaces';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css'],
})
export class FatherComponent {
  public client?: Client;

  onSetClient(name: string) {
    this.client = { id: 1, name };
  }
}
