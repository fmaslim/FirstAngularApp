/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavHomeParamsComponent } from './nav-home-params.component';

describe('NavHomeParamsComponent', () => {
  let component: NavHomeParamsComponent;
  let fixture: ComponentFixture<NavHomeParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavHomeParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHomeParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
