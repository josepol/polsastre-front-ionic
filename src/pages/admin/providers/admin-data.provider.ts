import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ENV } from "@environment";
import * as _ from 'lodash';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { PostModel } from "../../blog/model/post.model";

@Injectable()
export class AdminDataProvider {

    private currentModifiedPost: BehaviorSubject<PostModel> = new BehaviorSubject(undefined);

    constructor(
        private http: HttpClient
    ) {}

    public addPost(post) {
        return this.http.post(`${ENV.API_ENDPOINT}/blogs/add-post`, post);
    }

    public deletePosts(posts) {
        const postIdsArray = _.map(posts.filter(post => post.checked), '_id');
        return this.http.post(`${ENV.API_ENDPOINT}/blogs/delete-post`, postIdsArray);
    }

    public modifyPost(id, post) {
        return this.http.post(`${ENV.API_ENDPOINT}/blogs/modify-post`, {id, post});
    }

    public getCurrentModifiedPost() {
        return this.currentModifiedPost;
    }

    public setCurrentModifiedPost(currentModifiedPost) {
        this.currentModifiedPost.next(currentModifiedPost);
    }

}