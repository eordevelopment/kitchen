/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomePublicComponent } from './home-public.component';

describe('HomePublicComponent', () => {
  let component: HomePublicComponent;
  let fixture: ComponentFixture<HomePublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
