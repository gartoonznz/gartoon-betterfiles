import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { LoginComponent } from './layouts/login/login.component';


const routes: Routes = [
    {
    path: '',
    component: LayoutsComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/layouts.module').then(m => m.LayoutsModule)
    }]
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
