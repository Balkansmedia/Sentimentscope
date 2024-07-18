import { Component, Input, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Word } from 'src/app/Models/Word';


@Component({
  selector: 'app-words-card',
  templateUrl: './words-card.component.html',
  styleUrls: ['./words-card.component.scss']
})
export class WordsCardComponent {
  @Input() word!: Word;
  @ViewChild('WordModal') wordModal!: any;
  selectedWord:Word|null=null

  constructor(
    private modalService: NgbModal,
  ) {}

  openModal(word: Word): void {
    const modalRef = this.modalService.open(this.wordModal);
    this.selectedWord=word;
    
  }


}
