import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class WpApiService {

  constructor(private http: HttpClient) {
  }

  getPosts() {
    return this.http.get<Post[]>('http://yusuf.info/api/wp-json/wp/v2/posts');
  }
}
