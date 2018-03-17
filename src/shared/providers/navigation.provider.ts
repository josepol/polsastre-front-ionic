import { Injectable } from "@angular/core";
import { NavController } from "ionic-angular";


@Injectable()
export class NavigationProvider {

    private navController: NavController;

    constructor() {
    }

    setNavController(navController) {
        this.navController = navController;
    }

    getNaviController() {
        return this.navController;
    }

}