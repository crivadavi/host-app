import { Injectable, Injector, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  webSocketUrl: string = '';
  restServiceUrl: string = '';
  microfrontendList = {
    "mflist": []
  };

  constructor(private http: HttpClient) { }

  loadEnvironment() {
    this.setMicrofrontendList();
  }

  setMicrofrontendList() {
    // return this.http.post<any>(this.environment.restServiceUrl + 'microfrontendList', httpOptions);

    this.http.get<any>('/assets/data/microfrontendList.json').subscribe({
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
