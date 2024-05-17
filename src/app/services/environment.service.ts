import { Injectable, Injector, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  webSocketUrl: string = '';
  restServiceUrl: string = '';

  constructor(private injector: Injector) { }

  loadEnvironment() {
    let http = this.injector.get(HttpClient);
    
    if(isDevMode()) {
      this.restServiceUrl = environment.restServiceUrl;
      environment
    } else {

      http.get<configData>('/config.json').subscribe(data => {
        console.log(data);
        this.webSocketUrl = 'ws://' + data.host + '/api/';
        this.restServiceUrl = 'http://' + data.host + '/api/';
      }, err => {
        console.log('Errore durante il prelevamento del file config.json');
        this.restServiceUrl = environment.restServiceUrl;
      });
      
    }

  }
}

export interface configData {
  host: string,
  port: string
}
