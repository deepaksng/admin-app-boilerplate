// angular import
import { Component } from '@angular/core';
import { NavSearchComponent } from './nav-search/nav-search.component';
import { ToggleFullScreenDirective } from '../../../../shared/components/full-screen/toggle-full-screen';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss'],
  imports: [ToggleFullScreenDirective]
})
export class NavLeftComponent {}
