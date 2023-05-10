import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { s } from 'src/app/signal-test';

@Component({
  selector: 'app-first-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-widget.component.html',
  styleUrls: ['./first-widget.component.scss']
})
export class FirstWidgetComponent {
  s = s;
}
