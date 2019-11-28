import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddimagesComponent } from './addimages.component';

describe('AddimagesComponent', () => {
  let component: AddimagesComponent;
  let fixture: ComponentFixture<AddimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddimagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
