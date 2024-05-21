import { Injectable, Injector, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ParamConfig } from '../model/paramConfig';
import { Utente } from '../model/utente';
import packageJson from '../../../package.json';


@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  webSocketUrl: string = '';
  restServiceUrl: string = '';
  microfrontendList = {
    "mflist": []
  };

  junction: string = '';
  versionFE = "";
  versionBE = "";
  paramConfig: ParamConfig;
  utente: Utente;

  constructor(private http: HttpClient) { }

  loadEnvironment() {

    this.junction = environment.junction;
    this.restServiceUrl = this.junction + environment.restServiceUrl;

    this.versionFE = environment.versionFE;
    if(this.versionFE == '') {
      this.versionFE = packageJson.version;
    }

    this.setMicrofrontendList();
  }

  setMicrofrontendList() {
    // return this.http.post<any>(this.environment.restServiceUrl + 'microfrontendList', httpOptions);

    this.http.get<any>('./assets/data/microfrontendList.json').subscribe({
      next: (response) => {
        this.microfrontendList = response;
      },
      error: (err) => {
        console.log('errore durante il prelevamento dei microfrontend');
      }
    });
  }

  getMicrofrontendList(): any[] {
    return this.microfrontendList?.['mflist'];
  }

}
