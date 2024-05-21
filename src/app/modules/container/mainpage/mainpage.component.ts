import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from "@angular/router";
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent{

  components: any;

  @ViewChild('placeHolder', { read: ViewContainerRef, static: true }) viewContainer: ViewContainerRef;

  constructor(private router: Router) { }

  ngOnInit() {
    
    this.components = 
    [{
			"remoteEntry": "http://localhost:4201/remoteEntry.js", 
			"remoteName": "remoteApp", 
			"exposedModule": "./CounterComponent",
			"componentName": "CounterComponent"
		},
		{
			"remoteEntry": "http://localhost:4201/remoteEntry.js", 
			"remoteName": "remoteApp", 
			"exposedModule": "./OrdersComponent",
			"componentName": "OrdersComponent"
		}];
  }
  
  async showPlugin(index: number) {
    this.viewContainer.clear();

    const Component = await loadRemoteModule(this.components[index]).then(m => m[this.components[index].componentName]);

    this.viewContainer.createComponent(Component);
  }




}
