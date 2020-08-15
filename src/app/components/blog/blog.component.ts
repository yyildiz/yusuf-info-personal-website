import { State } from './../../store/state';
import { Observable } from 'rxjs';
import { Post } from './../../interfaces/post.interface';
import { WpApiService } from './../../services/wp-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts$: Observable<Post[]>;
  constructor(private wpApiService: WpApiService, private state: State) {
     this.posts$ = this.wpApiService.getPosts();
  }
  ngOnInit(): void {
  }
}
