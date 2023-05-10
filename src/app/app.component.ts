import { Component } from '@angular/core';
import { CanvasComponent } from './canvas/canvas.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { s } from './signal-test';
import { WidgetDeskComponent } from './widget-desk/widget-desk.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CanvasComponent, WidgetDeskComponent, MatSidenavModule, MatButtonModule],
    standalone: true
})
export class AppComponent {
    s = s;

    click(): void {
        s.set(s() + 1)
    }
}
