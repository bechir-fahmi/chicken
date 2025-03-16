import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="modern-footer">
      <div class="footer-content container">
        <div class="row">
          <div class="col-md-4 footer-section">
            <h5 class="footer-title">
              <i class="bi bi-egg-fill me-2"></i>
              {{ 'FOOTER.ABOUT_TITLE' | translate }}
            </h5>
            <p>{{ 'FOOTER.ABOUT_TEXT' | translate }}</p>
            <div class="social-links">
              <a href="#" class="social-link"><i class="bi bi-facebook"></i></a>
              <a href="#" class="social-link"><i class="bi bi-instagram"></i></a>
              <a href="#" class="social-link"><i class="bi bi-twitter"></i></a>
            </div>
          </div>
          <div class="col-md-4 footer-section">
            <h5 class="footer-title">
              <i class="bi bi-geo-alt-fill me-2"></i>
              {{ 'FOOTER.CONTACT_TITLE' | translate }}
            </h5>
            <ul class="contact-list">
              <li><i class="bi bi-telephone-fill"></i> +216 21 797 063</li>
              <li><i class="bi bi-envelope-fill"></i> contact@chickenfarm.com</li>
              <li><i class="bi bi-geo-alt-fill"></i> {{ 'FOOTER.ADDRESS' | translate }}</li>
            </ul>
          </div>
          <div class="col-md-4 footer-section">
            <h5 class="footer-title">
              <i class="bi bi-clock-fill me-2"></i>
              {{ 'FOOTER.HOURS_TITLE' | translate }}
            </h5>
            <ul class="hours-list">
              <li>{{ 'FOOTER.WEEKDAYS' | translate }}: 8:00 - 18:00</li>
              <li>{{ 'FOOTER.SATURDAY' | translate }}: 9:00 - 16:00</li>
              <li>{{ 'FOOTER.SUNDAY' | translate }}: {{ 'FOOTER.CLOSED' | translate }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <p class="text-center mb-0">
            © 2024 {{ 'FOOTER.COPYRIGHT' | translate }}
          </p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .modern-footer {
      background: linear-gradient(135deg, #1a1a1a 0%, #363636 100%);
      color: white;
      padding-top: 3rem;
      margin-top: 4rem;
    }

    .footer-content {
      position: relative;
      z-index: 1;
    }

    .footer-section {
      margin-bottom: 2rem;
    }

    .footer-title {
      color: #fff;
      font-weight: 600;
      margin-bottom: 1.5rem;
      position: relative;
      display: inline-block;
    }

    .footer-title:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 40px;
      height: 2px;
      background: #25D366;
      transition: width 0.3s ease;
    }

    .footer-section:hover .footer-title:after {
      width: 60px;
    }

    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 1.5rem;
    }

    .social-link {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(255,255,255,0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .social-link:hover {
      background: #25D366;
      transform: translateY(-3px);
    }

    .contact-list, .hours-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .contact-list li, .hours-list li {
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .footer-bottom {
      background: rgba(0,0,0,0.2);
      padding: 1.5rem 0;
      margin-top: 3rem;
    }

    :host-context([dir="rtl"]) .footer-title:after {
      right: 0;
      left: auto;
    }
  `]
})
export class FooterComponent {} 