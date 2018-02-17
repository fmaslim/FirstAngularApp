/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InjectorProviderComponent } from './injector-provider.component';

describe('InjectorProviderComponent', () => {
  let component: InjectorProviderComponent;
  let fixture: ComponentFixture<InjectorProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjectorProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectorProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
