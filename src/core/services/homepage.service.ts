import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from '../models/news-vm';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private http: HttpClient) { }

  getNewsList(){
    return this.http.get(`https://api.npoint.io/d275425a434e02acf2f7`);
  }
  getNewsItem(id: number){
    return this.http.get(`https://api.npoint.io/d275425a434e02acf2f7/News/` + id);
  }
  getCategories(){
    return this.http.get(`https://api.npoint.io/91298d970c27e9a06518`)
  }

}
