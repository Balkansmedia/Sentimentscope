import { Component } from '@angular/core';
import { VocabularyCardComponent } from 'src/app/components/vocabulary-card/vocabulary-card.component';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.scss']
})
export class VocabularyComponent {
  letters: string[] = [
    'A', 'B', 'C', 'Č', 'Ć', 'D', 'Dž', 'Đ', 'E', 'F', 
    'G', 'H', 'I', 'J', 'K', 'L', 'Lj', 'M', 'N', 'Nj', 
    'O', 'P', 'R', 'S', 'Š', 'T', 'U', 'V', 'Z', 'Ž'
  ];
}
