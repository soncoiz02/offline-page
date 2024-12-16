import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileIframeComponent } from './mobile-iframe.component';

describe('MobileIframeComponent', () => {
  let component: MobileIframeComponent;
  let fixture: ComponentFixture<MobileIframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileIframeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
