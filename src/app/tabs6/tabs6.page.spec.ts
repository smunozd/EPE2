import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabs6Page } from './tabs6.page';

describe('Tabs6Page', () => {
  let component: Tabs6Page;
  let fixture: ComponentFixture<Tabs6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tabs6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tabs6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
