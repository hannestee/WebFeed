/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SodexoComponent } from './sodexo.component';

describe('SodexoComponent', () => {
  let component: SodexoComponent;
  let fixture: ComponentFixture<SodexoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SodexoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SodexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
