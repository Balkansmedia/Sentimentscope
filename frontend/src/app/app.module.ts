import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { VocabularyComponent } from './pages/vocabulary/vocabulary.component';
import {NgSelectModule} from "@ng-select/ng-select";
import { CardComponent } from './components/card/card.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { VocabularyCardComponent } from './components/vocabulary-card/vocabulary-card.component';
import { WordsComponent } from './pages/words/words.component';
import { WordsCardComponent } from './components/words-card/words-card.component';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { CardAnalyticsComponent } from './components/card-analytics/card-analytics.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnalyticsComponent,
    VocabularyComponent,
    CardComponent,
    CommentCardComponent,
    VocabularyCardComponent,
    WordsComponent,
    WordsCardComponent,
    CardAnalyticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule, 
    BrowserAnimationsModule,
    NgxSpinnerModule,
    
    ToastrModule.forRoot(),
    FormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
