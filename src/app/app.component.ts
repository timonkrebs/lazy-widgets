import { Component } from '@angular/core';
import { CanvasComponent } from './canvas/canvas.component';
import {MatButtonModule} from '@angular/material/button';
import { s } from './signal-test';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CanvasComponent, MatButtonModule],
    standalone: true
})
export class AppComponent {
    s = s;

    click(): void{
        s.set(s() + 1)
    }
}
