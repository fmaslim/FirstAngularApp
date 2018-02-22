/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavHomeRouterlinkComponent } from './nav-home-routerlink.component';

describe('NavHomeRouterlinkComponent', () => {
  let component: NavHomeRouterlinkComponent;
  let fixture: ComponentFixture<NavHomeRouterlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavHomeRouterlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHomeRouterlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
