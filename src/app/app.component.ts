import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { s } from './signal-test';
import { WidgetDeskComponent } from './widget-desk/widget-desk.component';
import { CanvasComponent } from './canvas/canvas.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        CanvasComponent,
        WidgetDeskComponent,
        MatSidenavModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule
    ],
    standalone: true
})
export class AppComponent {
    s = s;

    click(): void {
        s.set(s() + 1)
    }
}
