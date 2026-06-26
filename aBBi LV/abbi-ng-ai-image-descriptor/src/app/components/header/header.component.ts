import { Component, Input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [
    MatIconModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() showLanguageButton = true;

  showInfoOverlay = signal(false);

  openInfoOverlay(event: Event) {
    event.preventDefault();
    this.showInfoOverlay.set(true);
  }

  closeInfoOverlay() {
    this.showInfoOverlay.set(false);
  }
}
