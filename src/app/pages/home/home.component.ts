import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { COMPANY } from '../../data/company.constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main>
      <!-- Hero Section -->
      <section class="hero" id="hero">
        <div class="container">
          <div class="hero__content">
            <div class="hero__badge">
              <span class="badge badge--teal">🚀 {{ lang.isBangla() ? '১ মাস ফ্রি ট্রায়াল' : '1 Month Free Trial' }}</span>
            </div>
            <h1>{{ lang.t('home.hero.title') }}</h1>
            <p class="hero__tagline">{{ lang.t('home.hero.tagline') }}</p>
            <p class="hero__subtitle">{{ lang.t('home.hero.subtitle') }}</p>
            <div class="hero__actions">
              <a routerLink="/contact" class="btn btn--gold btn--lg">{{ lang.t('home.hero.cta') }}</a>
              <a routerLink="/services" class="btn btn--secondary btn--lg">{{ lang.t('common.learn_more') }}</a>
            </div>
          </div>
        </div>
        <div class="hero__bg-shape"></div>
      </section>

      <!-- Who We Are -->
      <section class="section section--alt" id="who-we-are">
        <div class="container">
          <div class="section-header">
            <h2>{{ lang.t('home.who.title') }}</h2>
            <div class="divider"></div>
          </div>
          <p class="who__text">{{ lang.t('home.who.text') }}</p>
          <div class="who__icons">
            <div class="who__icon-item">
              <span class="who__icon">🏪</span>
              <span>{{ lang.isBangla() ? 'দোকান' : 'Shops' }}</span>
            </div>
            <div class="who__icon-item">
              <span class="who__icon">🏬</span>
              <span>{{ lang.isBangla() ? 'বাজার' : 'Markets' }}</span>
            </div>
            <div class="who__icon-item">
              <span class="who__icon">🥦</span>
              <span>{{ lang.isBangla() ? 'মুদি দোকান' : 'Groceries' }}</span>
            </div>
            <div class="who__icon-item">
              <span class="who__icon">💊</span>
              <span>{{ lang.isBangla() ? 'ফার্মেসি' : 'Pharmacies' }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Free Demo Highlight -->
      <section class="section demo-section" id="free-demo">
        <div class="container">
          <div class="demo-banner">
            <div class="demo-banner__content">
              <span class="demo-banner__icon">🎁</span>
              <h2>{{ lang.t('home.demo.title') }}</h2>
              <p>{{ lang.t('home.demo.text') }}</p>
              <p class="demo-banner__conditions">{{ lang.t('home.demo.conditions') }}</p>
              <a routerLink="/pricing" class="btn btn--gold">{{ lang.t('home.demo.learn_more') }}</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Overview Cards -->
      <section class="section section--alt" id="overview">
        <div class="container">
          <div class="grid grid--3">
            <a routerLink="/services" class="overview-card">
              <span class="overview-card__icon">⚡</span>
              <h3>{{ lang.t('home.cards.services_title') }}</h3>
              <p>{{ lang.t('home.cards.services_text') }}</p>
              <span class="overview-card__link">{{ lang.t('home.cards.view') }} →</span>
            </a>
            <a routerLink="/products" class="overview-card">
              <span class="overview-card__icon">📦</span>
              <h3>{{ lang.t('home.cards.products_title') }}</h3>
              <p>{{ lang.t('home.cards.products_text') }}</p>
              <span class="overview-card__link">{{ lang.t('home.cards.view') }} →</span>
            </a>
            <a routerLink="/pricing" class="overview-card">
              <span class="overview-card__icon">💰</span>
              <h3>{{ lang.t('home.cards.pricing_title') }}</h3>
              <p>{{ lang.t('home.cards.pricing_text') }}</p>
              <span class="overview-card__link">{{ lang.t('home.cards.view') }} →</span>
            </a>
          </div>
        </div>
      </section>

      <!-- Trust Strip -->
      
      <!--<section class="section trust-section" id="trust">-->
        <!--<div class="container">-->
          <!--<div class="trust-content">-->
            <!--<div class="trust-icon">-->
              <!--<span>🔧</span>-->
              <!--<span>🔧</span>-->
              <!--<span>🔧</span>-->
            <!--</div>-->
            <!--<!-- <h3>{{ lang.t('home.trust.text') }}</h3> -->
            <!--<p>{{ lang.t('home.trust.subtext') }}</p>-->
          <!--</div>-->
        <!--</div>-->
      <!--</section>-->
      
      <!-- Contact Strip -->
      <section class="section section--dark" id="contact-strip">
        <div class="container">
          <div class="section-header">
            <h2>{{ lang.t('home.contact.title') }}</h2>
            <div class="divider"></div>
          </div>
          <div class="grid grid--3 contact-strip__grid">
            <a [href]="'tel:' + company.phone" class="contact-strip__item">
              <span class="contact-strip__icon">📞</span>
              <span class="contact-strip__label">{{ lang.t('home.contact.phone') }}</span>
              <span class="contact-strip__value">{{ company.phone }}</span>
            </a>
            <a [href]="'https://wa.me/' + company.whatsapp.replace('+', '')" target="_blank" rel="noopener"
               class="contact-strip__item">
              <span class="contact-strip__icon">💬</span>
              <span class="contact-strip__label">{{ lang.t('home.contact.whatsapp') }}</span>
              <span class="contact-strip__value">{{ company.whatsapp }}</span>
            </a>
            <div class="contact-strip__item">
              <span class="contact-strip__icon">📍</span>
              <span class="contact-strip__label">{{ lang.t('home.contact.visit') }}</span>
              <span class="contact-strip__value">{{ lang.isBangla() ? company.addressBn : company.address }}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    /* Hero */
    .hero {
      position: relative;
      background: linear-gradient(135deg, var(--color-deep-blue) 0%, var(--color-deep-blue-light) 60%, #0D4A6B 100%);
      color: var(--color-white);
      padding: var(--space-4xl) 0 var(--space-4xl);
      overflow: hidden;
    }

    .hero__bg-shape {
      position: absolute;
      bottom: -2px;
      left: 0;
      right: 0;
      height: 80px;
      background: var(--color-bg-secondary);
      clip-path: polygon(0 60%, 100% 0, 100% 100%, 0 100%);
    }

    .hero__content {
      position: relative;
      z-index: 1;
      max-width: 700px;
    }

    .hero__badge {
      margin-bottom: var(--space-lg);
    }

    .hero h1 {
      color: var(--color-white);
      margin-bottom: var(--space-md);
    }

    .hero__tagline {
      color: var(--color-teal-light);
      font-size: 1.05rem;
      font-weight: 500;
      margin-bottom: var(--space-sm);
    }

    .hero__subtitle {
      color: var(--color-gray-300);
      font-size: 1rem;
      margin-bottom: var(--space-xl);
    }

    .hero__actions {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-md);
    }

    .hero__actions .btn--secondary {
      color: var(--color-white);
      border-color: rgba(255, 255, 255, 0.3);
    }

    .hero__actions .btn--secondary:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: var(--color-white);
      color: var(--color-white);
    }

    /* Who We Are */
    .who__text {
      text-align: center;
      font-size: 1.05rem;
      margin-inline: auto;
      margin-bottom: var(--space-2xl);
    }

    .who__icons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: var(--space-xl);
    }

    .who__icon-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-sm);
    }

    .who__icon {
      font-size: 2.5rem;
    }

    .who__icon-item span:last-child {
      font-weight: 600;
      color: var(--color-gray-700);
      font-size: 0.9rem;
    }

    /* Demo Banner */
    .demo-banner {
      background: linear-gradient(135deg, var(--color-deep-blue) 0%, var(--color-deep-blue-light) 100%);
      border-radius: var(--radius-xl);
      padding: var(--space-2xl) var(--space-xl);
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .demo-banner::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -20%;
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, transparent 70%);
      border-radius: 50%;
    }

    .demo-banner__content {
      position: relative;
      z-index: 1;
    }

    .demo-banner__icon {
      font-size: 2.5rem;
      display: block;
      margin-bottom: var(--space-md);
    }

    .demo-banner h2 {
      color: var(--color-white);
      margin-bottom: var(--space-md);
    }

    .demo-banner p {
      color: var(--color-gray-300);
      margin-inline: auto;
      margin-bottom: var(--space-md);
    }

    .demo-banner__conditions {
      font-size: 0.85rem;
      color: var(--color-gray-400) !important;
      font-style: italic;
    }

    /* Overview Cards */
    .overview-card {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      background: var(--color-white);
      border-radius: var(--radius-lg);
      padding: var(--space-xl);
      box-shadow: var(--shadow-sm);
      border: 1px solid var(--color-gray-200);
      transition: all var(--transition-normal);
      text-decoration: none;
    }

    .overview-card:hover {
      box-shadow: var(--shadow-lg);
      transform: translateY(-4px);
      border-color: var(--color-teal);
    }

    .overview-card__icon {
      font-size: 2rem;
      margin-bottom: var(--space-md);
    }

    .overview-card h3 {
      margin-bottom: var(--space-sm);
    }

    .overview-card p {
      font-size: 0.9rem;
      flex: 1;
    }

    .overview-card__link {
      margin-top: var(--space-md);
      color: var(--color-teal);
      font-weight: 600;
      font-size: 0.9rem;
    }

    /* Trust Section */
    .trust-section {
      background: var(--color-bg-secondary);
    }

    .trust-content {
      text-align: center;
    }

    .trust-icon {
      display: flex;
      justify-content: center;
      gap: var(--space-md);
      font-size: 2rem;
      margin-bottom: var(--space-md);
    }

    .trust-content h3 {
      margin-bottom: var(--space-sm);
    }

    .trust-content p {
      margin-inline: auto;
    }

    /* Contact Strip */
    .contact-strip__grid {
      text-align: center;
    }

    .contact-strip__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-sm);
      padding: var(--space-lg);
      border-radius: var(--radius-lg);
      background: rgba(255, 255, 255, 0.05);
      transition: all var(--transition-normal);
      text-decoration: none;
      color: inherit;
    }

    .contact-strip__item:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .contact-strip__icon {
      font-size: 1.5rem;
    }

    .contact-strip__label {
      font-weight: 600;
      color: var(--color-teal-light);
      font-size: 0.9rem;
    }

    .contact-strip__value {
      color: var(--color-gray-300);
      font-size: 0.9rem;
    }
  `]
})
export class HomeComponent {
  readonly lang = inject(LanguageService);
  readonly company = COMPANY;
}
