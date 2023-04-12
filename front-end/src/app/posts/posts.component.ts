import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post';


@Component({
  selector: 'fed-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
@Input() post: Post;



  constructor() { }

  ngOnInit() {
    if(this.post.user['picture'] == ""){
      this.post.user['picture'] = 'default.jpg';
    }
  }

}
