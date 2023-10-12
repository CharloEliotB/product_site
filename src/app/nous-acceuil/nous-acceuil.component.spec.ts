import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NousAcceuilComponent } from './nous-acceuil.component';

describe('NousAcceuilComponent', () => {
  let component: NousAcceuilComponent;
  let fixture: ComponentFixture<NousAcceuilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NousAcceuilComponent]
    });
    fixture = TestBed.createComponent(NousAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
