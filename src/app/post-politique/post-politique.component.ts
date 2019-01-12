import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-politique',
  templateUrl: './post-politique.component.html',
  styleUrls: ['./post-politique.component.css']
})
export class PostPolitiqueComponent implements OnInit {

  post_politique_subscribe: Subscription;

  politiquePosts: any[];

  constructor(private postService: PostService) { }

  ngOnInit() {

    this.post_politique_subscribe = this.postService.postCategorieSubject.subscribe(
      (post_categorie: any[]) => {
        this.politiquePosts = post_categorie;
      }
    );
    
    this.postService.getPostForCategorie('politique');
  }

}
