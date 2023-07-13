/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BombComponent } from './bomb.component';

describe('BombComponent', () => {
  let component: BombComponent;
  let fixture: ComponentFixture<BombComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BombComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BombComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
