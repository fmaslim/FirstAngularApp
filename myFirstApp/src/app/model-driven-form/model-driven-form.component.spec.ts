/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModelDrivenFormComponent } from './model-driven-form.component';

describe('ModelDrivenFormComponent', () => {
  let component: ModelDrivenFormComponent;
  let fixture: ComponentFixture<ModelDrivenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelDrivenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
