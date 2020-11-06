import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myd03Component } from './myd03.component';

describe('Myd03Component', () => {
  let component: Myd03Component;
  let fixture: ComponentFixture<Myd03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myd03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Myd03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
