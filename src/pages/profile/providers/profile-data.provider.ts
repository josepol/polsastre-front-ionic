import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { ProfileUserModel } from "../models/profile-user.models";
import { ENV } from "@environment";

@Injectable()
export class ProfileDataProvider {

    constructor(
        private http: HttpClient
    ) 
    {}

    getProfileData(): Observable<ProfileUserModel | any> {
        return this.http.get(`${ENV.API_ENDPOINT}/users/profile`);
    }

    updateProfileData(): Observable<ProfileUserModel | any> {
        return this.http.get('assets/mocks/profile/password.json');
    }

    verifyCurrrentPassword(currentPassword): Observable<any> {
        // return this.http.post('assets/mocks/profile/password.json', {currentPassword});
        return this.http.get('assets/mocks/profile/password.json');
    }

    changePassword(newPassword): Observable<any> {
        // return this.http.post('', {newPassword});
        return this.http.get('assets/mocks/profile/password.json');
    }

    cancelAccount(): Observable<any> {
        return this.http.get(`${ENV.API_ENDPOINT}/users/cancel-account`);
    }
}