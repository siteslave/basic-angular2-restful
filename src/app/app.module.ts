import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { UserService } from './user.service'
import { PostService } from './post.service'

import { routing } from './app.routing';
import { NewPostComponent } from './new-post/new-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { CapitalizePipe } from './capitalize.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewPostComponent,
    EditPostComponent,
    CapitalizePipe
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
