import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = `${environment.API_URL}/category`

  constructor(private http: HttpClient) { }

  getAllCategory(){
    return this.http.get<string[]>(this.apiUrl);
    
  }  
}
