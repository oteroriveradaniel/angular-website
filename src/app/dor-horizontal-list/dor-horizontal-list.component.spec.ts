import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DorHorizontalListComponent } from './dor-horizontal-list.component';

describe('DorHorizontalListComponent', () => {
  let component: DorHorizontalListComponent;
  let fixture: ComponentFixture<DorHorizontalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DorHorizontalListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DorHorizontalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
