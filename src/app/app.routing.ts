import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { NewPostComponent } from './new-post/new-post.component'
import { EditPostComponent } from './edit-post/edit-post.component'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'new', component: NewPostComponent },
  { path: 'edit/:id', component: EditPostComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);