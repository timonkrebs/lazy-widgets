import { Component, QueryList, ViewChildren, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridsterComponent, GridsterItemComponent } from 'angular-gridster2';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import WidgetFactory from 'widgets/widget-factory';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [CommonModule, GridsterComponent, GridsterItemComponent],
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent {
  @ViewChildren('canvas', { read: ViewContainerRef })
  private canvas: QueryList<ViewContainerRef>;
  options: GridsterConfig;
  dashboard: Array<GridsterItem> = [];

  constructor() {
  }

  ngOnInit() {
    this.options = {
      gridType: 'fit',
      minCols: 6, // minimum amount of columns in the grid
      minRows: 10, // minimum amount of rows in the grid
      enableEmptyCellDrop: true,
      emptyCellDropCallback: this.emptyCellClick.bind(this),
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
  }

  emptyCellClick(event: DragEvent, item: GridsterItem): void {
    console.info('empty cell click', event, item);

    if (event.dataTransfer) {
      const widgetSelector = event.dataTransfer!.getData('widget')
      this.dashboard.push(item);
      setTimeout(() => {
        WidgetFactory.getWidget(widgetSelector, this.canvas.get(this.dashboard.length - 1)!)
          .then(c => {
            if(widgetSelector === 'app-first-widget'){
              c.setInput("i", this.dashboard.length)
            }
          });
      });
    }

  }
}
