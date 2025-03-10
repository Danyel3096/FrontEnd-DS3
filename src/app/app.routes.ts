import { Routes } from '@angular/router';
import { NormalGuard } from './services/normal.guard';
import { AdminGuard } from './services/admin.guard';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import ProductsListComponent from './pages/products/features/product-list/product-list.component';
import CartListComponent from './pages/products/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'products', component: ProductsListComponent, pathMatch: 'full' },
  { path: 'cart', component: CartListComponent, pathMatch: 'full' },
  { path: 'admin', component: DashboardComponent, pathMatch: 'full', canActivate: [AdminGuard] },
  { path: 'user-dashboard', component: UserDashboardComponent, pathMatch: 'full', canActivate: [NormalGuard] }
];

