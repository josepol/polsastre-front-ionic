import { HomePage } from "../pages/home/home";
import { PortfolioPage } from "../pages/portfolio/portfolio";
import { ContactPage } from "../pages/contact/contact";
import { BlogPage } from "../pages/blog/containers/blog/blog";
import { BlogDetailPage } from "../pages/blog/containers/blog-detail/blog-detail";

export const routes = [
    { component: HomePage, name: 'Home', segment: 'home' },
    { component: PortfolioPage, name: 'Portfolio', segment: 'portfolio' },
    { component: ContactPage, name: 'Contact', segment: 'contacto' },
    { component: BlogPage, name: 'Blog', segment: 'blog' },
    { component: BlogDetailPage, name: 'BlogDetail', segment: 'blog/:id' },
  ]