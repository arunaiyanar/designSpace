import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { CreateMeetingComponent } from './create-meeting/create-meeting.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    WelcomePageComponent,
    CreateMeetingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
