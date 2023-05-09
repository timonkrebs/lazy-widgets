import { Component, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstWidgetComponent } from 'widgets/first-widget/first-widget.component';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent {
  @ViewChild('canvas', {read: ViewContainerRef})
  private canvas: ViewContainerRef;
  
  constructor(){
    import('widgets/first-widget/first-widget.component')
      .then((component) => {
        this.canvas.clear();
        this.canvas.createComponent(component.FirstWidgetComponent);
        setTimeout(() =>{
          this.canvas.createComponent(component.FirstWidgetComponent);
        }, 10000)
      })
  }
}
