/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FaderComponent } from './fader.component';

describe('FaderComponent', () => {
  let component: FaderComponent;
  let fixture: ComponentFixture<FaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
