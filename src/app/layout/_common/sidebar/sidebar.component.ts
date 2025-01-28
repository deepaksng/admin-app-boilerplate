import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';
import { SidebarLogoComponent } from './sidebar-logo/sidebar-logo.component';
import { globalConfig } from '../../../app.config';

@Component({
  selector: 'app-sidebar',
  imports: [SidebarLogoComponent, SidebarContentComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  // public props
  @Output() NavCollapse = new EventEmitter();
  @Output() NavCollapsedMob = new EventEmitter();
  navCollapsed: any;
  navCollapsedMob = false;
  windowWidth: number = 0;
 
  // constructor
  constructor() {}
 
  ngOnInit() {
   if (typeof window !== 'undefined') {
     this.windowWidth = window.innerWidth;
     this.navCollapsed = this.windowWidth >= 992 ? globalConfig.isCollapseMenu : false;
   }
 }
  // public method
  navCollapse() {
    if (this.windowWidth >= 992) {
      this.navCollapsed = !this.navCollapsed;
      this.NavCollapse.emit();
    }
  }
 
  navCollapseMob() {
    if (this.windowWidth < 992) {
      this.NavCollapsedMob.emit();
    }
  }
}
