import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoFeedbackComponent } from './grafico-feedback.component';

describe('GraficoFeedbackComponent', () => {
  let component: GraficoFeedbackComponent;
  let fixture: ComponentFixture<GraficoFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
