import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmoutControlComponent } from './amout-control.component';

describe('AmoutControlComponent', () => {
  let component: AmoutControlComponent;
  let fixture: ComponentFixture<AmoutControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmoutControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmoutControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
