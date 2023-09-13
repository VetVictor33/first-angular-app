import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDomManipulationComponent } from './help-dom-manipulation.component';

describe('HelpDomManipulationComponent', () => {
  let component: HelpDomManipulationComponent;
  let fixture: ComponentFixture<HelpDomManipulationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpDomManipulationComponent]
    });
    fixture = TestBed.createComponent(HelpDomManipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
