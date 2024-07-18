import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AnalyticsComponent} from "./pages/analytics/analytics.component";
import {VocabularyComponent} from "./pages/vocabulary/vocabulary.component";
import { WordsComponent } from './pages/words/words.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'analytics',
    component: AnalyticsComponent
  },
  {
    path: 'vocabulary',
    component: VocabularyComponent
  },
  { path: 'words/:letter', component: WordsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
