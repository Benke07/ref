import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListingComponent } from './listing/listing.component';
import { LoginComponent } from './login/login.component';
import {GuardianGuard} from './guardian.guard';

const routes: Routes = [
  { path: 'form-component', component: FormComponent, canActivate : [GuardianGuard] },
  { path: 'listing-component', component: ListingComponent, canActivate : [GuardianGuard] },
  { path: 'login-component', component: LoginComponent },
  { path: 'form-component/:id', component: FormComponent, canActivate : [GuardianGuard] },
  { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
