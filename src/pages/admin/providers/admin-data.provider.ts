import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ENV } from "@environment";
import * as _ from 'lodash';

@Injectable()
export class AdminDataProvider {

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

}