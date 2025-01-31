import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DorGalleryComponent } from './dor-gallery.component';

describe('DorGalleryComponent', () => {
  let component: DorGalleryComponent;
  let fixture: ComponentFixture<DorGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DorGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DorGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
