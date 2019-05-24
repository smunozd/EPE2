import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabs9Page } from './tabs9.page';

describe('Tabs9Page', () => {
  let component: Tabs9Page;
  let fixture: ComponentFixture<Tabs9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tabs9Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tabs9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
