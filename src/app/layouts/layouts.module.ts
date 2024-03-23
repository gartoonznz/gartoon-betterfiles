import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LayoutsRoutingModule } from './layouts-routing.module';
import { ExSelectRoleComponent } from './pages/exam-teacher/ex-select-role/ex-select-role.component';
import { ExHomeComponent } from './pages/exam-teacher/ex-home/ex-home.component';




@NgModule({
  declarations: [

  
   
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    
  ]
})
export class LayoutsModule { }