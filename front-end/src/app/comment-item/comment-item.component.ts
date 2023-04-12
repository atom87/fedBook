import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../models/comment';

@Component({
  selector: 'fed-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {

  @Input() comment: Comment; 

  constructor() { }

  ngOnInit() {
    if(this.comment.user['picture'] == ''){
      this.comment.user['picture'] = 'default.jpg';
    }
  }

}
