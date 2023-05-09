import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDeskComponent } from './widget-desk.component';

describe('WidgetDeskComponent', () => {
  let component: WidgetDeskComponent;
  let fixture: ComponentFixture<WidgetDeskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WidgetDeskComponent]
    });
    fixture = TestBed.createComponent(WidgetDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
