import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsCardComponent } from './words-card.component';

describe('WordsCardComponent', () => {
  let component: WordsCardComponent;
  let fixture: ComponentFixture<WordsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WordsCardComponent]
    });
    fixture = TestBed.createComponent(WordsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
