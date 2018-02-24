import { HomePage } from "../pages/home/home";
import { PortfolioPage } from "../pages/portfolio/portfolio";

export const routes = [
    { component: HomePage, name: 'Home', segment: 'home' },
    { component: PortfolioPage, name: 'Portfolio', segment: 'portfolio' }
  ]