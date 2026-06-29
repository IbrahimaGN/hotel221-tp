import { Component, signal, computed } from '@angular/core';
import { FilterBarComponent } from './components/filter-bar/filter-bar';
import { TransactionGridComponent } from './components/transaction-grid/transaction-grid';
import { Transaction } from './models/transaction';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FilterBarComponent, TransactionGridComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  textRecherche = signal('');

  // Signal d'état initial d'origine
  listeTransactions = signal<Transaction[]>([
    { id: 1, nomService: 'Virement Salaire Juin', reference: 'TX-10029', montant: 450000, isFavori: false, isArchive: false },
    { id: 2, nomService: 'Facture Électricité Senelec', reference: 'TX-10030', montant: 85000, isFavori: true, isArchive: false },
    { id: 3, nomService: 'Achat Matériel Informatique', reference: 'TX-10031', montant: 125000, isFavori: false, isArchive: true },
    { id: 4, nomService: 'Hébergement Cloud AWS', reference: 'TX-10032', montant: 44000, isFavori: false, isArchive: false }
  ]);

  // Filtre lié à la barre de recherche (Exercice 2)
  listeFiltree = computed(() => {
    const recherche = this.textRecherche().toLowerCase().trim();
    return this.listeTransactions().filter(t => 
      t.nomService.toLowerCase().includes(recherche)
    );
  });

  // Action Immuable : Mettre en Favori [Contrainte Fiche]
  toggleFavori(id: number) {
    this.listeTransactions.update(transactions => 
      transactions.map(t => t.id === id ? { ...t, isFavori: !t.isFavori } : t)
    );
  }

  // Action Immuable : Archiver [Contrainte Fiche]
  toggleArchiver(id: number) {
    this.listeTransactions.update(transactions => 
      transactions.map(t => t.id === id ? { ...t, isArchive: !t.isArchive } : t)
    );
  }
}