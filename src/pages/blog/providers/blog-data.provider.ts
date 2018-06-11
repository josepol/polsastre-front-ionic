import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { PostModel } from "../model/post.model";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ENV } from "@environment";
import { CategoryModel } from "../model/category.model";

@Injectable()
export class BlogDataProvider {

    constructor(
        private http: HttpClient
    ) 
    {}

    getBlogData(id): any | PostModel {
        return this.getPosts().map(posts => posts.filter(post => post._id === id)[0]);
    }

    getPosts(): Observable<any> {
        return this.http.get(`${ENV.API_ENDPOINT}/blogs/all`);
    }

    getCategories(): Observable<any | CategoryModel[]> {
        return this.http.get(`${ENV.API_ENDPOINT}/blogs/categories/all`);
    }
}