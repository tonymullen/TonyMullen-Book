import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { HomeListComponent } from './home-list/home-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DistancePipe } from './distance.pipe';
import { FrameworkComponent } from './framework/framework.component';
import { AboutComponent } from './about/about.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HtmlLineBreaksPipe } from './html-line-breaks.pipe';
import { RatingStarsPipe } from './rating-stars.pipe';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';
import { MostRecentFirstPipe } from './most-recent-first.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { UserService } from './user.service';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    HomeListComponent,
    HomepageComponent,
    DistancePipe,
    FrameworkComponent,
    AboutComponent,
    PageHeaderComponent,
    SidebarComponent,
    HtmlLineBreaksPipe,
    RatingStarsPipe,
    LocationDetailsComponent,
    DetailsPageComponent,
    RatingStarsComponent,
    MostRecentFirstPipe,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    UserService
  ],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
