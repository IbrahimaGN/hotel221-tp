import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-bar',
  standalone: true, // Contrainte obligatoire
  imports: [FormsModule], // Requis pour utiliser [(ngModel)] dans le template de l'enfant
  templateUrl: './filter-bar.html',
  styleUrl: './filter-bar.css'
})
export class FilterBarComponent {
  // Déclaration de la liaison bidirectionnelle native (valeur par défaut vide)
  searchQuery = model(''); // Contrainte exigée par la fiche
}