import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { PostService } from '../post.service'
import { UserService } from '../user.service'

import { IPost, IPostData, IUser } from '../shared'

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  post: IPost
  title: string
  body: string
  userId: number

  id: number

  users: Array<IUser>

  constructor(
    private userService: UserService,
    private postService: PostService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 

    this.activatedRoute.params.forEach((param: Params) => {
      this.id = param['id']
    })

  }

  ngOnInit() {
    this.userService.getUsers()
      .then(users => {
        console.log(users)
        this.users = <Array<IUser>>users
      }, err => {
        console.log(err)
      });
    
    this.postService.getDetail(this.id)
      .then(data => {
        let post = <IPostData>data
        this.title = post.title
        this.body = post.body
        this.userId = post.userId
      }, err => {
        console.log(err)
      });
  }

  save() {
    this.post = {
      id: this.id,
      title: this.title,
      body: this.body,
      userId: this.userId
    }

    this.postService.update(this.post)
      .then((data) => {
        alert(JSON.stringify(data))
        this.router.navigateByUrl('/home');
      }, err => {
        alert(JSON.stringify(err))
      })
  }

}
