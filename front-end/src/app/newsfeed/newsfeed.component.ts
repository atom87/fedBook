import { Component, OnInit } from '@angular/core';
import { FedbookService } from '../service/fedbook.service';
import { PostList } from '../models/postList';

@Component({
  selector: 'fed-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {

  postlist: PostList;
  params = {
    "page": 1,
    "pageSize": 3,
    "sort": 'date',
    "sortDirection": 'desc'
  }

  constructor(private service: FedbookService) { }


  ngOnInit() {
    this.updatePosts();
  }

  updatePosts(){
    this.service.getPosts(this.params).subscribe(data => this.postlist = data);
  }

  loadMore(){
    this.params.pageSize =  this.params.pageSize + 3;
    this.updatePosts();
  }

}
