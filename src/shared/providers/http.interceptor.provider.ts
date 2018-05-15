import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { ENV } from "@environment";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { NavigationProvider } from "./navigation.provider";
import { LoginPage } from "../../pages/login/login";

@Injectable()
export default class HttpInterceptorProvider implements HttpInterceptor {

    constructor(
        private navigationProvider: NavigationProvider
    ) {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

        const token = localStorage.getItem('token');
        const options: any = {};

        if (!req.url.includes('login') && req.url.startsWith(ENV.API_ENDPOINT)) {
            options.headers = req.headers
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`);
        }

        return next.handle(req.clone(options)).catch((error: any, caught: any) => {
            switch (error.status) {
                case 401:
                this.navigationProvider.getNaviController().push(LoginPage);
                return Observable.throw('');
                default:
                break;
            }
        });
    }
}