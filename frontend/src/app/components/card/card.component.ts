import {Component, Input} from '@angular/core';
import { Article } from 'src/app/Models/Article';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() Article!: Article;


}
