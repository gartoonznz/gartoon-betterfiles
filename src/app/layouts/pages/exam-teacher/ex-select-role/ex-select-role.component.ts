import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ex-select-role',
  templateUrl: './ex-select-role.component.html',
  styleUrl: './ex-select-role.component.css'
})
export class ExSelectRoleComponent {

  constructor(private router: Router) {}
  goToEXhome(){
    this.router.navigate(['/ex-home']);
  }

}
