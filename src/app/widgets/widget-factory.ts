import { ComponentRef, ViewContainerRef } from '@angular/core';

export default class WidgetFactory {
    private static readonly widgetFactories = new Map([
        ['app-first-widget', () => import('widgets/first-widget/first-widget.component').then(component => component.FirstWidgetComponent)]
    ]);

    public static getWidget(selector: string, canvas: ViewContainerRef): Promise<ComponentRef<unknown>> {
        return this.widgetFactories.get(selector)?.().then((c) => canvas.createComponent(c))!;
    }
}