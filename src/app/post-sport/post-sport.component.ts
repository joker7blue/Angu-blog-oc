import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-sport',
  templateUrl: './post-sport.component.html',
  styleUrls: ['./post-sport.component.css']
})
export class PostSportComponent implements OnInit {

  post_sport_subscribe: Subscription;

  Sportposts : any[];

  constructor(private postService: PostService) { }

  ngOnInit() {

    this.post_sport_subscribe = this.postService.postCategorieSubject.subscribe(
      (post_categorie: any[]) => {
        this.Sportposts = post_categorie;
      }
    );
    
    this.postService.getPostForCategorie('sport');
  }

}
