import { ComponentRef, Type, ViewContainerRef } from '@angular/core';

export default class WidgetFactory {
    private static readonly widgetFactories: Map<string, () => Promise<Type<unknown>>> = new Map([
        ['app-first-widget', () => import('widgets/first-widget/first-widget.component').then(component => component.FirstWidgetComponent)],
        ['app-update-count-widget', () => import('widgets/update-count-widget/update-count-widget.component').then(component => component.UpdateCountWidgetComponent)]
    ]);

    public static getWidget(selector: string, canvas: ViewContainerRef): Promise<ComponentRef<unknown>> {
        return this.widgetFactories.get(selector)?.().then((c) => canvas.createComponent(c))!;
    }
}