import { Component, ViewContainerRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent {
  vcr = inject(ViewContainerRef);
  
  constructor(){
    import('widgets/first-widget/first-widget.component')
      .then((component) => this.vcr.createComponent(component.FirstWidgetComponent))
  }
}
