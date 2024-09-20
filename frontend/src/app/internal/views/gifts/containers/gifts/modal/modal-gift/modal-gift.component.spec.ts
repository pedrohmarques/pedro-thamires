/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModalGiftComponent } from './modal-gift.component';

describe('ModalGiftComponent', () => {
  let component: ModalGiftComponent;
  let fixture: ComponentFixture<ModalGiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalGiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
