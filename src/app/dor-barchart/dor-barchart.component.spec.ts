import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DorBarchartComponent } from './dor-barchart.component';

describe('DorBarchartComponent', () => {
  let component: DorBarchartComponent;
  let fixture: ComponentFixture<DorBarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DorBarchartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DorBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
