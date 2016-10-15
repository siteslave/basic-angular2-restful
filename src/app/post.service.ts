import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { IPost, IPostData } from './shared'

@Injectable()
export class PostService {

  constructor(private http: Http) { }

  list(page: number) {
    let url = `http://jsonplaceholder.typicode.com/posts?_page=${page}`

    return new Promise((resolve, reject) => {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
    
      this.http.get(url, options)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err)
        });
    });

  }  

  save(post: IPostData) {
    let url = `http://jsonplaceholder.typicode.com/posts`

    return new Promise((resolve, reject) => {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
    
      this.http.post(url, post, options)
        .map(res => res.json())
        .subscribe((data) => {
          resolve(data);
        }, err => {
          reject(err)
        });
    });

  }  

  update(post: IPost) {
    let url = `http://jsonplaceholder.typicode.com/posts/${post.id}`

    return new Promise((resolve, reject) => {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = { title: post.title, body: post.body, userId: post.userId };

      this.http.put(url, body, options)
        .map(res => res.json())
        .subscribe((data) => {
          resolve(data);
        }, err => {
          reject(err)
        });
    });

  }  

  getDetail(id: number) {
    let url = `http://jsonplaceholder.typicode.com/posts/${id}`

    return new Promise((resolve, reject) => {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
    
      this.http.get(url, options)
        .map(res => res.json())
        .subscribe((data) => {
          resolve(data);
        }, err => {
          reject(err)
        });
    });

  }  

  remove(id: number) {
    let url = `http://jsonplaceholder.typicode.com/posts/${id}`

    return new Promise((resolve, reject) => {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
    
      this.http.delete(url, options)
        .map(res => res.json())
        .subscribe(() => {
          resolve();
        }, err => {
          reject(err)
        });
    });

  }  
}
