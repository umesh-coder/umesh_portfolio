import { Component, ElementRef, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { Navbar } from '@layout/navbar/navbar';
import { ScrollToTop } from '@shared/components/scroll-to-top/scroll-to-top';
import { RouterOutlet } from '@angular/router';
import { Footer } from '@layout/footer/footer';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app',
  template: `
  <navbar [@pageAnimation]="loading ? 'void' : ''"></navbar>
    <main class="max-w-screen-lg mx-auto px-4 md:px-10 my-24 overflow-x-hidden min-h-screen">
      <router-outlet></router-outlet>
      <scroll-to-top></scroll-to-top>
    </main>
  <foot-note></foot-note>
  `,
  imports: [Footer, RouterOutlet, Navbar, ScrollToTop],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  animations: [
    trigger('pageAnimation', [
      transition(':enter', [
        style({ opacity: 2 }),
        animate('0.5s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.5s', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class App implements OnInit {
  private elementRef = inject(ElementRef);
  loading: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.removeAttribute("ng-version");
    this.elementRef.nativeElement.removeAttribute("ng-server-context");

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (event instanceof NavigationEnd) {
        this.loading = false;
      }
    });
  }
}
