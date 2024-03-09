import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {
  constructor(private router: Router) {

  }

  goToDocument() {
    this.router.navigate(['/document']);
  }
  goToAddDocument() {
    this.router.navigate(['/add-ducument']);
  }
}
