import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- Modern Navbar with Gradient -->
    <nav class="navbar navbar-expand-lg modern-navbar">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="#">
          <i class="bi bi-egg-fill me-2"></i>
          {{ 'HERO.WELCOME' | translate }}
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-item nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
                <i class="bi bi-house-door-fill me-1"></i>
                {{ 'HEADER.HOME' | translate }}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-item nav-link" routerLink="/gallery" routerLinkActive="active">
                <i class="bi bi-images me-1"></i>
                {{ 'HEADER.GALLERY' | translate }}
              </a>
            </li>
          </ul>
          <!-- Modern Language Dropdown -->
          <div class="dropdown modern-dropdown">
            <button class="btn btn-glass dropdown-toggle" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-globe2"></i>
              {{ getCurrentLangLabel() }}
            </button>
            <ul class="dropdown-menu glass-effect dropdown-menu-end" aria-labelledby="languageDropdown">
              <li>
                <button class="dropdown-item d-flex align-items-center gap-2" [class.active]="currentLang === 'en'" (click)="switchLang('en')">
                  <span class="flag-icon">🇺🇸</span>
                  English
                </button>
              </li>
              <li>
                <button class="dropdown-item d-flex align-items-center gap-2" [class.active]="currentLang === 'fr'" (click)="switchLang('fr')">
                  <span class="flag-icon">🇫🇷</span>
                  Français
                </button>
              </li>
              <li>
                <button class="dropdown-item d-flex align-items-center gap-2" [class.active]="currentLang === 'ar'" (click)="switchLang('ar')">
                  <span class="flag-icon">🇹🇳</span>
                  العربية
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <router-outlet></router-outlet>

    <!-- Enhanced WhatsApp Button -->
    <div class="social-buttons" [class.rtl]="currentLang === 'ar'">
      <a href="https://wa.me/+21621797063" class="whatsapp-button pulse" target="_blank">
        <i class="bi bi-whatsapp"></i>
        <span class="button-text">{{ 'CONTACT.WHATSAPP' | translate }}</span>
      </a>
      <div class="social-tooltip">
        {{ 'CONTACT.WHATSAPP' | translate }}
      </div>
    </div>
  `,
  styles: [`
    /* Modern Navbar Styles */
    .modern-navbar {
      background: linear-gradient(135deg, #1a1a1a 0%, #363636 100%);
      padding: 1rem 0;
      box-shadow: 0 2px 15px rgba(0,0,0,0.1);
    }

    .navbar-brand {
      font-weight: 600;
      color: white !important;
      transition: all 0.3s ease;
    }

    .navbar-brand:hover {
      transform: translateY(-1px);
    }

    .nav-link {
      color: rgba(255,255,255,0.9) !important;
      transition: all 0.3s ease;
      position: relative;
      padding: 0.5rem 1rem !important;
    }

    .nav-link:after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 50%;
      background-color: #fff;
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }

    .nav-link:hover:after {
      width: 80%;
    }

    .nav-link.active:after {
      width: 80%;
    }

    /* Glass Effect Button */
    .btn-glass {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      transition: all 0.3s ease;
    }

    .btn-glass:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.3);
      transform: translateY(-1px);
    }

    /* Glass Effect Dropdown */
    .glass-effect {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.1);
    }

    /* Social Buttons Container */
    .social-buttons {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 1000;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    .social-buttons.rtl {
      right: auto;
      left: 20px;
      align-items: flex-start;
    }

    /* Enhanced WhatsApp Button */
    .whatsapp-button {
      background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
      color: white;
      padding: 12px 24px;
      border-radius: 50px;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
    }

    .whatsapp-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
      color: white;
      text-decoration: none;
    }

    .whatsapp-button i {
      font-size: 1.2em;
    }

    /* Pulse Animation */
    .pulse {
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4);
      }
      70% {
        box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
      }
    }

    /* Tooltip */
    .social-tooltip {
      position: absolute;
      bottom: 70px;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 8px 16px;
      border-radius: 4px;
      font-size: 0.9em;
      opacity: 0;
      transition: all 0.3s ease;
      pointer-events: none;
    }

    .social-buttons:hover .social-tooltip {
      opacity: 1;
      transform: translateY(-5px);
    }

    /* RTL Support */
    :host-context([dir="rtl"]) .dropdown-menu {
      text-align: right;
    }

    :host-context([dir="rtl"]) .nav-link:after {
      right: 50%;
      left: auto;
      transform: translateX(50%);
    }

    /* Responsive Adjustments */
    @media (max-width: 768px) {
      .button-text {
        display: none;
      }
      .whatsapp-button {
        padding: 12px;
        border-radius: 50%;
      }
      .whatsapp-button i {
        margin: 0;
      }
    }
  `]
})
export class AppComponent {
  currentLang: string = 'en';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  switchLang(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }

  getCurrentLangLabel(): string {
    switch (this.currentLang) {
      case 'en':
        return 'English';
      case 'fr':
        return 'Français';
      case 'ar':
        return 'العربية';
      default:
        return 'Language';
    }
  }
} 