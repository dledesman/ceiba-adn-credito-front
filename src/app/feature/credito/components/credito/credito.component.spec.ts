/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreditoComponent } from './credito.component';

describe('CreditoComponent', () => {
  let component: CreditoComponent;
  let fixture: ComponentFixture<CreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
