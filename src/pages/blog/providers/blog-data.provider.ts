import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { PostModel } from "../model/post.model";

@Injectable()
export class BlogDataProvider {

    constructor(
        private http: HttpClient
    ) 
    {}

    getBlogData() {
        
    }

    getPosts(): Observable<any> {
        return this.http.get('assets/mocks/blog/posts.json');
    }
}