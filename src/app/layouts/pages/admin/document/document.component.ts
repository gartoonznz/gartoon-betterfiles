import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { docData } from './dummy/doc-data';
import { SwalService } from '../../../../shared/services/swal.service';
import { doc } from '../../../../shared/interface/doc';


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrl: './document.component.css'
})
export class DocumentComponent {
  search!:string;
  docList!: doc[];
  _docList!: doc[];
  constructor(private router: Router,
   private swalSrv: SwalService) {

    
    this.docList = docData;
    this._docList = docData;

    console.log(this.docList)
  }

  allDoc() {
    this._docList = docData;
  }
  commonDoc() {
    this._docList = this.docList.filter(x => x.doc_type_id == 3)
  }
  personnalDoc() {
    this._docList = this.docList.filter(x => x.doc_type_id == 2)
  }
  executiveDoc() {
    this._docList = this.docList.filter(x => x.doc_type_id == 4)
  }
  actDoc() {
    this._docList = this.docList.filter(x => x.doc_type_id == 1)
  }


  backToAdminHome() {
    this.router.navigate(['/admin-home']);
  }
  find() {

  }
}
