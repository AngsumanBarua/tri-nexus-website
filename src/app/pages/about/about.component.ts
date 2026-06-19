import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <main>
      <!-- Page Header -->
      <section class="page-header">
        <div class="container">
          <h1>{{ lang.t('about.title') }}</h1>
          <p>{{ lang.t('about.subtitle') }}</p>
        </div>
      </section>

      <!-- Story -->
      <section class="section">
        <div class="container">
          <div class="story">
            <div class="section-header">
              <h2>{{ lang.t('about.story_title') }}</h2>
              <div class="divider"></div>
            </div>
            <div class="story__content">
              <p>{{ lang.t('about.story_p1') }}</p>
              <p>{{ lang.t('about.story_p2') }}</p>
              <p>{{ lang.t('about.story_p3') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Mission -->
      <section class="section section--alt">
        <div class="container">
          <div class="mission">
            <div class="section-header">
              <h2>{{ lang.t('about.mission_title') }}</h2>
              <div class="divider"></div>
            </div>
            <div class="mission__card">
              <span class="mission__icon">🎯</span>
              <p>{{ lang.t('about.mission_text') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Team -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <h2>{{ lang.t('about.team_title') }}</h2>
            <div class="divider"></div>
          </div>
          <div class="grid grid--3">
            <div class="team-card card">
              <div class="team-card__avatar">
                <span>👨‍💻</span>
              </div>
              <h3>{{ lang.t('about.founder1_name') }}</h3>
              <p class="team-card__role">{{ lang.t('about.founder1_role') }}</p>
              <span class="badge badge--teal">{{ lang.t('about.founder') }}</span>
            </div>
            <div class="team-card card">
              <div class="team-card__avatar">
                <span>👨‍💻</span>
              </div>
              <h3>{{ lang.t('about.founder2_name') }}</h3>
              <p class="team-card__role">{{ lang.t('about.founder2_role') }}</p>
              <span class="badge badge--teal">{{ lang.t('about.founder') }}</span>
            </div>
            <div class="team-card card">
              <div class="team-card__avatar">
                <span>👨‍💻</span>
              </div>
              <h3>{{ lang.t('about.founder3_name') }}</h3>
              <p class="team-card__role">{{ lang.t('about.founder3_role') }}</p>
              <span class="badge badge--teal">{{ lang.t('about.founder') }}</span>
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

    .story__content {
      max-width: 700px;
      margin-inline: auto;
    }

    .story__content p {
      margin-bottom: var(--space-lg);
      font-size: 1.02rem;
      line-height: 1.8;
    }

    .mission__card {
      max-width: 700px;
      margin-inline: auto;
      text-align: center;
      background: var(--color-white);
      padding: var(--space-2xl);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-md);
      border: 1px solid var(--color-gray-200);
    }

    .mission__icon {
      font-size: 2.5rem;
      display: block;
      margin-bottom: var(--space-md);
    }

    .mission__card p {
      font-size: 1.05rem;
      line-height: 1.8;
      margin-inline: auto;
    }

    .team-card {
      text-align: center;
      padding: var(--space-2xl) var(--space-xl);
    }

    .team-card__avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--color-gray-100), var(--color-gray-200));
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto var(--space-lg);
      font-size: 2.5rem;
    }

    .team-card h3 {
      margin-bottom: var(--space-xs);
      font-size: 1.1rem;
    }

    .team-card__role {
      font-size: 0.85rem;
      margin-bottom: var(--space-md);
    }
  `]
})
export class AboutComponent {
  readonly lang = inject(LanguageService);
}
