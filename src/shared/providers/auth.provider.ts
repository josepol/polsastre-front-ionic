import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from "@angular/common/http";
import { NavigationProvider } from "./navigation.provider";
import { LoginPage } from "../../pages/login/login";
import { ENV } from '@environment';
import 'rxjs/add/operator/map';
import * as jwtDecode from 'jwt-decode';
import { BlogPage } from "../../pages/blog/containers/blog/blog";

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

    register(userRegister) {
        return this.http.post(`${ENV.API_ENDPOINT}/users/register`, userRegister)
        .map((response: any) => this.saveToken(response, true));
    }

    refresh(): any {
        if (!localStorage.getItem('token')) {
            return Promise.resolve(false);
        }
        return this.http.get(`${ENV.API_ENDPOINT}/users/refresh`)
        .map((response: any) => this.saveToken(response)).toPromise()
        .catch(error => this.logout());
    }

    refreshAdmin() {
        if (!localStorage.getItem('token')) {
            return Promise.resolve(false);
        }
        return this.http.get(`${ENV.API_ENDPOINT}/users/refresh`)
        .map((response: any) => {
            const decoded: any = jwtDecode(response.token);
            if (decoded.rol !== 0) {
                throw new Error();
            }
            return response;
        })
        .map((response: any) => this.saveToken(response)).toPromise();
    }

    logout() {
        localStorage.clear();
        this.isAuthenticated.next(false);
        this.navigationProvider.getNaviController().push(LoginPage, {}, {animate: false});
    }

    private saveToken(response, isFromRegister = false) {
        this.isAuthenticated.next(true);
        localStorage.setItem('token', response.token);
        if (isFromRegister) {
            this.navigationProvider.getNaviController().push(BlogPage, {}, {animate: false});
        }
        return response.token ? true : false;
    }

}