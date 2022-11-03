import { Component } from '@angular/core';
import {
  ActivatedRoute,
  Router
  } from '@angular/router';
// primeng apis

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
  };
}
