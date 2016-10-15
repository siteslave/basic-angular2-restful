import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { PostService } from '../post.service'
import { UserService } from '../user.service'

import { IPostData, IUser } from '../shared'

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  post: IPostData
  title: string
  body: string
  userId: number

  users: Array<IUser>

  constructor(
    private userService: UserService,
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getUsers()
      .then(users => {
        console.log(users)
        this.users = <Array<IUser>>users
      }, err => {
        console.log(err)
      });
  }

  save() {
    this.post = {
      title: this.title,
      body: this.body,
      userId: this.userId
    }

    this.postService.save(this.post)
      .then((data) => {
        alert(JSON.stringify(data))
        this.router.navigateByUrl('/home');
      }, err => {
        alert(JSON.stringify(err))
      })
  }

}
