import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  template: `
    <!-- Hero Section with Parallax -->
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="animate-up">{{ 'HERO.WELCOME' | translate }}</h1>
        <p class="lead animate-up-delay">{{ 'HERO.SUBTITLE' | translate }}</p>
        <button class="cta-button animate-up-delay-2" (click)="scrollToProducts()">
          <i class="bi bi-arrow-down-circle"></i>
          {{ 'HERO.DISCOVER' | translate }}
        </button>
      </div>
    </div>

    <!-- About Section with Animation -->
    <div class="container mt-5">
      <div class="row align-items-center about-section" #aboutSection>
        <div class="col-md-6 animate-left">
          <div class="about-content">
            <h2>{{ 'ABOUT.TITLE' | translate }}</h2>
            <p>{{ 'ABOUT.DESCRIPTION' | translate }}</p>
            <div class="features">
              <div class="feature">
                <i class="bi bi-check-circle-fill"></i>
                {{ 'ABOUT.FEATURE1' | translate }}
              </div>
              <div class="feature">
                <i class="bi bi-check-circle-fill"></i>
                {{ 'ABOUT.FEATURE2' | translate }}
              </div>
              <div class="feature">
                <i class="bi bi-check-circle-fill"></i>
                {{ 'ABOUT.FEATURE3' | translate }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 animate-right">
          <div class="image-stack">
            <img src="/assets/images/WhatsApp Image 2025-01-17 à 15.44.15_e8867656.jpg" alt="Our Farm" class="main-image">
            <div class="image-overlay"></div>
          </div>
        </div>
      </div>

      <!-- Products Section with Card Hover Effects -->
      <div class="featured-products mt-5" #productsSection>
        <h2 class="text-center mb-4 section-title">{{ 'PRODUCTS.TITLE' | translate }}</h2>
        <div class="row justify-content-center">
          <div class="col-md-5 mb-4">
            <div class="modern-card">
              <div class="card-image-wrapper">
                <img src="/assets/images/WhatsApp Image 2025-01-17 à 16.12.53_254b87d8.jpg" class="card-img-top" alt="Premium Chickens">
                <div class="card-overlay">
                  <button class="info-button">
                    <i class="bi bi-info-circle"></i>
                  </button>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">{{ 'PRODUCTS.PREMIUM.TITLE' | translate }}</h5>
                <p class="card-text">{{ 'PRODUCTS.PREMIUM.DESCRIPTION' | translate }}</p>
                <div class="card-features">
                  <span class="badge">{{ 'PRODUCTS.PREMIUM.FEATURE1' | translate }}</span>
                  <span class="badge">{{ 'PRODUCTS.PREMIUM.FEATURE2' | translate }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5 mb-4">
            <div class="modern-card">
              <div class="card-image-wrapper">
                <img src="/assets/images/473609611_122095944998742754_5515060293022513878_n.jpg" class="card-img-top" alt="Day-Old Chicks">
                <div class="card-overlay">
                  <button class="info-button">
                    <i class="bi bi-info-circle"></i>
                  </button>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">{{ 'PRODUCTS.CHICKS.TITLE' | translate }}</h5>
                <p class="card-text">{{ 'PRODUCTS.CHICKS.DESCRIPTION' | translate }}</p>
                <div class="card-features">
                  <span class="badge">{{ 'PRODUCTS.CHICKS.FEATURE1' | translate }}</span>
                  <span class="badge">{{ 'PRODUCTS.CHICKS.FEATURE2' | translate }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Statistics Section -->
      <div class="statistics-section mt-5">
        <div class="row text-center">
          <div class="col-md-3 col-6 mb-4">
            <div class="stat-card">
              <i class="bi bi-egg"></i>
              <div class="stat-number">{{ chickensCount }}</div>
              <div class="stat-label">{{ 'STATS.CHICKENS' | translate }}</div>
            </div>
          </div>
          <div class="col-md-3 col-6 mb-4">
            <div class="stat-card">
              <i class="bi bi-people"></i>
              <div class="stat-number">{{ customersCount }}</div>
              <div class="stat-label">{{ 'STATS.CUSTOMERS' | translate }}</div>
            </div>
          </div>
          <div class="col-md-3 col-6 mb-4">
            <div class="stat-card">
              <i class="bi bi-award"></i>
              <div class="stat-number">{{ yearsCount }}</div>
              <div class="stat-label">{{ 'STATS.YEARS' | translate }}</div>
            </div>
          </div>
          <div class="col-md-3 col-6 mb-4">
            <div class="stat-card">
              <i class="bi bi-star"></i>
              <div class="stat-number">{{ satisfactionCount }}%</div>
              <div class="stat-label">{{ 'STATS.SATISFACTION' | translate }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonials Section -->
    <div class="testimonials-section mt-5">
      <div class="container">
        <h2 class="text-center mb-4 section-title">{{ 'TESTIMONIALS.TITLE' | translate }}</h2>
        <div class="testimonials-carousel">
          <div class="row">
            <div class="col-md-4" *ngFor="let i of [1,2,3]">
              <div class="testimonial-card">
                <div class="testimonial-avatar">
                  <i class="bi bi-person-circle"></i>
                </div>
                <div class="testimonial-content">
                  <div class="testimonial-text">
                    {{ 'TESTIMONIALS.QUOTE' + i | translate }}
                  </div>
                  <div class="testimonial-author">
                    {{ 'TESTIMONIALS.AUTHOR' + i | translate }}
                  </div>
                  <div class="testimonial-rating">
                    <i class="bi bi-star-fill" *ngFor="let star of [1,2,3,4,5]"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    /* Hero Section */
    .hero-section {
      height: 100vh;
      background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
                  url('/assets/images/WhatsApp Image 2025-01-17 à 15.44.15_e8867656.jpg');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
      position: relative;
    }

    .hero-content {
      max-width: 800px;
      padding: 2rem;
    }

    .hero-content h1 {
      font-size: clamp(2rem, 5vw, 3.5rem);
      margin-bottom: 1rem;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    .hero-content p {
      font-size: clamp(1rem, 3vw, 1.25rem);
      margin-bottom: 2rem;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
    }

    .animate-up {
      animation: fadeInUp 1s ease;
    }

    .animate-up-delay {
      animation: fadeInUp 1s ease 0.3s both;
    }

    .animate-up-delay-2 {
      animation: fadeInUp 1s ease 0.6s both;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* CTA Button */
    .cta-button {
      background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
      color: white;
      border: none;
      padding: clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem);
      border-radius: 50px;
      font-size: clamp(1rem, 2.5vw, 1.1rem);
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 2rem;
      box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
      white-space: nowrap;
      justify-content: center;
      min-width: clamp(200px, 50vw, 250px);
    }

    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
    }

    .cta-button:active {
      transform: translateY(1px);
    }

    /* About Section */
    .about-section {
      padding: 5rem 0;
    }

    .about-content {
      padding: 2rem;
    }

    .features {
      margin-top: 2rem;
    }

    .feature {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    .feature i {
      color: #25D366;
    }

    .image-stack {
      position: relative;
      padding: 1rem;
    }

    .main-image {
      width: 100%;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }

    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(37,211,102,0.2) 0%, rgba(18,140,126,0.2) 100%);
      border-radius: 15px;
    }

    /* Modern Cards */
    .modern-card {
      background: white;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .modern-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    }

    .card-image-wrapper {
      position: relative;
      overflow: hidden;
    }

    .card-img-top {
      height: 250px;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .modern-card:hover .card-img-top {
      transform: scale(1.05);
    }

    .card-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.3);
      opacity: 0;
      transition: opacity 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .modern-card:hover .card-overlay {
      opacity: 1;
    }

    .info-button {
      background: white;
      border: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .info-button:hover {
      transform: scale(1.1);
    }

    .card-body {
      padding: clamp(1rem, 3vw, 1.5rem);
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }

    .card-title {
      font-size: clamp(1.25rem, 4vw, 1.5rem);
      margin-bottom: 1rem;
    }

    .card-text {
      font-size: clamp(0.9rem, 2.5vw, 1rem);
      margin-bottom: 1rem;
      flex-grow: 1;
    }

    .card-features {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: auto;
    }

    .badge {
      background: #f8f9fa;
      color: #212529;
      padding: clamp(0.4rem, 2vw, 0.5rem) clamp(0.8rem, 2.5vw, 1rem);
      border-radius: 50px;
      font-weight: normal;
      font-size: clamp(0.8rem, 2.5vw, 0.9rem);
    }

    /* Statistics Section */
    .statistics-section {
      padding: clamp(2rem, 5vw, 4rem) 0;
      background: #f8f9fa;
      border-radius: 15px;
      margin: clamp(1rem, 3vw, 2rem);
    }

    .stat-card {
      padding: clamp(1rem, 3vw, 2rem);
      text-align: center;
    }

    .stat-card i {
      font-size: clamp(2rem, 5vw, 2.5rem);
      color: #25D366;
      margin-bottom: clamp(0.5rem, 2vw, 1rem);
    }

    .stat-number {
      font-size: clamp(1.5rem, 4vw, 2rem);
      font-weight: bold;
      color: #212529;
      margin-bottom: 0.5rem;
    }

    .stat-label {
      color: #6c757d;
      font-size: clamp(0.9rem, 2.5vw, 1rem);
    }

    /* Testimonials Section */
    .testimonials-section {
      padding: clamp(3rem, 5vw, 5rem) 0;
    }

    .testimonial-card {
      padding: clamp(1.5rem, 3vw, 2rem);
      margin: clamp(0.5rem, 2vw, 1rem);
    }

    .testimonial-text {
      font-size: clamp(0.9rem, 2.5vw, 1rem);
    }

    .testimonial-author {
      font-size: clamp(1rem, 2.5vw, 1.1rem);
    }

    .testimonial-rating {
      color: #ffc107;
      margin-top: 0.5rem;
    }

    /* Animations */
    .animate-left {
      animation: slideInLeft 1s ease both;
    }

    .animate-right {
      animation: slideInRight 1s ease both;
    }

    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    /* Section Titles */
    .section-title {
      position: relative;
      display: inline-block;
      padding-bottom: 1rem;
      margin-bottom: 3rem;
    }

    .section-title:after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 50px;
      height: 2px;
      background: #25D366;
      transform: translateX(-50%);
      transition: width 0.3s ease;
    }

    .section-title:hover:after {
      width: 100px;
    }

    /* RTL Support */
    :host-context([dir="rtl"]) .feature {
      flex-direction: row-reverse;
    }

    :host-context([dir="rtl"]) .testimonial-content {
      text-align: right;
    }

    :host-context([dir="rtl"]) .card-features {
      justify-content: flex-start;
    }

    @media (max-width: 768px) {
      .hero-section {
        height: 80vh;
        background-attachment: scroll;
      }

      .featured-products .row {
        margin: 0 clamp(0.5rem, 2vw, 1rem);
      }

      .modern-card {
        margin-bottom: clamp(1rem, 3vw, 1.5rem);
      }

      .testimonial-card {
        margin-bottom: clamp(1rem, 3vw, 1.5rem);
      }

      .stat-card {
        margin-bottom: clamp(1rem, 3vw, 1.5rem);
      }

      .card-features {
        justify-content: center;
      }
    }

    @media (max-width: 576px) {
      .hero-content {
        padding: 1rem;
      }

      .cta-button {
        width: 100%;
        max-width: 300px;
      }

      .statistics-section {
        margin: 1rem;
        padding: 1.5rem 0;
      }

      .stat-card {
        padding: 1rem 0.5rem;
      }

      .testimonial-card {
        margin: 0.5rem;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  chickensCount: number = 0;
  customersCount: number = 0;
  yearsCount: number = 0;
  satisfactionCount: number = 0;

  private readonly targetCounts = {
    chickens: 1000,
    customers: 500,
    years: 15,
    satisfaction: 98
  };

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.initScrollAnimations();
    this.initCounterAnimations();
  }

  private initCounterAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounters();
        }
      });
    }, { threshold: 0.1 });

    const statsSection = document.querySelector('.statistics-section');
    if (statsSection) {
      observer.observe(statsSection);
    }
  }

  private animateCounters() {
    this.animateCounter('chickens', this.targetCounts.chickens, (value) => this.chickensCount = value);
    this.animateCounter('customers', this.targetCounts.customers, (value) => this.customersCount = value);
    this.animateCounter('years', this.targetCounts.years, (value) => this.yearsCount = value);
    this.animateCounter('satisfaction', this.targetCounts.satisfaction, (value) => this.satisfactionCount = value);
  }

  private animateCounter(key: string, target: number, setter: (value: number) => void) {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setter(Math.round(current));
    }, interval);
  }

  scrollToProducts() {
    document.querySelector('.featured-products')?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  private initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-left, .animate-right').forEach((el) => {
      observer.observe(el);
    });
  }
} 