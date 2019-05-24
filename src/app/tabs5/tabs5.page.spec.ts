import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabs5Page } from './tabs5.page';

describe('Tabs5Page', () => {
  let component: Tabs5Page;
  let fixture: ComponentFixture<Tabs5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tabs5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tabs5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
