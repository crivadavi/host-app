import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerRoutingModule } from './container-routing.module';
import { MainpageComponent } from './mainpage/mainpage.component';

const commonComponents = [
  MainpageComponent
];

@NgModule({
  declarations: [commonComponents],
  imports: [CommonModule, ContainerRoutingModule],
  exports: [commonComponents],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContainerModule { }
