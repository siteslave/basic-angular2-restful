import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' 
import { PostService } from '../post.service'
import { IPost } from '../shared'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Array<IPost>
  totalPages: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.getPost(1)
  }

  getPost(page: number) {
    this.postService.list(page)
      .then(rows => {
        this.posts = <Array<IPost>>rows
      }, err => {
        console.log(err)
      });
  } 

  edit(id: number) {
    this.router.navigate(['/edit', id])
  }

  remove(id: number) {
    if (confirm('Are you sure?')) {
      this.postService.remove(id)
      .then(data => {
        alert(`Post id: ${id} removed!`)
        this.getPost(1)
      }, err => {
        console.log(err)
      });
    }
  }

}
