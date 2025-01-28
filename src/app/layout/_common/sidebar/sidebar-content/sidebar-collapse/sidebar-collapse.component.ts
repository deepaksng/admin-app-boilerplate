import { Component, forwardRef, Input } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { RouterLinkActive } from '@angular/router';
import { SidebarGroupComponent } from '../sidebar-group/sidebar-group.component';
import { SidebarItemComponent } from '../sidebar-item/sidebar-item.component';

@Component({
  selector: 'app-sidebar-collapse',
  imports: [forwardRef(() => SidebarGroupComponent), SidebarItemComponent, RouterLinkActive],
  templateUrl: './sidebar-collapse.component.html',
  styleUrl: './sidebar-collapse.component.scss',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', display: 'block' }),
        animate('250ms ease-in', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [animate('250ms ease-in', style({ transform: 'translateY(-100%)' }))])
    ])
  ]
})
export class SidebarCollapseComponent {
   // public props
   visible = false;
   @Input() item: any;
 
   constructor() {}
 
   // public method
   navCollapse(e: any) {
     this.visible = !this.visible;
     let parent = e.target;
     parent = parent.parentElement;
 
     const sections = document.querySelectorAll('.pcoded-hasmenu');
     for (let i = 0; i < sections.length; i++) {
       if (sections[i] !== parent) {
         sections[i].classList.remove('pcoded-trigger');
       }
     }
     let first_parent = parent.parentElement;
     let pre_parent = parent.parentElement.parentElement;
     if (first_parent.classList.contains('pcoded-hasmenu')) {
       do {
         first_parent.classList.add('pcoded-trigger');
         first_parent = first_parent.parentElement.parentElement.parentElement;
       } while (first_parent.classList.contains('pcoded-hasmenu'));
     } else if (pre_parent.classList.contains('pcoded-submenu')) {
       do {
         pre_parent.parentElement.classList.add('pcoded-trigger');
         pre_parent = pre_parent.parentElement.parentElement.parentElement;
       } while (pre_parent.classList.contains('pcoded-submenu'));
     }
     parent.classList.toggle('pcoded-trigger');
   }
}
