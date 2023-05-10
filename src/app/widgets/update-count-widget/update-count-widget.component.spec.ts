import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCountWidgetComponent } from './update-count-widget.component';

describe('UpdateCountWidgetComponent', () => {
  let component: UpdateCountWidgetComponent;
  let fixture: ComponentFixture<UpdateCountWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UpdateCountWidgetComponent]
    });
    fixture = TestBed.createComponent(UpdateCountWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
