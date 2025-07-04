import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminAddComponent } from './admin/admin-add/admin-add.component';
import { UserComponent } from './user/user/user.component';
import { LoginComponent } from './login/login.component';
import { RoleGuard } from './gaurd/role.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [RoleGuard], data: { role: 'admin' } },
  { path: 'add-book', component: AdminAddComponent, canActivate: [RoleGuard], data: { role: 'admin' } },
  { path: 'edit-book/:isbn', component: AdminAddComponent, canActivate: [RoleGuard], data: { role: 'admin' } },
  { path: 'user', component: UserComponent, canActivate: [RoleGuard], data: { role: 'user' } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
