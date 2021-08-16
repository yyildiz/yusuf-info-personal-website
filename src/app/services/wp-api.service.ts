import { State } from './../store/state';
import { Observable } from 'rxjs';
import { shareReplay, mergeMap } from 'rxjs/operators';
import { postsUrl, jwtUrl } from './../consts/urls.const';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class WpApiService {
  private posts$: Observable<Post[]>;
  constructor(private http: HttpClient, private state: State) {}

  auth(username: string, password: string) {
    const params = new HttpParams({
      fromObject: {
        username,
        password,
      },
    });
    return this.http.post(jwtUrl, { params });
  }

  getPosts() {
    if (!this.posts$) {
      this.posts$ = this.call().pipe(
        shareReplay(1),
        mergeMap((posts) => this.state.updatePosts(posts))
      );
    }
    return this.posts$;
  }

  call() {
    return this.http.get<Post[]>(postsUrl);
  }
}
