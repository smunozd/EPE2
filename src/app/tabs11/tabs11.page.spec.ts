import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabs11Page } from './tabs11.page';

describe('Tabs11Page', () => {
  let component: Tabs11Page;
  let fixture: ComponentFixture<Tabs11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tabs11Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tabs11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
