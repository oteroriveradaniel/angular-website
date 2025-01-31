import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DorTableComponent } from './dor-table.component';

describe('DorTableComponent', () => {
  let component: DorTableComponent;
  let fixture: ComponentFixture<DorTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DorTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
