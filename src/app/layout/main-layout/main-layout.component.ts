import { Component, Inject, OnInit, OnDestroy, HostListener, Renderer2, PLATFORM_ID } from '@angular/core';
import { Location, NgClass } from '@angular/common';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { globalConfig } from '../../../../src/app/app.config';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../_common/sidebar/sidebar.component';
import { NavBarComponent } from '../_common/nav-bar/nav-bar.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  imports: [RouterOutlet, NgClass, SidebarComponent, NavBarComponent],
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  navCollapsed: boolean;
  navCollapsedMob: boolean;
  windowWidth: number;

  constructor(
    private location: Location,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object, 
    private renderer: Renderer2
  ) {
    // Initialize properties
    if (isPlatformBrowser(this.platformId)) {
      this.windowWidth = window.innerWidth;
      this.navCollapsed = this.windowWidth >= 992 ? globalConfig.isCollapseMenu : false;
    } else {
      this.windowWidth = 0; // Default value when on the server-side
      this.navCollapsed = false; // Set initial state
    }
    
    this.navCollapsedMob = false;
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Setup resize event listener
      window.addEventListener('resize', this.onResize.bind(this));
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Cleanup resize event listener
      window.removeEventListener('resize', this.onResize.bind(this));
    }
  }

  onResize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.windowWidth = window.innerWidth;
      this.navCollapsed = this.windowWidth >= 992 ? globalConfig.isCollapseMenu : false;
    }
  }

  navMobClick(): void {
    const navbarElement = this.document.querySelector('app-navigation.pcoded-navbar');
    if (navbarElement) {
      const isMobileNavbarOpen = navbarElement.classList.contains('mob-open');
      if (this.navCollapsedMob && !isMobileNavbarOpen) {
        this.navCollapsedMob = !this.navCollapsedMob;
        setTimeout(() => {
          this.navCollapsedMob = !this.navCollapsedMob;
        }, 100);
      } else {
        this.navCollapsedMob = !this.navCollapsedMob;
      }
      // Toggle the 'mob-open' class using Renderer2
      this.toggleNavbarClass(navbarElement, this.navCollapsedMob);
    }
  }

  toggleNavbarClass(element: Element, isOpen: boolean): void {
    if (isOpen) {
      this.renderer.addClass(element, 'mob-open');
    } else {
      this.renderer.removeClass(element, 'mob-open');
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeMenu();
    }
  }

  closeMenu(): void {
    const navbarElement = this.document.querySelector('app-navigation.pcoded-navbar');
    if (navbarElement && navbarElement.classList.contains('mob-open')) {
      this.renderer.removeClass(navbarElement, 'mob-open');
    }
  }
}
