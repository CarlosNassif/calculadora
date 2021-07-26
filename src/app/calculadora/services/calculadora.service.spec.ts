import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve garantir que 5 + 9 = 14', () => {
    const soma = service.calcular(5, 9, CalculadoraService.SOMA);
    expect(soma).toEqual(14);
  })

  it('Deve garantir que 5 - 9 = -4', () => {
    const sub = service.calcular(5, 9, CalculadoraService.SUBTRACAO);
    expect(sub).toEqual(-4);
  })

  it('Deve garantir que 5 / 2 = 2.5', () => {
    const div = service.calcular(5, 2, CalculadoraService.DIVISAO);
    expect(div).toEqual(2.5);
  })

  it('Deve garantir que 5 * 9 = 45', () => {
    const mult = service.calcular(5, 9, CalculadoraService.MULTIPLICACAO);
    expect(mult).toEqual(45);
  })

  it('Deve garantir que operações com operador não esperado retorne 0', () => {
    const res = service.calcular(5, 9, '%');
    expect(res).toEqual(0);
  })
});
