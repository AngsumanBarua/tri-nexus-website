import { Injectable, signal, computed } from '@angular/core';
import { EN } from '../i18n/en';
import { BN } from '../i18n/bn';

export type Lang = 'bn' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly STORAGE_KEY = 'trinexus_lang';
  private readonly dictionaries: Record<Lang, Record<string, string>> = { en: EN, bn: BN };

  readonly currentLang = signal<Lang>(this.loadLang());

  readonly isBangla = computed(() => this.currentLang() === 'bn');

  toggle(): void {
    const next: Lang = this.currentLang() === 'bn' ? 'en' : 'bn';
    this.currentLang.set(next);
    try {
      localStorage.setItem(this.STORAGE_KEY, next);
    } catch {
      // localStorage unavailable — ignore
    }
  }

  t(key: string): string {
    return this.dictionaries[this.currentLang()][key] ?? key;
  }

  private loadLang(): Lang {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored === 'en' || stored === 'bn') return stored;
    } catch {
      // localStorage unavailable
    }
    return 'bn'; // Default to Bangla
  }
}
