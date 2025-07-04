import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminAddComponent } from './admin/admin-add/admin-add.component';
import { UserComponent } from './user/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },  // 👈 Default redirect to /admin
  // { path: '', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'add-book', component: AdminAddComponent }, //for adding new book
  { path: 'edit-book/:isbn', component: AdminAddComponent },  // for book editing
  { path: 'user', component: UserComponent },  // for book editing
  // { path: 'user', component: UserDashboardComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'user' } },
  // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
