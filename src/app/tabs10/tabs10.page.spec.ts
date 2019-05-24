import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabs10Page } from './tabs10.page';

describe('Tabs10Page', () => {
  let component: Tabs10Page;
  let fixture: ComponentFixture<Tabs10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tabs10Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tabs10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
