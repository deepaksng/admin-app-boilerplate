import { DOCUMENT, Location } from '@angular/common';
import { Component, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { SidebarCollapseComponent } from '../sidebar-collapse/sidebar-collapse.component';
import { SidebarItemComponent } from '../sidebar-item/sidebar-item.component';

@Component({
  selector: 'app-sidebar-group',
  imports: [SidebarCollapseComponent, SidebarItemComponent],
  templateUrl: './sidebar-group.component.html',
  styleUrl: './sidebar-group.component.scss'
})
export class SidebarGroupComponent  implements OnInit {
  // public props
  @Input() item: any;

  // constructor
  constructor(private location: Location, @Inject(DOCUMENT) private document: any,
     private renderer: Renderer2) { }

  // life cycle event
  ngOnInit() {
    // Get the base href from the HTML base tag
    const baseHref = this.document.querySelector('base')?.getAttribute('href') || '/';

    // Get the current path from Angular's Location service
    const currentUrl = baseHref + this.location.path();

    // Find the nav-link element in the document
    const link = "a.nav-link[href='" + currentUrl + "']";
    const ele = this.document.querySelector(link);

    if (ele) {
      let parent = ele.parentElement;
      const upParent = parent?.parentElement?.parentElement;
      const lastParent = upParent?.parentElement;

      // Check and modify classes based on parent element existence and class names
      if (parent && parent.classList.contains('pcoded-hasmenu')) {
        this.addActiveClasses(parent);
      } else if (upParent && upParent.classList.contains('pcoded-hasmenu')) {
        this.addActiveClasses(upParent);
      } else if (lastParent && lastParent.classList.contains('pcoded-hasmenu')) {
        this.addActiveClasses(lastParent);
      }
    }
  }

  // Helper method to add classes to an element
  private addActiveClasses(element: HTMLElement): void {
    this.renderer.addClass(element, 'pcoded-trigger');
    this.renderer.addClass(element, 'active');
  }
}
