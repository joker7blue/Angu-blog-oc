import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostService } from './services/post-service.service';
import { PostCultureComponent } from './post-culture/post-culture.component';
import { PostSportComponent } from './post-sport/post-sport.component';
import { PostPolitiqueComponent } from './post-politique/post-politique.component';
import { PostDiversComponent } from './post-divers/post-divers.component';

import { PostItechComponent } from './post-itech/post-itech.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { FfErrorComponent } from './ff-error/ff-error.component';
import { AddPostComponent } from './add-post/add-post.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'sport', component: PostSportComponent },
  { path: 'culture', component: PostCultureComponent },
  { path: 'politique', component: PostPolitiqueComponent },
  { path: 'i-tech', component: PostItechComponent },
  { path: ':categorie/:id', component: SinglePostComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: '**', component: FfErrorComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    PostCultureComponent,
    PostSportComponent,
    PostPolitiqueComponent,
    PostDiversComponent,
    PostItechComponent,
    SinglePostComponent,
    FfErrorComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
