import { Component, input, output } from '@angular/core';
import { CurrencyPipe, NgClass } from '@angular/common';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'app-mini-card',
  standalone: true,
  imports: [CurrencyPipe, NgClass],
  templateUrl: './mini-card.html',
  styleUrl: './mini-card.css'
})
export class MiniCardComponent {
  // L'objet transaction passé par la grille
  transaction = input.required<Transaction>();

  // Deux événements distincts via l'API output() [Contrainte Fiche]
  onToggleFavori = output<number>();
  onToggleArchiver = output<number>();

  favori() {
    this.onToggleFavori.emit(this.transaction().id);
  }

  archiver() {
    this.onToggleArchiver.emit(this.transaction().id);
  }
}