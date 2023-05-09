import { Component, ViewContainerRef, inject } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],

    standalone: true
})
export class AppComponent {
  vcr = inject(ViewContainerRef);
  
  constructor(){
    import('./first-widget/first-widget.component').then((component) => {
      this.vcr.createComponent(component.FirstWidgetComponent);
    })
  }
}
