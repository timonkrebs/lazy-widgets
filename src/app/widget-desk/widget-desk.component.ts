import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-desk',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widget-desk.component.html',
  styleUrls: ['./widget-desk.component.scss']
})
export class WidgetDeskComponent {

  widgets = ['app-first-widget','app-update-count-widget']

  dragStartHandler(event: DragEvent, widget: string) {
    if (event.dataTransfer) {
      event.dataTransfer.setData('widget', widget);
      event.dataTransfer.dropEffect = 'copy';
    }
  }
}
