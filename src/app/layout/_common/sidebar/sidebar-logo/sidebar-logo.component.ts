import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar-logo',
  imports: [RouterLink],
  templateUrl: './sidebar-logo.component.html',
  styleUrl: './sidebar-logo.component.scss'
})
export class SidebarLogoComponent implements OnInit {
  // public props
  @Input() navCollapsed: boolean = false;
  @Output() NavCollapse = new EventEmitter();
  windowWidth: number = 0;

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.windowWidth = window.innerWidth;
    }
  }

  // public method
  navCollapse() {
    if (this.windowWidth >= 992) {
      this.navCollapsed = !this.navCollapsed;
      this.NavCollapse.emit();
    }
  }
}
