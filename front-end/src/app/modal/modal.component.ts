import { Component, OnInit } from '@angular/core';
import { Comment } from '../models/comment';
import { FedbookService } from '../service/fedbook.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'fed-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  id: number;
  newComment: Comment;
  comment: Comment;

  constructor(private service: FedbookService, public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.newComment =  new Comment();
    this.newComment.posts = this.comment.posts;
    this.newComment.user['name'] = 'Dragica Krivokuca';
    this.newComment.user['picture'] = 'esmeralda.jpg';
    this.newComment.date = (new Date).toISOString();
  }

  addComment(){
    this.service.newComment(this.id, this.newComment).subscribe(data =>{
      this.newComment = data;
    });
    this.activeModal.close(this.newComment);
  }

}
