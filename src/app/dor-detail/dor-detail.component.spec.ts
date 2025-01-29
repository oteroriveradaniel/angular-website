import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DorDetailComponent } from './dor-detail.component';

describe('DorDetailComponent', () => {
  let component: DorDetailComponent;
  let fixture: ComponentFixture<DorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DorDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
