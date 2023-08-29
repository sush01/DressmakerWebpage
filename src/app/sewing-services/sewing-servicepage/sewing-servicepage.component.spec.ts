import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SewingServicepageComponent } from './sewing-servicepage.component';

describe('SewingServicepageComponent', () => {
  let component: SewingServicepageComponent;
  let fixture: ComponentFixture<SewingServicepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SewingServicepageComponent]
    });
    fixture = TestBed.createComponent(SewingServicepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
