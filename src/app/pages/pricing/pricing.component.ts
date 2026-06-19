import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import {
  PRICING_TIERS,
  TRIAL_CONDITIONS_EN,
  TRIAL_CONDITIONS_BN,
  FAQS,
} from '../../data/pricing.data';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main>
      <!-- Page Header -->
      <section class="page-header">
        <div class="container">
          <h1>{{ lang.t('pricing.title') }}</h1>
          <p>{{ lang.t('pricing.subtitle') }}</p>
        </div>
      </section>

      <!-- Free Trial Section -->
      <section class="section section--alt">
        <div class="container">
          <div class="trial-banner">
            <div class="trial-banner__icon">🎉</div>
            <h2>{{ lang.t('pricing.free_trial_title') }}</h2>
            <p>{{ lang.t('pricing.free_trial_text') }}</p>
          </div>

          <!-- Conditions -->
          <div class="conditions">
            <h3>{{ lang.t('pricing.conditions_title') }}</h3>
            <ul>
              @for (condition of (lang.isBangla() ? conditionsBn : conditionsEn); track condition) {
                <li>
                  <span class="conditions__check">✓</span>
                  {{ condition }}
                </li>
              }
            </ul>
          </div>
        </div>
      </section>

      <!-- Pricing Tiers -->
      <section class="section">
        <div class="container">
          <div class="grid grid--3 pricing-grid">
            @for (tier of tiers; track tier.id) {
              <div class="pricing-card card" [class.card--highlighted]="tier.highlighted">
                @if (tier.highlighted) {
                  <div class="pricing-card__badge">{{ lang.t('pricing.popular') }}</div>
                }
                <h3>{{ lang.isBangla() ? tier.nameBn : tier.nameEn }}</h3>
                <p class="pricing-card__desc">{{ lang.isBangla() ? tier.descriptionBn : tier.descriptionEn }}</p>
                <div class="pricing-card__price">
                  <span class="pricing-card__currency">৳</span>
                  <span class="pricing-card__amount">{{ tier.priceBdt }}</span>
                  <span class="pricing-card__period">{{ lang.t('pricing.per_month') }}</span>
                </div>
                <ul class="pricing-card__features">
                  @for (feature of (lang.isBangla() ? tier.featuresBn : tier.featuresEn); track feature) {
                    <li>
                      <span class="pricing-card__check">✓</span>
                      {{ feature }}
                    </li>
                  }
                </ul>
                <a routerLink="/contact"
                   class="btn btn--full"
                   [class.btn--primary]="tier.highlighted"
                   [class.btn--secondary]="!tier.highlighted">
                  {{ lang.t('pricing.get_started') }}
                </a>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="section section--alt">
        <div class="container">
          <div class="section-header">
            <h2>{{ lang.t('pricing.faq_title') }}</h2>
            <div class="divider"></div>
          </div>
          <div class="faq-list">
            @for (faq of faqs; track faq.questionEn; let i = $index) {
              <div class="faq-item" [class.faq-item--open]="openFaq() === i">
                <button class="faq-item__question" (click)="toggleFaq(i)">
                  <span>{{ lang.isBangla() ? faq.questionBn : faq.questionEn }}</span>
                  <span class="faq-item__icon" [class.faq-item__icon--open]="openFaq() === i">+</span>
                </button>
                @if (openFaq() === i) {
                  <div class="faq-item__answer">
                    <p>{{ lang.isBangla() ? faq.answerBn : faq.answerEn }}</p>
                  </div>
                }
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

    /* Trial Banner */
    .trial-banner {
      text-align: center;
      margin-bottom: var(--space-2xl);
    }

    .trial-banner__icon {
      font-size: 2.5rem;
      margin-bottom: var(--space-md);
    }

    .trial-banner h2 {
      margin-bottom: var(--space-md);
    }

    .trial-banner p {
      margin-inline: auto;
    }

    /* Conditions */
    .conditions {
      max-width: 600px;
      margin-inline: auto;
      background: var(--color-white);
      border-radius: var(--radius-lg);
      padding: var(--space-xl);
      box-shadow: var(--shadow-sm);
      border: 1px solid var(--color-gray-200);
    }

    .conditions h3 {
      font-size: 1rem;
      margin-bottom: var(--space-md);
    }

    .conditions li {
      display: flex;
      align-items: flex-start;
      gap: var(--space-sm);
      padding: var(--space-sm) 0;
      font-size: 0.9rem;
      color: var(--color-gray-700);
    }

    .conditions__check {
      color: var(--color-teal);
      font-weight: 700;
      flex-shrink: 0;
    }

    /* Pricing Cards */
    .pricing-grid {
      align-items: stretch;
    }

    .pricing-card {
      display: flex;
      flex-direction: column;
      text-align: center;
      position: relative;
    }

    .pricing-card__badge {
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--color-gold);
      color: var(--color-deep-blue);
      padding: 0.25rem 1rem;
      border-radius: var(--radius-full);
      font-size: 0.75rem;
      font-weight: 700;
      white-space: nowrap;
    }

    .pricing-card h3 {
      margin-bottom: var(--space-sm);
    }

    .pricing-card__desc {
      font-size: 0.85rem;
      margin-bottom: var(--space-lg);
    }

    .pricing-card__price {
      display: flex;
      align-items: baseline;
      justify-content: center;
      gap: 0.15rem;
      margin-bottom: var(--space-lg);
    }

    .pricing-card__currency {
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--color-deep-blue);
    }

    .pricing-card__amount {
      font-size: 2.2rem;
      font-weight: 700;
      color: var(--color-deep-blue);
      line-height: 1;
    }

    .pricing-card__period {
      font-size: 0.85rem;
      color: var(--color-gray-500);
    }

    .pricing-card__features {
      text-align: left;
      margin-bottom: var(--space-xl);
      flex: 1;
    }

    .pricing-card__features li {
      display: flex;
      align-items: flex-start;
      gap: var(--space-sm);
      padding: var(--space-xs) 0;
      font-size: 0.88rem;
      color: var(--color-gray-700);
    }

    .pricing-card__check {
      color: var(--color-teal);
      font-weight: 700;
      flex-shrink: 0;
    }

    /* FAQ */
    .faq-list {
      max-width: 700px;
      margin-inline: auto;
    }

    .faq-item {
      border-bottom: 1px solid var(--color-gray-200);
    }

    .faq-item__question {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--space-lg) 0;
      text-align: left;
      font-weight: 600;
      font-size: 1rem;
      color: var(--color-deep-blue);
      gap: var(--space-md);
    }

    .faq-item__icon {
      font-size: 1.3rem;
      color: var(--color-teal);
      transition: transform var(--transition-fast);
      flex-shrink: 0;
    }

    .faq-item__icon--open {
      transform: rotate(45deg);
    }

    .faq-item__answer {
      padding: 0 0 var(--space-lg);
    }

    .faq-item__answer p {
      font-size: 0.9rem;
      line-height: 1.7;
    }
  `]
})
export class PricingComponent {
  readonly lang = inject(LanguageService);
  readonly tiers = PRICING_TIERS;
  readonly conditionsEn = TRIAL_CONDITIONS_EN;
  readonly conditionsBn = TRIAL_CONDITIONS_BN;
  readonly faqs = FAQS;
  readonly openFaq = signal<number | null>(null);

  toggleFaq(index: number): void {
    this.openFaq.update(v => v === index ? null : index);
  }
}
