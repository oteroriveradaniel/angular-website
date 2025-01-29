import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DorTimelineComponent } from './dor-timeline.component';

describe('DorTimelineComponent', () => {
  let component: DorTimelineComponent;
  let fixture: ComponentFixture<DorTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DorTimelineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DorTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
