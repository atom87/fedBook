import { Comment } from './../models/comment';
import { Component, OnInit, Input } from '@angular/core';
import { FedbookService } from '../service/fedbook.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';



@Component({
  selector: 'fed-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() comments: Comment[];
  @Input() id: number;
  params = {
    "sort": 'date',
    "sortDirection": 'asc'
  }

  constructor(private service: FedbookService, private modalService: NgbModal) { }

  ngOnInit(){
    this.getComment();
  }

  getComment(){
    this.service.getComments(this.id, this.params).subscribe( res => {
      this.comments = res;
    })
  }

  openModal(){
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.comment = this.comments[0];
    modalRef.componentInstance.id = this.id;
    modalRef.result.then(result => {
      this.comments.push(result);
    });
    this.getComment();
  }
}
