import { ComponentFixture, TestBed } from '@angular/core/testing';

import { detailsComponent } from './details.component';

describe('detailsComponent', () => {
  let component: detailsComponent;
  let fixture: ComponentFixture<detailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ detailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
