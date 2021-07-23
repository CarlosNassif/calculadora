import { CalculadoraService } from './services/calculadora.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalculadoraComponent } from './components';

@NgModule({
  declarations: [CalculadoraComponent],
  imports: [CommonModule],
  exports: [CalculadoraComponent],
  providers: [CalculadoraService]
})
export class CalculadoraModule {}
