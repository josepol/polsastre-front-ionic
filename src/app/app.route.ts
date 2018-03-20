import { HomePage } from "../pages/home/home";
import { ContactPage } from "../pages/contact/contact";
import { BlogPage } from "../pages/blog/containers/blog/blog";
import { BlogDetailPage } from "../pages/blog/containers/blog-detail/blog-detail";
import { LoginPage } from "../pages/login/login";
import { AdminHomePage } from "../pages/admin/containers/home/admin-home";
import { ProfilePage } from "../pages/profile/profile";

export const routes = [
    { component: HomePage, name: 'Home', segment: 'home' },
    { component: BlogPage, name: 'Blog', segment: 'blog' },
    { component: BlogDetailPage, name: 'BlogDetail', segment: 'blog/:id' },
    { component: ContactPage, name: 'Contact', segment: 'contacto' },
    { component: LoginPage, name: 'Login', segment: 'login' },
    { component: AdminHomePage, name: 'AdminHome', segment: 'admin/home' },
    { component: ProfilePage, name: 'Profile', segment: 'profile' }
  ]