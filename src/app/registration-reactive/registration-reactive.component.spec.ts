import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationReactiveComponent } from './registration-reactive.component';

describe('RegistrationReactiveComponent', () => {
  let component: RegistrationReactiveComponent;
  let fixture: ComponentFixture<RegistrationReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
