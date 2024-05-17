import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, ROUTES } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { MainpageComponent } from './mainpage/mainpage.component';
import { EnvironmentService } from '../../services/environment.service';

export const mfInitializerFn = (envService: EnvironmentService) => {
  const microFrontends = envService.getMicrofrontendList();

  const routes: Routes = [
    { path: '', redirectTo: '/counterApp', pathMatch: 'full' },
    { 
      path: '', 
      component: MainpageComponent,
      children: [
        ...microFrontends.map(mf=> ({
          path: mf.baseUrl, 
          loadChildren: () => loadRemoteModule(mf).then(m => m[mf.moduleName])
      }))
      ]
    }
  ];

  return routes;
};

export const microfrontendProvider = [
  { 
    provide: ROUTES, 
    useFactory: mfInitializerFn, 
    multi: true,
    deps: [EnvironmentService]
  }
];

@NgModule({
  imports: [RouterModule.forChild([])],
  exports: [RouterModule],
  providers: [microfrontendProvider]
})
export class ContainerRoutingModule { 
}
