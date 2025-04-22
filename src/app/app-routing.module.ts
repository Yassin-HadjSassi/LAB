import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberComponent } from './member/member.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventComponent } from './event/event.component';
import { ArticleComponent } from './article/article.component';
import { ToolComponent } from './tool/tool.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'login'
  },
  {
    path:'login',
    pathMatch:'full',
    component: LoginComponent
  },
  {
    path:'create',
    pathMatch:'full',
    component:MemberFormComponent
  },
  {
    path:'members',
    pathMatch:'full',
    component: MemberComponent
  },
  {
    path:':id/edit',
    pathMatch:'full',
    component: MemberFormComponent
  },
  {
    path:'dashboard',
    pathMatch:'full',
    component: DashboardComponent
  },
  {
    path:'events',
    pathMatch:'full',
    component: EventComponent
  },
  {
    path:'articles',
    pathMatch:'full',
    component: ArticleComponent
  },
  {
    path:'tools',
    pathMatch:'full',
    component: ToolComponent
  },
  {
    path:'**',
    component: MemberComponent
  }
];
// faire la correspondance entre path et composant
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
