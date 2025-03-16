import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[countUp]'
})
export class CountUpDirective implements OnInit {
  @Input('countUp') targetNumber: number = 0;
  private duration: number = 2000; // Animation duration in milliseconds
  private frameRate: number = 60;
  private currentNumber: number = 0;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.animateCount();
  }

  private animateCount() {
    const steps = this.frameRate * (this.duration / 1000);
    const increment = this.targetNumber / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      this.currentNumber = Math.min(current, this.targetNumber);
      this.el.nativeElement.textContent = Math.round(this.currentNumber).toLocaleString();
      
      if (current >= this.targetNumber) {
        clearInterval(timer);
      }
    }, 1000 / this.frameRate);
  }
} 