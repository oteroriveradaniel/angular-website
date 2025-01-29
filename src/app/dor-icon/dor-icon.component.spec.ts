import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DorIconComponent } from './dor-icon.component';

describe('DorIconComponent', () => {
  let component: DorIconComponent;
  let fixture: ComponentFixture<DorIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DorIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DorIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
