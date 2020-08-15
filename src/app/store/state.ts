import { initialState } from '../consts/file.state';
import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { File } from '../interfaces/file.interface';
import { of } from 'rxjs';

export interface AppState {
  posts: Post[];
  files: File[];
}

@Injectable()
export class State {
  private initialState = {
    posts: [],
    files: initialState
  };
  private state: AppState = this.initialState;


  getPosts = () => {
    return of(this.state.posts);
  }

  getFiles = () => {
    return of(this.state.files);
  }

  updatePosts = (posts: Post[]) => {
    this.state.posts = posts;
    return this.getPosts();
  }

  updateFiles = (files: File[]) => {
    this.state.files = files;
    return this.getFiles();
  }
}

