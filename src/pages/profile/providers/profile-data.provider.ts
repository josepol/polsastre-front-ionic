import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProfileDataProvider {

    constructor(
        private http: HttpClient
    ) 
    {}

    getProfileData() {
        
    }

    verifyCurrrentPassword(currentPassword): Observable<any> {
        // return this.http.post('assets/mocks/profile/password.json', {currentPassword});
        return this.http.get('assets/mocks/profile/password.json');
    }

    changePassword(newPassword): Observable<any> {
        // return this.http.post('', {newPassword});
        return this.http.get('assets/mocks/profile/password.json');
    }
}