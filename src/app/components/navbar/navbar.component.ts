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
          <img [src]="company.logoPath" [alt]="company.name" class="navbar__logo-img" />
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
          <button class="navbar__lang-toggle" (click)="lang.toggle()" [attr.aria-label]="'Switch language'" role="switch" [attr.aria-checked]="lang.isBangla()">
            <span class="navbar__lang-label" [class.active]="!lang.isBangla()">EN</span>
            <span class="navbar__lang-track">
              <span class="navbar__lang-thumb" [class.navbar__lang-thumb--bn]="lang.isBangla()"></span>
            </span>
            <span class="navbar__lang-label" [class.active]="lang.isBangla()">বাং</span>
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
      height: 76px;
    }

    .navbar__logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: var(--color-deep-blue);
      font-weight: 700;
      font-size: 1.15rem;
      white-space: nowrap;
    }

    .navbar__logo:hover {
      color: var(--color-deep-blue);
    }

    .navbar__logo-img {
      height: 48px;
      width: auto;
      object-fit: contain;
    }

    .navbar__links {
      display: none;
      gap: var(--space-lg);
    }

    .navbar__links a {
      color: var(--color-gray-700);
      font-weight: 500;
      font-size: 1.05rem;
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

    .navbar__lang-toggle {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.25rem;
      border-radius: var(--radius-full);
      background: var(--color-gray-100);
      border: 1px solid var(--color-gray-200);
      cursor: pointer;
      transition: all var(--transition-fast);
    }

    .navbar__lang-toggle:hover {
      border-color: var(--color-teal);
    }

    .navbar__lang-label {
      font-weight: 600;
      font-size: 0.78rem;
      color: var(--color-gray-400);
      padding: 0 0.25rem;
      transition: color var(--transition-fast);
      user-select: none;
    }

    .navbar__lang-label.active {
      color: var(--color-deep-blue);
    }

    .navbar__lang-track {
      position: relative;
      width: 34px;
      height: 18px;
      background: var(--color-gray-300);
      border-radius: var(--radius-full);
      transition: background var(--transition-fast);
    }

    .navbar__lang-thumb {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 14px;
      height: 14px;
      background: var(--color-white);
      border-radius: 50%;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
      transition: transform var(--transition-fast);
    }

    .navbar__lang-thumb--bn {
      transform: translateX(16px);
    }

    .navbar__lang-toggle:hover .navbar__lang-track {
      background: var(--color-teal-light);
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
    @media (max-width: 1023px) {
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

    @media (min-width: 1024px) {
      .navbar__logo {
        flex: 1 1 auto;
        min-width: max-content;
      }

      .navbar__links {
        display: flex;
        justify-content: center;
        flex: 2 1 auto;
        gap: var(--space-md);
      }

      .navbar__actions {
        flex: 1 1 auto;
        justify-content: flex-end;
        min-width: max-content;
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
