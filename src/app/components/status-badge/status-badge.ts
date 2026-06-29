import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common'; // <-- ÉTAPE 1 : Ajouter l'importation

export type TransactionStatus = 'VALIDE' | 'EN_ATTENTE' | 'REJETE';

@Component({
  selector: 'app-status-badge',
  standalone: true, // Contrainte Obligatoire 
  imports: [NgClass], // <-- ÉTAPE 2 : L'ajouter dans le tableau imports
  templateUrl: './status-badge.html',
  styleUrls: ['./status-badge.css']
})
export class StatusBadgeComponent {
  statut = input<TransactionStatus>('EN_ATTENTE'); // [cite: 7, 13]
}