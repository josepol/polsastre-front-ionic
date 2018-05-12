import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { PostModel } from "../model/post.model";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ENV } from "@environment";
import { CategoryModel } from "../model/category.model";

@Injectable()
export class BlogDataProvider {

    private posts: BehaviorSubject<PostModel[]> = new BehaviorSubject<PostModel[]>(undefined);

    constructor(
        private http: HttpClient
    ) 
    {}

    getBlogData(id): any | PostModel {
        if (this.posts.getValue()) {
            return this.posts.getValue().filter(post => post.id === id)[0];
        }
        return this.getPosts().map(posts => posts.filter(post => post.id === id)[0]);
    }

    getPosts(): Observable<any> {
        if (this.posts.getValue()) {
            return this.posts;
        }
        return this.http.get(`${ENV.API_ENDPOINT}/blogs/all`)
        .map((posts: PostModel[]) => {
            this.posts.next(posts);
            return posts;
        });
    }

    getCategories(): Observable<any | CategoryModel[]> {
        return this.http.get(`${ENV.API_ENDPOINT}/blogs/categories/all`);
    }
}