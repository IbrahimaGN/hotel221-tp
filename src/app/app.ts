import { Component } from '@angular/core';
import { StatusBadgeComponent } from './components/status-badge/status-badge';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StatusBadgeComponent], // On importe le badge ici pour pouvoir l'utiliser
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'hotel221-tp';
}