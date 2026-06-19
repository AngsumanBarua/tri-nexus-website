import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { PRODUCTS } from '../../data/products.data';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main>
      <!-- Page Header -->
      <section class="page-header">
        <div class="container">
          <h1>{{ lang.t('products.title') }}</h1>
          <p>{{ lang.t('products.subtitle') }}</p>
        </div>
      </section>

      <!-- Products Grid -->
      <section class="section">
        <div class="container">
          <div class="grid grid--2">
            @for (product of products; track product.id) {
              <div class="product-card card" [id]="product.id">
                <!-- Screenshot placeholder -->
                <div class="product-card__image">
                  <span class="product-card__image-icon">{{ product.icon }}</span>
                  <span class="product-card__image-text">{{ lang.isBangla() ? product.nameBn : product.nameEn }}</span>
                </div>

                <div class="product-card__body">
                  <h3>{{ lang.isBangla() ? product.nameBn : product.nameEn }}</h3>
                  <p>{{ lang.isBangla() ? product.descriptionBn : product.descriptionEn }}</p>

                  <h4 class="product-card__features-title">{{ lang.t('products.features') }}</h4>
                  <ul class="product-card__features">
                    @for (feature of (lang.isBangla() ? product.featuresBn : product.featuresEn); track feature) {
                      <li>
                        <span class="product-card__check">✓</span>
                        {{ feature }}
                      </li>
                    }
                  </ul>

                  <div class="product-card__price">
                    {{ product.priceBdt }}
                  </div>

                  <div class="product-card__actions">
                    <a routerLink="/contact" class="btn btn--primary btn--full">{{ lang.t('products.try_free') }}</a>
                    <a routerLink="/contact" class="btn btn--gold btn--full">{{ lang.t('products.buy_now') }}</a>
                  </div>
                </div>
              </div>
            }
          </div>

          <!-- Customization Note -->
          <div class="customize-note">
            <span class="customize-note__icon">💡</span>
            <p>{{ lang.t('products.customize_note') }}</p>
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

    .product-card {
      display: flex;
      flex-direction: column;
      padding: 0;
      overflow: hidden;
    }

    .product-card__image {
      background: linear-gradient(135deg, var(--color-gray-100) 0%, var(--color-gray-200) 100%);
      padding: var(--space-2xl) var(--space-lg);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(--space-sm);
      min-height: 160px;
    }

    .product-card__image-icon {
      font-size: 3rem;
    }

    .product-card__image-text {
      font-weight: 600;
      color: var(--color-gray-500);
      font-size: 0.85rem;
      text-align: center;
    }

    .product-card__body {
      padding: var(--space-xl);
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    .product-card__body h3 {
      margin-bottom: var(--space-sm);
    }

    .product-card__body > p {
      font-size: 0.9rem;
      margin-bottom: var(--space-lg);
    }

    .product-card__features-title {
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--color-gray-500);
      margin-bottom: var(--space-sm);
    }

    .product-card__features {
      margin-bottom: var(--space-lg);
      flex: 1;
    }

    .product-card__features li {
      display: flex;
      align-items: flex-start;
      gap: var(--space-sm);
      padding: var(--space-xs) 0;
      font-size: 0.9rem;
      color: var(--color-gray-700);
    }

    .product-card__check {
      color: var(--color-teal);
      font-weight: 700;
      flex-shrink: 0;
    }

    .product-card__price {
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--color-deep-blue);
      margin-bottom: var(--space-lg);
      text-align: center;
    }

    .product-card__actions {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }

    .customize-note {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      margin-top: var(--space-2xl);
      padding: var(--space-lg);
      background: var(--color-gray-50);
      border-radius: var(--radius-md);
      border: 1px solid var(--color-gray-200);
    }

    .customize-note__icon {
      font-size: 1.5rem;
      flex-shrink: 0;
    }

    .customize-note p {
      font-size: 0.9rem;
    }
  `]
})
export class ProductsComponent {
  readonly lang = inject(LanguageService);
  readonly products = PRODUCTS;
}
