import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAnalyticsComponent } from './card-analytics.component';

describe('CardAnalyticsComponent', () => {
  let component: CardAnalyticsComponent;
  let fixture: ComponentFixture<CardAnalyticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAnalyticsComponent]
    });
    fixture = TestBed.createComponent(CardAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
