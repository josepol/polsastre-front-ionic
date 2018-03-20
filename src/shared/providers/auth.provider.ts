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
    private token: string;

    constructor(
        private http: HttpClient,
        private navigationProvider: NavigationProvider
    ) {}

    getIsAuthenticated() {
        return this.isAuthenticated;
    }

    setIsAuthenticated(loginStatus) {
        this.isAuthenticated.next(loginStatus);
    }

    getToken() {
        return this.token;
    }

    login(userLogin) {
        return this.http.post(`${ENV.API_ENDPOINT}/users/login`, userLogin)
        .map((response: any) => {
            this.token = response.token;
            this.isAuthenticated.next(true);
            localStorage.setItem('token', this.token);
        });
    }

    logout() {
        localStorage.clear();
        this.navigationProvider.getNaviController().push(LoginPage);
    }


}