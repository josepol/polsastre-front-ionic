import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { PostModel } from "pages/blog/model/post.model";

@Injectable()
export default class CacheProvider {

    private postToModify: BehaviorSubject<PostModel> = new BehaviorSubject<PostModel>(undefined);

    constructor() {}

    setPostToModify(newPost) {
        this.postToModify.next(newPost);
    }

    getPostToModify() {
        return this.postToModify;
    }


}