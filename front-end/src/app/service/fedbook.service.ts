import { PostList } from './../models/postList';
import { Injectable } from '@angular/core';
import{ HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Comment } from '../models/comment';



const url = "http://localhost:3000/api/posts";

@Injectable({
  providedIn: 'root'
})
export class FedbookService {

  constructor(private http: HttpClient) { }

  getPosts(params?: any) : Observable <PostList>{
    let queryParams = {};
    if(params) { 
      queryParams = {
        params: new HttpParams()
        .set("page", params.page && params.page.toString() || '')
        .set("pageSize", params.pageSize && params.pageSize.toString() || '')
        .set("sort", params.sort && params.sort.toString() || '')
        .set("sortDirection", params.sortDirection && params.sortDirection.toString() || '')
      }
    }

    return this.http.get(url, queryParams).pipe(map( response => {
      return new PostList(response);
    }))
  }

  getComments(id:number, params?: any): Observable<Comment[]>{

    let queryParams = {};
    if(params) { 
      queryParams = {
        params: new HttpParams()
        .set("sort", params.sort && params.sort.toString() || '')
        .set("sortDirection", params.sortDirection && params.sortDirection.toString() || '')
      }
    }

    return this.http.get<Array<Comment>>(url + "/" + id + "/comments", queryParams).pipe(map(response =>{
      let retVal = new Array<Comment>();
      response.forEach(element => retVal.push(new Comment(element)));
      return retVal;
    }))
  }

  newComment(id: number, comment: Comment) : Observable<Comment>{
    return this.http.post<Comment>(url + "/" + id + "/comments", comment).pipe(map(data => {
      return new Comment(data);
    }))
  }
}
