import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { PostModel } from "../model/post.model";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ENV } from "@environment";
import { CategoryModel } from "../model/category.model";
import { CommentsModel } from "../model/comments.model";
import * as moment from "moment";

@Injectable()
export class BlogDataProvider {

    constructor(
        private http: HttpClient
    ) 
    {}

    getBlogData(id): any | PostModel {
        return this.getPosts().map(posts => posts.filter(post => post._id === id)[0]);
    }

    getPosts(): Observable<Array<PostModel>> {
        // testing jenkins 123
        return this.http.get(`${ENV.API_ENDPOINT}/blogs/all`)
        .map((blogs: Array<PostModel>) => blogs.sort((postA, postB) => moment(postA.createdAt).isBefore(postB.createdAt) ? 1 : 0));
    }

    getCategories(): Observable<any | CategoryModel[]> {
        return this.http.get(`${ENV.API_ENDPOINT}/blogs/categories/all`);
    }

    getComments(blogId): Observable<any | CommentsModel[]> {
        return this.http.get(`${ENV.API_ENDPOINT}/blogs/comments/${blogId}`);
        // return this.http.get(`assets/mocks/blog/comments.json`);
    }

    postComment(text, blogId) {
        return this.http.post(`${ENV.API_ENDPOINT}/blogs/add-comments`, {text, blogId});
    }
}