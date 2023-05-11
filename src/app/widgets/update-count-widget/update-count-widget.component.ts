import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { s } from 'src/app/signal-test';

@Component({
  selector: 'app-update-count-widget',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './update-count-widget.component.html',
  styleUrls: ['./update-count-widget.component.scss']
})
export class UpdateCountWidgetComponent {
  s = s;

  click() {
    s.set(s() + 1)
  }
}
