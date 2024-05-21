import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { DatepickerComponent } from './datepicker/datepicker.component';
// import { DatetimepickerComponent } from './datetimepicker/datetimepicker.component';
// import { TimepickerComponent } from './timepicker/timepicker.component';
// import { VersionDialogComponent } from './version-dialog/version-dialog.component';

const commonComponents = [
  // DatepickerComponent,
  // TimepickerComponent,
  // DatetimepickerComponent,
  // VersionDialogComponent
];

const commonModules = [
  CommonModule,
  FormsModule,
  NgbModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: [commonComponents],
  imports: [ commonModules ],
  exports: [ commonComponents, commonModules]
})
export class CommonComponentsModule { }
