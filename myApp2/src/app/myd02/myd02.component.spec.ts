import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myd02Component } from './myd02.component';

describe('Myd02Component', () => {
  let component: Myd02Component;
  let fixture: ComponentFixture<Myd02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myd02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Myd02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
