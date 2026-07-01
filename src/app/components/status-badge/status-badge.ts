import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common'; 

export type TransactionStatus = 'VALIDE' | 'EN_ATTENTE' | 'REJETE';

@Component({
  selector: 'app-status-badge',
  standalone: true,  
  imports: [NgClass], 
  templateUrl: './status-badge.html',
  styleUrls: ['./status-badge.css']
})
export class StatusBadgeComponent {
  statut = input<TransactionStatus>('EN_ATTENTE'); 
}