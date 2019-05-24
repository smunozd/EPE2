import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabs14Page } from './tabs14.page';

describe('Tabs14Page', () => {
  let component: Tabs14Page;
  let fixture: ComponentFixture<Tabs14Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tabs14Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tabs14Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
