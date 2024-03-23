import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutsComponent } from './layouts/layouts.component';
import { FormsModule } from '@angular/forms';

import { SearchPipe } from './search.pipe';
import { ExecutiveTeacherComponent } from './layouts/pages/admin/executive-teacher/executive-teacher.component';
import { AdminHomeComponent } from './layouts/pages/admin/admin-home/admin-home.component';
import { AddDocumentComponent } from './layouts/pages/admin/add-document/add-document.component';
import { DocumentComponent } from './layouts/pages/admin/document/document.component';
import { ListTeacherComponent } from './layouts/pages/admin/list-teacher/list-teacher.component';
import { ExSelectRoleComponent } from './layouts/pages/exam-teacher/ex-select-role/ex-select-role.component';
import { ExHomeComponent } from './layouts/pages/exam-teacher/ex-home/ex-home.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    AdminHomeComponent,
    AddDocumentComponent,
    ListTeacherComponent,
    DocumentComponent,
    ExecutiveTeacherComponent,
    SearchPipe,
    ExSelectRoleComponent,
    ExHomeComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
