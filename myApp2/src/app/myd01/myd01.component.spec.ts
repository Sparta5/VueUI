import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myd01Component } from './myd01.component';

describe('Myd01Component', () => {
  let component: Myd01Component;
  let fixture: ComponentFixture<Myd01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myd01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Myd01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
