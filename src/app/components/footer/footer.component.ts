import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { COMPANY } from '../../data/company.constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="footer" role="contentinfo">
      <div class="container">
        <div class="footer__grid">
          <!-- Brand -->
          <div class="footer__brand">
            <div class="footer__logo">
              <span class="footer__logo-icon">&#9650;</span>
              <span>{{ company.name }}</span>
            </div>
            <p>{{ lang.t('footer.description') }}</p>
          </div>

          <!-- Quick Links -->
          <div class="footer__section">
            <h4>{{ lang.t('footer.quick_links') }}</h4>
            <ul>
              <li><a routerLink="/">{{ lang.t('nav.home') }}</a></li>
              <li><a routerLink="/services">{{ lang.t('nav.services') }}</a></li>
              <li><a routerLink="/products">{{ lang.t('nav.products') }}</a></li>
              <li><a routerLink="/pricing">{{ lang.t('nav.pricing') }}</a></li>
              <li><a routerLink="/about">{{ lang.t('nav.about') }}</a></li>
              <li><a routerLink="/contact">{{ lang.t('nav.contact') }}</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div class="footer__section">
            <h4>{{ lang.t('footer.contact_info') }}</h4>
            <ul>
              <li>
                <a [href]="'tel:' + company.phone">📞 {{ company.phone }}</a>
              </li>
              <li>
                <a [href]="'https://wa.me/' + company.whatsapp.replace('+', '')" target="_blank" rel="noopener">
                  💬 {{ lang.t('common.whatsapp') }}
                </a>
              </li>
              <li>
                <a [href]="'mailto:' + company.email">✉️ {{ company.email }}</a>
              </li>
              <li>
                <span>📍 {{ lang.isBangla() ? company.addressBn : company.address }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer__bottom">
          <p>{{ lang.t('footer.copyright') }}</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--color-deep-blue);
      color: var(--color-gray-300);
      padding-top: var(--space-3xl);
    }

    .footer__grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-2xl);
    }

    .footer__logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 700;
      font-size: 1.1rem;
      color: var(--color-white);
      margin-bottom: var(--space-md);
    }

    .footer__logo-icon {
      color: var(--color-teal);
      font-size: 1.2rem;
    }

    .footer__brand p {
      color: var(--color-gray-400);
      font-size: 0.9rem;
      line-height: 1.6;
    }

    .footer__section h4 {
      color: var(--color-white);
      font-size: 1rem;
      margin-bottom: var(--space-md);
    }

    .footer__section ul {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }

    .footer__section a,
    .footer__section span {
      color: var(--color-gray-400);
      font-size: 0.9rem;
      transition: color var(--transition-fast);
    }

    .footer__section a:hover {
      color: var(--color-teal-light);
    }

    .footer__bottom {
      margin-top: var(--space-2xl);
      padding: var(--space-lg) 0;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      text-align: center;
    }

    .footer__bottom p {
      color: var(--color-gray-500);
      font-size: 0.85rem;
    }

    @media (min-width: 768px) {
      .footer__grid {
        grid-template-columns: 2fr 1fr 1fr;
      }
    }
  `]
})
export class FooterComponent {
  readonly lang = inject(LanguageService);
  readonly company = COMPANY;
}
