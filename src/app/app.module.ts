import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutsComponent } from './layouts/layouts.component';
import { FormsModule } from '@angular/forms';
import { ListTeacherComponent } from './layouts/pages/list-teacher/list-teacher.component';
import { DocumentComponent } from './layouts/pages/document/document.component';
import { AddDocumentComponent } from './layouts/pages/add-document/add-document.component';
import { AdminHomeComponent } from './layouts/pages/admin-home/admin-home.component';
import { ExecutiveTeacherComponent } from './layouts/pages/executive-teacher/executive-teacher.component';
import { SearchPipe } from './search.pipe';


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
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
