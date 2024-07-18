import {Component, Input} from '@angular/core';
import { Comment } from 'src/app/Models/Comment';
import { Tooltip } from 'bootstrap';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent {

  @Input() comment!: Comment;
  isExpanded: boolean = false;
  ngOnInit() {
  }
  formatDate(date: string): string {
    let dateNiz = date.split('-');
    return dateNiz[0] + '.' + dateNiz[1] + '.' + dateNiz[2] ;
}

changeLabel() {
  this.comment.label = this.comment.label === 'good' ? 'malicious' : 'good';
}


  constructor() { }
  toggleReadMore(): void {
    this.isExpanded = !this.isExpanded;
  }


}
