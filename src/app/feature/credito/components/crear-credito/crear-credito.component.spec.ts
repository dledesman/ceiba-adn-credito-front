/* tslint:disable:no-unused-variable */
import {  waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCreditoComponent } from './crear-credito.component';

describe('CrearCreditoComponent', () => {
  let component: CrearCreditoComponent;
  let fixture: ComponentFixture<CrearCreditoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
