import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ENV } from "@environment";

@Injectable()
export class AdminDataProvider {

    constructor(
        private http: HttpClient
    ) {}

    public addPost(post) {
        return this.http.post(`${ENV.API_ENDPOINT}/blogs/add-post`, post);
    }

}