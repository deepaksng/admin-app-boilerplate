import { DOCUMENT, NgClass } from '@angular/common';
import { Component, Inject, Input, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar-item',
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.scss'
})
export class SidebarItemComponent {
  // public props
  @Input() item: any;

  constructor(private renderer: Renderer2,
    @Inject(DOCUMENT) private document: any) {}

  // public method
  closeOtherMenu(event: any) {
    const ele = event.target;
    if (ele !== null && ele !== undefined) {
      const parent = ele.parentElement;
      const up_parent = parent.parentElement.parentElement;
      const last_parent = up_parent.parentElement;
      const sections = document.querySelectorAll('.pcoded-hasmenu');
      for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active');
        sections[i].classList.remove('pcoded-trigger');
      }
      if (parent.classList.contains('pcoded-hasmenu')) {
        parent.classList.add('pcoded-trigger');
        parent.classList.add('active');
      } else if (up_parent.classList.contains('pcoded-hasmenu')) {
        up_parent.classList.add('pcoded-trigger');
        up_parent.classList.add('active');
      } else if (last_parent.classList.contains('pcoded-hasmenu')) {
        last_parent.classList.add('pcoded-trigger');
        last_parent.classList.add('active');
      }
    }
    // Check for the 'mob-open' class and remove it if present
    const navElement = this.document.querySelector('app-navigation.pcoded-navbar');
    if (navElement?.classList.contains('mob-open')) {
      this.renderer.removeClass(navElement, 'mob-open');
    }
  }
}
