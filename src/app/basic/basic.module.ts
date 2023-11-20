// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { CharizardComponent } from './charizard/charizard.component';
import { CounterComponent } from './counter/counter.component';
import { FatherComponent } from './father/father.component';
import { FatherSonComponent } from './father-son/father-son.component';

@NgModule({
  declarations: [CharizardComponent, CounterComponent, FatherComponent, FatherSonComponent],
  imports: [CommonModule],
})
export class BasicModule {}
