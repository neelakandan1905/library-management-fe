import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewUserDetailsComponent } from './preview-user-details.component';

describe('PreviewUserDetailsComponent', () => {
  let component: PreviewUserDetailsComponent;
  let fixture: ComponentFixture<PreviewUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreviewUserDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
