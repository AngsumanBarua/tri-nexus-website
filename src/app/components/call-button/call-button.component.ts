import { Component } from '@angular/core';
import { COMPANY } from '../../data/company.constants';

@Component({
  selector: 'app-call-button',
  standalone: true,
  template: `
    <a class="call-fab"
       [href]="'tel:' + company.phone"
       aria-label="Call us">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
    </a>
  `,
  styles: [`
    .call-fab {
      position: fixed;
      bottom: 24px;
      right: 92px;
      z-index: 90;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: var(--color-deep-blue);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 16px rgba(10, 37, 64, 0.3);
      transition: all var(--transition-normal);
    }

    .call-fab:hover {
      transform: scale(1.08);
      background: var(--color-deep-blue-light);
      box-shadow: 0 6px 24px rgba(10, 37, 64, 0.4);
      color: white;
    }

    @media (max-width: 767px) {
      .call-fab {
        bottom: 16px;
        right: 78px;
        width: 44px;
        height: 44px;
      }

      .call-fab svg {
        width: 20px;
        height: 20px;
      }
    }
  `]
})
export class CallButtonComponent {
  readonly company = COMPANY;
}
