import { Injectable, TemplateRef, Type } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { from, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private optionsDefault: ModalOptions;

  constructor(private ngbModal: NgbModal) { 
    this.optionsDefault = {
      "backdrop" : "static",
      "keyboard" : false,
      "errorOnClose" : false,
      "centered": true,
      "size": "lg",
      "scrollable": true,
      "backdropClass": "bg-black"
    };
  }
 
  open<T>(modalComponent: Type<T> | TemplateRef<any>, options?: ModalOptions): Modal<T> {
    options = {...this.optionsDefault, ...options };
    return new Modal(this.ngbModal.open(modalComponent, options), options.errorOnClose);
  }
}

/**  
 * Le opzioni che sono passate all'apertura della modal
 * Se errorOnClose è true allora chiudere la modal impropriamente produrrà un errore nell'observable 
 * ritornato al componente parent. Altrimenti l'observable restituirà come valore null.
 */
 export interface ModalOptions extends NgbModalOptions {
  errorOnClose?: boolean;
}

export class Modal<T> {
  constructor(private ngbModalRef: NgbModalRef, private errorOnClose: boolean) {}

  get componentInstance(): T {
    return this.ngbModalRef.componentInstance;
  }

  get result() {
    return from(this.ngbModalRef.result).pipe(catchError(err => (this.errorOnClose ? throwError(err || 'not confirmed') : of(null))));
  }

}
