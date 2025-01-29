import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DorSectionComponent } from './dor-section.component';

describe('DorSectionComponent', () => {
  let component: DorSectionComponent;
  let fixture: ComponentFixture<DorSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DorSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DorSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
