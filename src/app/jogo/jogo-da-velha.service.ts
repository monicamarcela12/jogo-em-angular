import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JogoDaVelhaService {
  private board: number[][] = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  showInitial = true;
  showBoard = false;
  showEnd = false;
  player = 0; // 0: Empate, 1: Perdeu, 2: Venceu

  initialize(): void {
    this.board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    this.showInitial = false;
    this.showBoard = true;
    this.showEnd = false;
    this.player = 0;
  }

  getBoard(): number[][] {
    return this.board;
  }

  initialPlay(): void {
    this.initialize();
  }

  play(posX: number, posY: number): void {
    if (this.board[posX][posY] === 0) {
      this.board[posX][posY] = this.player === 1 ? 1 : 2;
      this.player = this.player === 1 ? 2 : 1;
      // Adicione a lógica para verificar vitória ou empate aqui
    }
    // Atualize o estado de showEnd com base na lógica do jogo
  }

  showX(row: number, col: number): boolean {
    return this.board[row][col] === 1;
  }

  showO(row: number, col: number): boolean {
    return this.board[row][col] === 2;
  }

  showWinning(row: number, col: number): boolean {
    // Lógica para verificar se a célula faz parte da linha vencedora
    return false;
  }

  newPlay(): void {
    this.initialize();
  }
}
