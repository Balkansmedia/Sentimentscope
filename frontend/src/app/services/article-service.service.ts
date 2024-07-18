import { Injectable } from '@angular/core';
import { Article } from '../Models/Article';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {
  
  apiUrl = `${environment.API_URL}/article`

  constructor(private http: HttpClient) { }

  getAllArticles(){
    return this.http.get<Article[]>(this.apiUrl);
    
  }  

  getArticleById(id:number){
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }

}
