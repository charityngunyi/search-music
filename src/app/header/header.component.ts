import { Component, OnInit } from '@angular/core';
// primeng apis
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink:
      ['/home']},
      {label: 'About Us', icon: 'pi pi-fw pi-calendar', routerLink:
      ['/about']},
      {label: 'Contact Us', icon: 'pi pi-fw pi-pencil', routerLink:
      ['/contact']},
      {label: 'Login', icon: 'pi pi-fw pi-file', routerLink:
      ['/login']},
      {label: 'Search', icon: 'pi pi-fw pi-file', routerLink:
      ['/search']},
      {label: 'Protected', icon: 'pi pi-fw pi-file', routerLink:
      ['/protected']}
  ];
  }

}
