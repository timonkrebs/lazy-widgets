import { Component, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridsterModule } from 'angular-gridster2';
import { MatCardModule } from '@angular/material/card'
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [CommonModule, GridsterModule, MatCardModule],
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent {
  @ViewChild('canvas', { read: ViewContainerRef })
  private canvas: ViewContainerRef;
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  constructor() {


    import('widgets/first-widget/first-widget.component')
      .then((component) => {
        this.canvas.createComponent(component.FirstWidgetComponent);
        setTimeout(() => {
          this.canvas.createComponent(component.FirstWidgetComponent);
        }, 10000)
      })
  }

  ngOnInit() {
    this.options = {
      gridType: 'fit',
      minCols: 1, // minimum amount of columns in the grid
      minRows: 10, // minimum amount of rows in the grid
      draggable: {
        enabled: true, // enable/disable draggable items
        ignoreContentClass: 'gridster-item-content', // default content class to ignore the drag event from
        ignoreContent: false, // if true drag will start only from elements from `dragHandleClass`
        dragHandleClass: 'drag-handler', // drag event only from this class. If `ignoreContent` is true.
        stop: undefined, // callback when dragging an item stops.  Accepts Promise return to cancel/approve drag.
        start: undefined // callback when dragging an item starts.
        // Arguments: item, gridsterItem, event
      },
      resizable: {
        enabled: true, // enable/disable resizable items
        handles: {
          s: true,
          e: true,
          n: true,
          w: true,
          se: true,
          ne: true,
          sw: true,
          nw: true
        }, // resizable edges of an item
        stop: undefined, // callback when resizing an item stops. Accepts Promise return to cancel/approve resize.
        start: undefined // callback when resizing an item starts.
        // Arguments: item, gridsterItem, event
      },
    };

    this.dashboard = [
      { cols: 2, rows: 3, y: 0, x: 0 },
      { cols: 2, rows: 5, y: 5, x: 4 }
    ];
  }
}
