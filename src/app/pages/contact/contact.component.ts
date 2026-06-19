import { Component, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { COMPANY } from '../../data/company.constants';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <main>
      <!-- Page Header -->
      <section class="page-header">
        <div class="container">
          <h1>{{ lang.t('contact.title') }}</h1>
          <p>{{ lang.t('contact.subtitle') }}</p>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="contact-grid">
            <!-- Contact Form -->
            <div class="contact-form-wrap">
              <h2>{{ lang.t('contact.form_title') }}</h2>
              <form class="contact-form" (ngSubmit)="handleSubmit()" #contactForm="ngForm">
                <div class="form-group">
                  <label for="contact-name">{{ lang.t('contact.name') }}</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    [(ngModel)]="formData.name"
                    [placeholder]="lang.t('contact.name_placeholder')"
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="contact-business">{{ lang.t('contact.business_type') }}</label>
                  <select id="contact-business" name="businessType" [(ngModel)]="formData.businessType" required>
                    <option value="" disabled>{{ lang.t('contact.select_type') }}</option>
                    <option value="shop">{{ lang.t('contact.business_types.shop') }}</option>
                    <option value="pharmacy">{{ lang.t('contact.business_types.pharmacy') }}</option>
                    <option value="grocery">{{ lang.t('contact.business_types.grocery') }}</option>
                    <option value="market">{{ lang.t('contact.business_types.market') }}</option>
                    <option value="restaurant">{{ lang.t('contact.business_types.restaurant') }}</option>
                    <option value="other">{{ lang.t('contact.business_types.other') }}</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="contact-phone">{{ lang.t('contact.phone') }}</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    [(ngModel)]="formData.phone"
                    [placeholder]="lang.t('contact.phone_placeholder')"
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="contact-message">{{ lang.t('contact.message') }}</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    [(ngModel)]="formData.message"
                    [placeholder]="lang.t('contact.message_placeholder')"
                    required
                  ></textarea>
                </div>

                @if (submitted()) {
                  <div class="form-success">
                    <span>✅</span> {{ lang.t('contact.success') }}
                  </div>
                }

                <button type="submit" class="btn btn--primary btn--lg btn--full" [disabled]="submitted()">
                  {{ submitted() ? lang.t('contact.sending') : lang.t('contact.send') }}
                </button>
              </form>
            </div>

            <!-- Contact Info Sidebar -->
            <div class="contact-sidebar">
              <!-- Direct Contact -->
              <div class="sidebar-card">
                <h3>{{ lang.t('contact.direct_title') }}</h3>
                <div class="sidebar-card__items">
                  <a [href]="'tel:' + company.phone" class="sidebar-card__item">
                    <span class="sidebar-card__icon">📞</span>
                    <div>
                      <span class="sidebar-card__label">{{ lang.t('common.call_us') }}</span>
                      <span class="sidebar-card__value">{{ company.phone }}</span>
                    </div>
                  </a>
                  <a [href]="waLink" target="_blank" rel="noopener" class="sidebar-card__item">
                    <span class="sidebar-card__icon">💬</span>
                    <div>
                      <span class="sidebar-card__label">{{ lang.t('common.whatsapp') }}</span>
                      <span class="sidebar-card__value">{{ company.whatsapp }}</span>
                    </div>
                  </a>
                  <a [href]="'mailto:' + company.email" class="sidebar-card__item">
                    <span class="sidebar-card__icon">✉️</span>
                    <div>
                      <span class="sidebar-card__label">{{ lang.t('footer.contact_info') }}</span>
                      <span class="sidebar-card__value">{{ company.email }}</span>
                    </div>
                  </a>
                </div>
              </div>

              <!-- Business Hours -->
              <div class="sidebar-card">
                <h3>{{ lang.t('contact.hours_title') }}</h3>
                <div class="hours-list">
                  <div class="hours-item">
                    <span>{{ lang.t('contact.hours_weekdays') }}</span>
                    <span>{{ lang.isBangla() ? company.businessHours.weekdaysBn : company.businessHours.weekdays }}</span>
                  </div>
                  <div class="hours-item">
                    <span>{{ lang.t('contact.hours_friday') }}</span>
                    <span>{{ lang.isBangla() ? company.businessHours.fridayBn : company.businessHours.friday }}</span>
                  </div>
                </div>
              </div>

              <!-- Location -->
              <div class="sidebar-card">
                <h3>{{ lang.t('contact.location_title') }}</h3>
                <p class="sidebar-card__address">
                  📍 {{ lang.isBangla() ? company.fullAddressBn : company.fullAddress }}
                </p>
                <div class="map-placeholder">
                  <iframe
                    [src]="mapUrl"
                    width="100%"
                    height="200"
                    style="border:0; border-radius: 8px;"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
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

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-2xl);
    }

    /* Form */
    .contact-form-wrap h2 {
      margin-bottom: var(--space-xl);
    }

    .form-group {
      margin-bottom: var(--space-lg);
    }

    .form-group label {
      display: block;
      font-weight: 600;
      font-size: 0.9rem;
      margin-bottom: var(--space-sm);
      color: var(--color-gray-700);
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: 0.75rem 1rem;
      border: 1.5px solid var(--color-gray-300);
      border-radius: var(--radius-md);
      background: var(--color-white);
      color: var(--color-gray-900);
      transition: border-color var(--transition-fast);
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      border-color: var(--color-teal);
      outline: none;
      box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.1);
    }

    .form-group textarea {
      resize: vertical;
      min-height: 120px;
    }

    .form-success {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      padding: var(--space-md);
      background: rgba(20, 184, 166, 0.1);
      border-radius: var(--radius-md);
      color: var(--color-teal-dark);
      font-weight: 500;
      margin-bottom: var(--space-lg);
    }

    /* Sidebar */
    .sidebar-card {
      background: var(--color-white);
      border: 1px solid var(--color-gray-200);
      border-radius: var(--radius-lg);
      padding: var(--space-xl);
      margin-bottom: var(--space-lg);
      box-shadow: var(--shadow-sm);
    }

    .sidebar-card h3 {
      font-size: 1.05rem;
      margin-bottom: var(--space-lg);
    }

    .sidebar-card__items {
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
    }

    .sidebar-card__item {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      padding: var(--space-md);
      border-radius: var(--radius-md);
      transition: background var(--transition-fast);
      text-decoration: none;
      color: inherit;
    }

    .sidebar-card__item:hover {
      background: var(--color-gray-50);
    }

    .sidebar-card__icon {
      font-size: 1.3rem;
      flex-shrink: 0;
    }

    .sidebar-card__label {
      display: block;
      font-size: 0.8rem;
      color: var(--color-gray-500);
      font-weight: 500;
    }

    .sidebar-card__value {
      display: block;
      font-weight: 600;
      color: var(--color-deep-blue);
      font-size: 0.9rem;
    }

    .sidebar-card__address {
      font-size: 0.9rem;
      margin-bottom: var(--space-md);
    }

    /* Hours */
    .hours-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }

    .hours-item {
      display: flex;
      justify-content: space-between;
      padding: var(--space-sm) 0;
      font-size: 0.9rem;
      border-bottom: 1px solid var(--color-gray-100);
    }

    .hours-item span:first-child {
      color: var(--color-gray-600);
    }

    .hours-item span:last-child {
      font-weight: 600;
      color: var(--color-deep-blue);
    }

    @media (min-width: 768px) {
      .contact-grid {
        grid-template-columns: 1.2fr 1fr;
      }
    }
  `]
})
export class ContactComponent {
  readonly lang = inject(LanguageService);
  readonly company = COMPANY;
  readonly waLink = `https://wa.me/${COMPANY.whatsapp.replace('+', '')}`;
  private readonly sanitizer = inject(DomSanitizer);
  readonly mapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(COMPANY.mapEmbedUrl);
  readonly submitted = signal(false);

  formData = {
    name: '',
    businessType: '',
    phone: '',
    message: '',
  };

  handleSubmit(): void {
    this.submitted.set(true);
    // Reset after 3 seconds for demo
    setTimeout(() => {
      this.submitted.set(false);
      this.formData = { name: '', businessType: '', phone: '', message: '' };
    }, 3000);
  }
}
