import { CalculadoraService } from './../services/calculadora.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  private numero1!: string;
  private numero2!: string | null;
  private operacao!: string | null;
  private resultado!: number | null;

  constructor(private calculadoraService: CalculadoraService) {}

  ngOnInit(): void {
    this.limpar();
  }

  /**
   * Metodo utilizado para reinicializar as variaveis da calculadora.
   */
  limpar() {
    this.numero1 = '0';
    this.numero2 = null;
    this.operacao = null;
    this.resultado = null;
  }

  /**
   * Adiciona o caractere `numero` ao numero correto. Caso exista uma operacao,
   * o numero correto e o primeiro, caso contrario, o segundo.
   * @param numero Numero digitado na calculadora.
   */
  adicionarNumero(numero: string) {
    if (!!this.operacao) {
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    } else {
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    }
  }

  /**
   * Concatena `numConcat` a `numAtual`, levando em consideracao valores decimais.
   * @param numAtual numero atual
   * @param numConcat numero a ser concatenado ao atual
   * @returns numero concatenado
   */
  concatenarNumero(numAtual: string | null, numConcat: string): string {
    // reinicia o valor para concatenar
    if (numAtual === '0' || numAtual === null) {
      numAtual = '';
    }

    // se o primeiro digitado for um '.' adiciona o '0'.
    if (numConcat === '.' && numAtual === '') {
      return '0.';
    }

    // ignora o ponto caso ja exista
    if (numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }

    return numAtual + numConcat;
  }

  /**
   * Caso ja exista uma operacao e numero 2, calcula o resultado. Guarda a
   * operacao a ser executada;
   * @param operacao operacao a ser executada
   * @returns void
   */
  definirOperacao(operacao: string): void {
    // define a operacao caso ela nao exista ainda.
    if (!this.operacao) {
      this.operacao = operacao;
      return;
    }

    // se a operacao foi definida e o numero dois existe, calcula o resultado da
    // operacao.
    if (!!this.numero2) {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao
      );
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }
  }

  /**
   * Calcula o resultado da operacao entre numero1 e numero2, caso o numero2
   * exista.
   * @returns void
   */
  calcular(): void {
    if (!this.numero2) {
      return;
    }

    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao as string
    );
  }

  /**
   * Respeita o valor a ser mostrado, na ordem:
   *  1. resultado;
   *  1. numero2;
   *  1. numero1;
   * @returns valor a ser mostrado
   */
  get display(): string {
    if (!!this.resultado) {
      return this.resultado.toString();
    }

    if (!!this.numero2) {
      return this.numero2.toString();
    }

    return this.numero1;
  }
}
