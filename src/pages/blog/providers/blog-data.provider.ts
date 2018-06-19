import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { PostModel } from "../model/post.model";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ENV } from "@environment";
import { CategoryModel } from "../model/category.model";
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
        return this.http.get(`${ENV.API_ENDPOINT}/blogs/all`)
        .map((blogs: Array<PostModel>) => blogs.sort((postA, postB) => moment(postA.createdAt).isBefore(postB.createdAt) ? 1 : 0));
    }

    getCategories(): Observable<any | CategoryModel[]> {
        return this.http.get(`${ENV.API_ENDPOINT}/blogs/categories/all`);
    }
}