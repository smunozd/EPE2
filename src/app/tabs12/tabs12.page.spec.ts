import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabs12Page } from './tabs12.page';

describe('Tabs12Page', () => {
  let component: Tabs12Page;
  let fixture: ComponentFixture<Tabs12Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tabs12Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tabs12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
