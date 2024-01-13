import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyzmoduleComponent } from './xyzmodule.component';

describe('XyzmoduleComponent', () => {
  let component: XyzmoduleComponent;
  let fixture: ComponentFixture<XyzmoduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XyzmoduleComponent]
    });
    fixture = TestBed.createComponent(XyzmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
