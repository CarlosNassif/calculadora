/**
 * Servico responsavel por executar as operacoes da calculadora.
 *
 * @author Carlos Nassif <costa.carlos12@gmail.com>
 * @since 1.0.0
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculadoraService {
  /* Constantes das operacoes */
  static readonly SOMA = '+';
  static readonly SUBTRACAO = '-';
  static readonly DIVISAO = '/';
  static readonly MULTIPLICACAO = '*';

  constructor() {}

/**
 * Funcao que calcula a operacao  descrita entre os dois numeros passados por
 * parametro.
 *
 *   E.g.: calcular(2, 1, '/') resultaria em 2/1 = 2.
 *
 * @param num1 primeiro fator
 * @param num2 segundo fator
 * @param operacao operacao a ser executada
 * @returns resultado do calculo
 */
  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number;
    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
        break;
    }
    return resultado;
  }
}
