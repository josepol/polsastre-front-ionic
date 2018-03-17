import { HomePage } from "../pages/home/home";
import { PortfolioPage } from "../pages/portfolio/portfolio";
import { ContactPage } from "../pages/contact/contact";
import { BlogPage } from "../pages/blog/containers/blog/blog";
import { BlogDetailPage } from "../pages/blog/containers/blog-detail/blog-detail";
import { LoginPage } from "../pages/login/login";

export const routes = [
    { component: HomePage, name: 'Home', segment: 'home' },
    { component: BlogPage, name: 'Blog', segment: 'blog' },
    { component: BlogDetailPage, name: 'BlogDetail', segment: 'blog/:id' },
    { component: ContactPage, name: 'Contact', segment: 'contacto' },
    { component: LoginPage, name: 'Login', segment: 'login' }
  ]