import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstWidgetComponent } from './first-widget.component';

describe('FirstWidgetComponent', () => {
  let component: FirstWidgetComponent;
  let fixture: ComponentFixture<FirstWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FirstWidgetComponent]
    });
    fixture = TestBed.createComponent(FirstWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
