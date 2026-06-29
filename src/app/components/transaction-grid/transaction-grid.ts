import { Component, input, output } from '@angular/core';
import { MiniCardComponent } from '../mini-card/mini-card';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'app-transaction-grid',
  standalone: true,
  imports: [MiniCardComponent], // Importation obligatoire du sous-composant carte
  templateUrl: './transaction-grid.html',
  styleUrl: './transaction-grid.css'
})
export class TransactionGridComponent {
  // Reçoit la liste complète [Contrainte Fiche]
  transactions = input.required<Transaction[]>();

  // Relaie les événements au parent racine
  onActionFavori = output<number>();
  onActionArchiver = output<number>();
}