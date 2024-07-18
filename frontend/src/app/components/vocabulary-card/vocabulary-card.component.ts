import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vocabulary-card',
  templateUrl: './vocabulary-card.component.html',
  styleUrls: ['./vocabulary-card.component.scss']
})
export class VocabularyCardComponent {
  @Input() letter: string | undefined;

  constructor(private router: Router) {}

  navigateToLetter(): void {
    this.router.navigate(['/words', this.letter]);
  }
}
