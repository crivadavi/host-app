import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnvironmentService } from './services/environment.service';
import { ContainerModule } from './modules/container/container.module';

import '@angular/localize/init';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from "@angular/common";
import localeIt from "@angular/common/locales/it";

registerLocaleData(localeIt, "it");

export const envInitializerFn = (envService: EnvironmentService) => {
  return () => {
    return envService.loadEnvironment();
  }
};

export const environmentProvider = [
  { 
    provide: APP_INITIALIZER, 
    useFactory: envInitializerFn, 
    multi: true,
    deps: [EnvironmentService]
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ContainerModule
  ],
  providers: [
    EnvironmentService,
    environmentProvider,
    NgbActiveModal,
    { provide: LOCALE_ID, useValue: "it-IT"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
