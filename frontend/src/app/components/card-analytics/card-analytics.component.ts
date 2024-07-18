import { Component, Input } from '@angular/core';
import { AnalyticCard } from 'src/app/Models/AnalyticCard';
@Component({
  selector: 'app-card-analytics',
  templateUrl: './card-analytics.component.html',
  styleUrls: ['./card-analytics.component.scss']
})
export class CardAnalyticsComponent {
 @Input() card!: AnalyticCard;
  constructor() { }
  
  
}
