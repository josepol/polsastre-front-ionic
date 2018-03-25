import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from "@angular/common/http";
import { NavigationProvider } from "./navigation.provider";
import { LoginPage } from "../../pages/login/login";
import { ENV } from '@environment';
import 'rxjs/add/operator/map'

@Injectable()
export default class AuthProvider {

    private isAuthenticated: BehaviorSubject<boolean>  = new BehaviorSubject<boolean>(false);

    constructor(
        private http: HttpClient,
        private navigationProvider: NavigationProvider
    ) {
        this.refresh();
    }

    getIsAuthenticated() {
        return this.isAuthenticated;
    }

    login(userLogin) {
        return this.http.post(`${ENV.API_ENDPOINT}/users/login`, userLogin)
        .map((response: any) => this.saveToken(response));
    }

    refresh() {
        if (!localStorage.getItem('token')) {
            return Promise.resolve(false);
        }
        return this.http.get(`${ENV.API_ENDPOINT}/users/refresh`)
        .map((response: any) => this.saveToken(response)).toPromise()
        .catch(error => Promise.resolve(false));
    }

    logout() {
        localStorage.clear();
        this.isAuthenticated.next(false);
        this.navigationProvider.getNaviController().push(LoginPage);
    }

    private saveToken(response) {
        this.isAuthenticated.next(true);
        localStorage.setItem('token', response.token);
        return response.token ? true : false;
    }

}