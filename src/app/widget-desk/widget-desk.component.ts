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
  widgets = ['widgets/first-widget/first-widget.component']
}
