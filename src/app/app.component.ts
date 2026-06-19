import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';
import { CallButtonComponent } from './components/call-button/call-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    WhatsappButtonComponent,
    CallButtonComponent,
  ],
  template: `
    <app-navbar />
    <router-outlet />
    <app-footer />
    <app-whatsapp-button />
    <app-call-button />
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    router-outlet + * {
      flex: 1;
    }
  `]
})
export class AppComponent {}
