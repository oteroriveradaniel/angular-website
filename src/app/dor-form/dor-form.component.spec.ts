import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DorFormComponent } from './dor-form.component';

describe('DorFormComponent', () => {
  let component: DorFormComponent;
  let fixture: ComponentFixture<DorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DorFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
