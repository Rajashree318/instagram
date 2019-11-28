import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailserviceComponent } from './emailservice.component';

describe('EmailserviceComponent', () => {
  let component: EmailserviceComponent;
  let fixture: ComponentFixture<EmailserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
