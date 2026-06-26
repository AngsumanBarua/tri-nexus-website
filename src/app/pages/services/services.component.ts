import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { SERVICES } from '../../data/services.data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main>
      <!-- Page Header -->
      <section class="page-header">
        <div class="container">
          <h1>{{ lang.t('services.title') }}</h1>
          <p>{{ lang.t('services.subtitle') }}</p>
        </div>
      </section>

      <!-- Services List -->
      <section class="section">
        <div class="container">
          <div class="services-list">
            @for (service of services; track service.id) {
              <div class="service-card" [id]="service.id">
                <div class="service-card__icon">{{ service.icon }}</div>
                <div class="service-card__content">
                  <h2>{{ lang.isBangla() ? service.titleBn : service.titleEn }}</h2>
                  <p class="service-card__desc">
                    {{ lang.isBangla() ? service.descriptionBn : service.descriptionEn }}
                  </p>
                  <div class="service-card__example">
                    <span class="service-card__example-label">{{ lang.t('services.example_label') }}</span>
                    <span class="service-card__example-text">
                      "{{ lang.isBangla() ? service.exampleBn : service.exampleEn }}"
                    </span>
                  </div>
                  <a routerLink="/contact" class="btn btn--primary">{{ lang.t('services.cta') }}</a>
                </div>
              </div>
            }
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    .page-header {
      background: linear-gradient(135deg, var(--color-deep-blue) 0%, var(--color-deep-blue-light) 100%);
      padding: var(--space-3xl) 0 var(--space-2xl);
      text-align: center;
      color: var(--color-white);
    }

    .page-header h1 {
      color: var(--color-white);
      margin-bottom: var(--space-sm);
    }

    .page-header p {
      color: var(--color-gray-300);
      margin-inline: auto;
      max-width: 55ch;
    }

    .services-list {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-xl);
    }

    @media (min-width: 768px) {
      .services-list {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .services-list {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .service-card {
      display: flex;
      flex-direction: column;
      padding: var(--space-xl);
      background: var(--color-white);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-sm);
      border: 1px solid var(--color-gray-200);
      transition: all var(--transition-normal);
      height: 100%;
    }

    .service-card:hover {
      box-shadow: var(--shadow-lg);
      border-color: var(--color-teal);
      transform: translateY(-4px);
    }

    .service-card__icon {
      font-size: 2.5rem;
      width: 64px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(20, 184, 166, 0.08);
      border-radius: var(--radius-md);
      flex-shrink: 0;
      margin-bottom: var(--space-md);
    }

    .service-card__content {
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    .service-card__content h2 {
      font-size: 1.3rem;
      margin-bottom: var(--space-sm);
      color: var(--color-deep-blue);
    }

    .service-card__desc {
      margin-bottom: var(--space-md);
      line-height: 1.6;
      color: var(--color-text-secondary);
      flex: 1;
    }

    .service-card__example {
      background: var(--color-gray-50);
      border-left: 3px solid var(--color-teal);
      padding: var(--space-md);
      border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
      margin-bottom: var(--space-lg);
    }

    .service-card__example-label {
      display: block;
      font-weight: 600;
      font-size: 0.8rem;
      color: var(--color-teal-dark);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 0.25rem;
    }

    .service-card__example-text {
      font-style: italic;
      color: var(--color-gray-600);
      font-size: 0.9rem;
    }

    .service-card__content .btn {
      margin-top: auto;
      width: 100%;
    }
  `]
})
export class ServicesComponent {
  readonly lang = inject(LanguageService);
  readonly services = SERVICES;
}
