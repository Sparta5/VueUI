import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc03Component } from './myc03.component';

describe('Myc03Component', () => {
  let component: Myc03Component;
  let fixture: ComponentFixture<Myc03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Myc03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
