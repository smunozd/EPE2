import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabs13Page } from './tabs13.page';

describe('Tabs13Page', () => {
  let component: Tabs13Page;
  let fixture: ComponentFixture<Tabs13Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tabs13Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tabs13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
