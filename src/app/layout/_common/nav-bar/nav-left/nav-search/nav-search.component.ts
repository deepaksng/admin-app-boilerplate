// angular import
import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.scss'],
  imports: [NgClass]
})
export class NavSearchComponent {
  searchInterval: any;
  searchWidth: number;
  searchWidthString: string = '';
  isSearchOpen = false;

  constructor() {
    this.searchWidth = 0;
  }

  searchOn() {
    // document.querySelector('#main-search').classList.add('open');
    this.isSearchOpen = !this.isSearchOpen;
    this.searchInterval = setInterval(() => {
      if (this.searchWidth >= 170) {
        clearInterval(this.searchInterval);
        // return false;
      }
      this.searchWidth = this.searchWidth + 30;
      this.searchWidthString = this.searchWidth + 'px';
    }, 35);
  }

  searchOff() {
    this.searchInterval = setInterval(() => {
      if (this.searchWidth <= 0) {
        // document.querySelector('#main-search').classList.remove('open');
        this.isSearchOpen = !this.isSearchOpen;
        clearInterval(this.searchInterval);
        // return false;
      }
      this.searchWidth = this.searchWidth - 30;
      this.searchWidthString = this.searchWidth + 'px';
    }, 35);
  }
}
