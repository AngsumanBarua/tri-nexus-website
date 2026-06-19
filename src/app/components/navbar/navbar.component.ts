import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { COMPANY } from '../../data/company.constants';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar" [class.navbar--scrolled]="scrolled()" role="navigation" aria-label="Main navigation">
      <div class="navbar__inner container">
        <a routerLink="/" class="navbar__logo" aria-label="Trinexus Technologies Home">
          <span class="navbar__logo-icon">&#9650;</span>
          <span class="navbar__logo-text">{{ company.name }}</span>
        </a>

        <div class="navbar__links" [class.navbar__links--open]="menuOpen()" role="menubar">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"
             (click)="closeMenu()" role="menuitem">{{ lang.t('nav.home') }}</a>
          <a routerLink="/services" routerLinkActive="active"
             (click)="closeMenu()" role="menuitem">{{ lang.t('nav.services') }}</a>
          <a routerLink="/products" routerLinkActive="active"
             (click)="closeMenu()" role="menuitem">{{ lang.t('nav.products') }}</a>
          <a routerLink="/pricing" routerLinkActive="active"
             (click)="closeMenu()" role="menuitem">{{ lang.t('nav.pricing') }}</a>
          <a routerLink="/about" routerLinkActive="active"
             (click)="closeMenu()" role="menuitem">{{ lang.t('nav.about') }}</a>
          <a routerLink="/contact" routerLinkActive="active"
             (click)="closeMenu()" role="menuitem">{{ lang.t('nav.contact') }}</a>
        </div>

        <div class="navbar__actions">
          <button class="navbar__lang-btn" (click)="lang.toggle()" [attr.aria-label]="'Switch language'">
            {{ lang.t('nav.lang_toggle') }}
          </button>

          <button class="navbar__hamburger" (click)="toggleMenu()"
                  [attr.aria-expanded]="menuOpen()"
                  aria-label="Toggle navigation menu">
            <span class="navbar__hamburger-line" [class.open]="menuOpen()"></span>
            <span class="navbar__hamburger-line" [class.open]="menuOpen()"></span>
            <span class="navbar__hamburger-line" [class.open]="menuOpen()"></span>
          </button>
        </div>
      </div>

      <!-- Mobile menu overlay -->
      @if (menuOpen()) {
        <div class="navbar__overlay" (click)="closeMenu()"></div>
      }
    </nav>
  `,
  styles: [`
    .navbar {
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--color-gray-200);
      transition: box-shadow var(--transition-normal);
    }

    .navbar--scrolled {
      box-shadow: var(--shadow-md);
    }

    .navbar__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 64px;
    }

    .navbar__logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--color-deep-blue);
      font-weight: 700;
      font-size: 1.1rem;
      white-space: nowrap;
    }

    .navbar__logo:hover {
      color: var(--color-deep-blue);
    }

    .navbar__logo-icon {
      color: var(--color-teal);
      font-size: 1.3rem;
    }

    .navbar__links {
      display: none;
      gap: var(--space-lg);
    }

    .navbar__links a {
      color: var(--color-gray-700);
      font-weight: 500;
      font-size: 0.9rem;
      padding: 0.25rem 0;
      border-bottom: 2px solid transparent;
      transition: all var(--transition-fast);
    }

    .navbar__links a:hover,
    .navbar__links a.active {
      color: var(--color-teal);
      border-bottom-color: var(--color-teal);
    }

    .navbar__actions {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
    }

    .navbar__lang-btn {
      padding: 0.35rem 0.75rem;
      border-radius: var(--radius-full);
      font-weight: 700;
      font-size: 0.8rem;
      color: var(--color-deep-blue);
      background: var(--color-gray-100);
      border: 1px solid var(--color-gray-200);
      transition: all var(--transition-fast);
    }

    .navbar__lang-btn:hover {
      background: var(--color-teal);
      color: var(--color-white);
      border-color: var(--color-teal);
    }

    .navbar__hamburger {
      display: flex;
      flex-direction: column;
      gap: 5px;
      padding: 0.5rem;
    }

    .navbar__hamburger-line {
      display: block;
      width: 22px;
      height: 2px;
      background: var(--color-deep-blue);
      border-radius: 2px;
      transition: all var(--transition-fast);
    }

    .navbar__hamburger-line.open:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    .navbar__hamburger-line.open:nth-child(2) {
      opacity: 0;
    }

    .navbar__hamburger-line.open:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }

    .navbar__overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: -1;
    }

    /* Mobile slide-in menu */
    @media (max-width: 767px) {
      .navbar__links {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        right: -280px;
        width: 280px;
        height: 100vh;
        background: var(--color-white);
        padding: 5rem var(--space-xl) var(--space-xl);
        gap: 0;
        box-shadow: var(--shadow-xl);
        transition: right var(--transition-slow);
        z-index: 101;
        overflow-y: auto;
      }

      .navbar__links--open {
        right: 0;
      }

      .navbar__links a {
        padding: var(--space-md) 0;
        font-size: 1.05rem;
        border-bottom: 1px solid var(--color-gray-100);
      }
    }

    @media (min-width: 768px) {
      .navbar__links {
        display: flex;
      }

      .navbar__hamburger {
        display: none;
      }

      .navbar__overlay {
        display: none;
      }
    }
  `]
})
export class NavbarComponent {
  readonly lang = inject(LanguageService);
  readonly company = COMPANY;
  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.scrolled.set(window.scrollY > 10);
      }, { passive: true });
    }
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
