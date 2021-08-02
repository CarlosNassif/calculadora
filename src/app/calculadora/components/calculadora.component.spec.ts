import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculadoraComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve garantir que 3 + 2 = 5', () => {
    const btn3 = fixture.debugElement.query(By.css('#btn3'));
    const btnSoma = fixture.debugElement.query(By.css('#btnSoma'));
    const btn2 = fixture.debugElement.query(By.css('#btn2'));
    const btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    const display = fixture.debugElement.query(By.css('#display'));

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSoma.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect((display.nativeElement as HTMLInputElement).value).toEqual('5');
  });
});
