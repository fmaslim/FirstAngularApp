/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RxObservableComponent } from './rx-observable.component';

describe('RxObservableComponent', () => {
  let component: RxObservableComponent;
  let fixture: ComponentFixture<RxObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
