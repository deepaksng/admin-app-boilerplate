import { DOCUMENT, Location } from '@angular/common';
import { Component, EventEmitter, HostListener, Inject, Output, Renderer2 } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { SidebarGroupComponent } from './sidebar-group/sidebar-group.component';
import { SidebarCollapseComponent } from './sidebar-collapse/sidebar-collapse.component';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';

@Component({
  selector: 'app-sidebar-content',
  imports: [NgScrollbarModule, SidebarGroupComponent, SidebarCollapseComponent, SidebarItemComponent],
  templateUrl: './sidebar-content.component.html',
  styleUrl: './sidebar-content.component.scss'
})
export class SidebarContentComponent {

  menuItems = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: 'feather icon-home',
      classes: 'nav-item'
    },
    {
      id: 'introduction',
      title: 'Introduction',
      type: 'item',
      url: '/introduction',
      icon: 'feather icon-home',
      classes: 'nav-item'
    },
    {
      id: 'file_structure',
      title: 'File Structure',
      type: 'item',
      url: '/file',
      icon: 'feather icon-codepen',
      classes: 'nav-item'
    },
    {
      id: 'setup_enviornment',
      title: 'Setup Enviornment',
      type: 'item',
      url: '/setup',
      icon: 'feather icon-settings',
      classes: 'nav-item'
    },
    {
      id: 'installation',
      title: 'Installation Steps',
      type: 'item',
      url: '/installation',
      icon: 'feather icon-sliders',
      classes: 'nav-item'
    },
    {
      id: 'deployment',
      title: 'Deployment',
      type: 'item',
      url: '/deploy',
      icon: 'feather icon-upload-cloud',
      classes: 'nav-item'
    },
    {
      id: 'orders',
      title: 'Orders',
      type: 'item',
      url: '/orders',
      icon: 'feather icon-shopping-cart',
      classes: 'nav-item'
    }
  ]

//  menuItems = [
//     {
//       id: 'navigation',
//       title: 'Navigation',
//       type: 'group',
//       icon: 'icon-navigation',
//       children: [
//         {
//           id: 'dashboard',
//           title: 'Dashboard',
//           type: 'item',
//           url: '/dashboard',
//           icon: 'feather icon-home',
//           classes: 'nav-item'
//         }
//       ]
//     },
//     {
//       id: 'ui-element',
//       title: 'UI ELEMENT',
//       type: 'group',
//       icon: 'icon-ui',
//       children: [
//         {
//           id: 'basic',
//           title: 'Component',
//           type: 'collapse',
//           icon: 'feather icon-box',
//           children: [
//             {
//               id: 'button',
//               title: 'Button',
//               type: 'item',
//               url: '/basic/button'
//             },
//             {
//               id: 'badges',
//               title: 'Badges',
//               type: 'item',
//               url: '/basic/badges'
//             },
//             {
//               id: 'breadcrumb-pagination',
//               title: 'Breadcrumb & Pagination',
//               type: 'item',
//               url: '/basic/breadcrumb-paging'
//             },
//             {
//               id: 'collapse',
//               title: 'Collapse',
//               type: 'item',
//               url: '/basic/collapse'
//             },
//             {
//               id: 'tabs-pills',
//               title: 'Tabs & Pills',
//               type: 'item',
//               url: '/basic/tabs-pills'
//             },
//             {
//               id: 'typography',
//               title: 'Typography',
//               type: 'item',
//               url: '/basic/typography'
//             }
//           ]
//         }
//       ]
//     },
//     {
//       id: 'forms',
//       title: 'Forms & Tables',
//       type: 'group',
//       icon: 'icon-group',
//       children: [
//         {
//           id: 'forms-element',
//           title: 'Form Elements',
//           type: 'item',
//           url: '/forms/basic',
//           classes: 'nav-item',
//           icon: 'feather icon-file-text'
//         },
//         {
//           id: 'tables',
//           title: 'Tables',
//           type: 'item',
//           url: '/tables/bootstrap',
//           classes: 'nav-item',
//           icon: 'feather icon-server'
//         }
//       ]
//     },
//     {
//       id: 'chart-maps',
//       title: 'Chart',
//       type: 'group',
//       icon: 'icon-charts',
//       children: [
//         {
//           id: 'apexChart',
//           title: 'ApexChart',
//           type: 'item',
//           url: 'apexchart',
//           classes: 'nav-item',
//           icon: 'feather icon-pie-chart'
//         }
//       ]
//     },
//     {
//       id: 'pages',
//       title: 'Pages',
//       type: 'group',
//       icon: 'icon-pages',
//       children: [
//         {
//           id: 'auth',
//           title: 'Authentication',
//           type: 'collapse',
//           icon: 'feather icon-lock',
//           children: [
//             {
//               id: 'signup',
//               title: 'Sign up',
//               type: 'item',
//               url: '/auth/signup',
//               target: true,
//               breadcrumbs: false
//             },
//             {
//               id: 'signin',
//               title: 'Sign in',
//               type: 'item',
//               url: '/auth/signin',
//               target: true,
//               breadcrumbs: false
//             }
//           ]
//         },
//         {
//           id: 'sample-page',
//           title: 'Sample Page',
//           type: 'item',
//           url: '/sample-page',
//           classes: 'nav-item',
//           icon: 'feather icon-sidebar'
//         },
//         {
//           id: 'disabled-menu',
//           title: 'Disabled Menu',
//           type: 'item',
//           url: 'javascript:',
//           classes: 'nav-item disabled',
//           icon: 'feather icon-power',
//           external: true
//         },
//         {
//           id: 'buy_now',
//           title: 'Buy Now',
//           type: 'item',
//           icon: 'feather icon-book',
//           classes: 'nav-item',
//           url: 'https://codedthemes.com/item/datta-able-angular/',
//           target: true,
//           external: true
//         }
//       ]
//     }
//   ];

   // public props
   title = 'Demo application for version numbering';
   // currentApplicationVersion = environment.appVersion;
   @Output() onNavCollapsedMob = new EventEmitter();
  //  menuItems: any;
   windowWidth: number = 0;
 
   // Listen for window resize events
   @HostListener('window:resize', ['$event'])
   onResize(event: Event): void {
     if (typeof window !== 'undefined') {
       this.windowWidth = window.innerWidth;
     }
     // this.checkNavState();
   }
 
   // constructor
   constructor(
    //  public nav: SidebarMenuService,
     private location: Location,
     private renderer: Renderer2,
     @Inject(DOCUMENT) private document: Document
   ) {
     // Get initial window width
     if (typeof window !== 'undefined') {
       this.windowWidth = window.innerWidth;
     }
    //  this.menuItems = this.nav.get();
 
     console.log("menu", this.menuItems)
   }
 
   // public method
   navMob() {
     const navElement = this.document.querySelector('app-navigation.pcoded-navbar');
     if (navElement && this.windowWidth < 992 && navElement.classList.contains('mob-open')) {
       this.onNavCollapsedMob.emit();
     }
   }
 
   fireOutClick() {
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
