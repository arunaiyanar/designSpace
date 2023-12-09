import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { CreateMeetingComponent } from './create-meeting/create-meeting.component';

const routes: Routes = [{path: 'welcome-page', component: WelcomePageComponent}, 
                        {path: 'create-user', component: CreateUserComponent},
                        { path: '', redirectTo: '/welcome-page', pathMatch: 'full' },
                        { path: 'create-meeting', component: CreateMeetingComponent},
                        { path: '', redirectTo: '/welcome-page', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
