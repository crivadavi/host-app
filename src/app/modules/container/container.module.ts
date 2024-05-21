import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerRoutingModule } from './container-routing.module';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CommonComponentsModule } from '../common/common-components.module';

const commonComponents = [
  MainpageComponent
];

const commonModules = [
  CommonComponentsModule
];

@NgModule({
  declarations: [commonComponents],
  imports: [commonModules, ContainerRoutingModule],
  exports: [commonComponents, commonModules],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContainerModule { }
