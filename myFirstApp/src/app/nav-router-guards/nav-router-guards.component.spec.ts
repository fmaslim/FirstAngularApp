/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavRouterGuardsComponent } from './nav-router-guards.component';

describe('NavRouterGuardsComponent', () => {
  let component: NavRouterGuardsComponent;
  let fixture: ComponentFixture<NavRouterGuardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavRouterGuardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavRouterGuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
